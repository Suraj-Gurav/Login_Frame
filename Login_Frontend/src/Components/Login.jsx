import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";
import { NavLink } from 'react-router-dom';

const Login = () => {
  
    const [data, setData]=useState();
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();
    const [message,setMessage]=useState();
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect((req,res)=>{
        axios.get("http://localhost:5002/admin/")
        .then(async (res)=>{
            const data= await res.data;
            setData(data);  
        })
        .catch(err=>{res.json(err)})
    },[]);  

const signIn=(e)=>{
    e.preventDefault();
    const formData =
    {
        email:email,
        pass:pass
    }
     data.map((row) =>{
        if (row.emailID === formData.email){      
            if (row.password !== formData.pass) { 
                setMessage("Invalid password");   
            } else {
              setIsSubmitted(true);
              alert("Login Successfully"); 
            }
          } else {
            setMessage("Invalid User"); 
          }
    });         
};

const renderForm =(
    <div className='container mt-5 p-2 px-5 shadow-lg p-2 mb-2 bg-body rounded'>
                <h1 className='text-center'>Login</h1>
            <form onSubmit={signIn}> 
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <label  className="form-label">{message}</label>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
                <label  className="form-label">{message}</label>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                <NavLink exact to="/add"><button type="button" className="mx-3 btn btn-secondary btn-lg btn-block">Register</button></NavLink>
            </div>
            <NavLink exact to="/update"><p class="text-decoration-underline">Forget/Update Info...</p></NavLink>
            </form>
            </div>
    );
    return (
        <>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </>   
    );
};

export default Login;