import { useEffect, useState } from "react";
import { motoServices } from "../../data_API/motoServices";
import { Card } from "../card/Card";
import { Loader } from "../loader/Loader";

export function List(){
    const [motoList, setMotoList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getAllData();
    },[]
    );

    const getAllData=()=>{
        setIsLoading(true)
            motoServices.getAllMotos().then(res =>{
                if(!res) return;
                setMotoList(res);
                setIsLoading(false)
            })
    }    
    
    return(
        <section className="cardList">

                {isLoading? <Loader/> : '' }

                {motoList.map((moto,key) => 
                <Card key={key} moto={moto} getAllData={getAllData}/>
                )}              

        </section>
    )
}
