    const express = require('express');
    const path = require('path');
    const cors = require('cors');
    const cookieParser = require('cookie-parser');
    const env = require('dotenv/config');
    const connectDB = require('./config/mongoose-connection');
    const userRouter = require('./routes/userRoutes');
    const imageRouter = require('./routes/imageRoutes');

    const app = express();
    const PORT = process.env.PORT || 3000;

    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({extended:true}));
    app.use(express.static(path.join(__dirname,"public")));

    // connectDB();
    app.get('/', function(req,res){
        res.send("API Is working");
    })

    app.use('/api/user', userRouter);    
    app.use('/api/image', imageRouter);        

    async function startServer() {
        try {
            await connectDB(); // wait until DB is connected
            app.listen(PORT, () => {
                console.log("Server is running on " + PORT);
            });
        } catch (err) {
            console.error("Failed to connect to the database", err);
            process.exit(1);
        }
    }

    startServer();

