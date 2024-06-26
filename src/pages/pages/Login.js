import React from 'react'
import Header from '../../components/Auth/Header';
import Login from '../../components/Auth/Login';

export default function LoginPage(){
    return(
        <div className="bg-[#0a364ef1]" > 
            <Header 
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
            />
            <Login/>   
        </div>
    )
}
 