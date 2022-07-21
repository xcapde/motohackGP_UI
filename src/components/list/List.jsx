import { useEffect, useState } from "react";
import { motoServices } from "../../data_API/motoServices";
import { Card } from "../card/Card";
import { Loader } from "../loader/Loader";
// import appData from "../../data_API/appData.json"
// import { Link } from "react-router-dom";

export function List(){
    const [motoList, setMotoList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    //   setMotoList(appData)
        getAllData();
    },[]
    );

    const getAllData=()=>{
        setIsLoading(true)
            motoServices.getAllMotos().then(res =>{
                if(!res) return;
                setMotoList(res);
            })
        setIsLoading(false)
    }    
    
    return(
        <section>

            {isLoading? <Loader/> : '' }

            <div className="cardList">

                {motoList.map((moto,key) => 
                <Card key={key} moto={moto}/>
                )}
                
            </div>



        </section>
    )
}
