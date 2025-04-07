import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


export const useOnClickHandler = ()=>{
    
    const {user, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate();
    
    return () => {
        if(user){
            navigate('/result')
        } else {
            setShowLogin(true)
            //fixed the scrolled hided form
            // window.scrollTo({top:0 , behavior:"smooth"})
        }
    }
}