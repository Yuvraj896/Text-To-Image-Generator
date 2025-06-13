import axios from "axios";
import { createContext, useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token , setToken] = useState(localStorage.getItem('token'));
  const [credit , setCredit] = useState(false);

  const navigate = useNavigate();

  async function loadCredits(){
    try {
      const {data} = await axios.get(`${backendUrl}/api/user/credits`, {headers: {token}});
      
      if(data.success){
        setCredit(data.userCredit);
        setUser(data.user)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(function (){
    if(token)
      loadCredits();

  },[token])

  async function generateImages(prompt){
    try {
      console.log("hello");
      const {data} = await axios.post(`${backendUrl}/api/image/generate-image`, {prompt} ,{headers:{token}});

      console.log("Image API Response:", data);

      if(data.success){
        loadCredits();
        return data.image
      } else {
        toast.error(data.message);
        loadCredits();
        
        if(data.credit === 0 ){
          navigate('/buy');
        }
      }

    } catch (error) {
      toast.error(error.message);      
    }
  }

  function logout(){
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  }
 
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log("Loaded backend URL:", backendUrl);


  const value = {
    user,setUser,
    showLogin,setShowLogin,
    token,setToken,
    backendUrl,
    credit,setCredit,
    loadCredits,
    logout,
    generateImages
  };  

  return   (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;