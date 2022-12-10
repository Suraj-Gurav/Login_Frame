import React from 'react';
import {Route, Routes} from "react-router-dom";
import AddUser from './AddUser';
import Login from './Login';
import Update from './Update';

const Routing = ()=>{
    return(
        <>
            <Routes>
                <Route exact path='/' element={<Login/>}/>
                <Route exact path='/add' element={<AddUser/>}/>
                <Route exact path='/update' element={<Update/>}/>
            </Routes>
        </>
    );
};

export default Routing;