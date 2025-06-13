const userModel = require("../models/userModel");
const formData = require('form-data');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config(); 

const generateImages = async function (req, res) {
  try {
    const userId = req.userId;
    const {prompt} = req.body;

    console.log(prompt);
    
    const user = await userModel.findById(userId);

    console.log(user);
    
    
    if(!user || !prompt)
        return res.json({success: false , message: "Details not filled"});

    if(user.credits <= 0 )
        return res.json({success: false , message: "No credit balance" , credit : user.credits});

    const formdata = new formData();
    formdata.append("prompt", prompt);

    console.log(formdata);
    
    // console.log("Using API key:", process.env.CLIP_API);
    // console.log("prompt: "+ prompt);
    
    const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1', formdata ,{
        headers: {
          ...formdata.getHeaders(),
            'x-api-key': process.env.CLIP_API,  
        },

        responseType : "arraybuffer"
    })

    

    const baseimage = Buffer.from(data ,"binary").toString("base64");
    const image = `data:image/png;base64,${baseimage}`;
    
    user.credits -= 1;
    await user.save();

    return res.json({success:true , message:"Image Generated", credits : user.credits , image});

  } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
  }
};

module.exports = generateImages;