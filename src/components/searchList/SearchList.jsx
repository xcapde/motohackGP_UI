import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../card/Card";

export function SearchList({searchList,setShowSearch}){
    const navigate = useNavigate();

    return(
        <section className="searchList">

            <button onClick={()=>navigate(-0)&&setShowSearch(false)} className="back_btn">
                <i class="fa-solid fa-arrow-left"></i>
            </button>

            {searchList.length === 0? 'Not results' : 
                searchList.map((moto,key) => 
                <Card key={key} moto={moto}/>
                )               
            }

        </section>
    )
}