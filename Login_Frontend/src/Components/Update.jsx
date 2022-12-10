import React from "react";
import { useState } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

const Update = () => {
const [name,setName]=useState();
const [phoneNo,setPhoneNo]=useState();
const [emailID,setEmailID]=useState();
const [password,setPassword]=useState();
const [confirmPassword,setConfirmPassword]=useState();
const [message,setMessage]=useState();

const adminData=(e)=>{
    e.preventDefault();
    const dataObj={
        name,
        phoneNo,
        emailID,
        password,
        confirmPassword
    }
    console.log(dataObj);
    axios.post("http://localhost:5002/admin/add",dataObj);
    alert("Add Admin Successfully");
    setName("");
    setPhoneNo("");
    setEmailID("");
    setPassword("");
    setConfirmPassword("");
    setMessage("");
};
//compare password and confirmPassword
const comparePass = (e)=>{
    setConfirmPassword(e.target.value);
    if(password === e.target.value){
        setMessage("Confirm Password are match");
    }else{
        setMessage("*Confirm Password are not match*");
    }
};


    return (
        <>
            <div className='container mt-3 p-2 px-5 shadow-lg p-2 mb-2 bg-body rounded'>
                <h1 className='text-center'>Update Admin</h1>
            <form onSubmit={adminData}>
            <div className="mb-3 ">
                <label className="form-label">Fullname </label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="number" value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}}className="form-control" />
            </div>
                
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" value={emailID} onChange={(e)=>{setEmailID(e.target.value)}}className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={(e)=>{comparePass(e)}}className="form-control"/>
                <label  className="form-label">{message}</label>
            </div>
            <button type="button" className={`btn btn-primary btn-lg 
              ${password === confirmPassword ? "btn-block":"d-none"}`}>Update</button>

            <NavLink exact to="/"><button type="button" className="mx-3 btn btn-secondary btn-lg btn-block">Back</button></NavLink>
            </form>
            </div>
        </>

    );
};

export default Update;