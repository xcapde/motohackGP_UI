import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "../components/detail/Detail";
import { FavList } from "../components/favlist/FavList";
import { Home } from "../pages/Home";

    export default function Router () {
        return (

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={Home}/>
                    <Route path="/detail/:id" element={Detail}/>
                    <Route path="/favorites" element={FavList}/>
                </Routes>
            </BrowserRouter>
        )
    }
    
