import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "../App";
import { Detail } from "../pages/detail/Detail";
import { FavList } from "../pages/favlist/FavList";
import { Login } from "../pages/login/Login";

    export default function Router(){
        return (

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/detail/:id" element={<Detail/>}/>
                    <Route path="/favorites" element={<FavList/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
    
