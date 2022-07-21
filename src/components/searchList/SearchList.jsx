import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../card/Card";

export function SearchList({searchList,setShowSearch}){
    const navigate = useNavigate();

    return(
        <section className="searchList">

            <header>
                <button onClick={()=>navigate(-0)&&setShowSearch(false)} className="back_btn">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>

                {searchList.length === 0? <h1 className="search_info">NO RESULTS <i className="fa-solid fa-motorcycle iconBike"></i></h1> 
                : searchList.length === 1? <h1 className="search_info">1 RESULT <i className="fa-solid fa-motorcycle iconBike"></i></h1> 
                : <h1 className="search_info">{`${searchList.length} RESULTS`} <i className="fa-solid fa-motorcycle iconBike"></i></h1>}
            </header>

                {searchList.map((moto,key) => 
                <Card key={key} moto={moto}/>
                )}          
            
        </section>
    )
}