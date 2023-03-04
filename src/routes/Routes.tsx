import { Navigate, Route, Routes } from "react-router-dom";
import {useState} from 'react';
import Login from "../components/Login";
import Home from "../components/Home";
import { UsersContextProvider } from "../context/LoginContext";
import CreateUser from "../components/CreateUser";
import Form from "../components/Form";

const Rutas = ()=>{
    return (
        <UsersContextProvider>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="form-add-user" element={<Form/>}/>
            </Routes>
        </UsersContextProvider>
        
    )
}




export default Rutas;