import { useEffect, useState } from "react";
import { Card } from "../card/Card";
import appData from "../../data_API/appData.json"
// import { Link } from "react-router-dom";

export function List(){
    const [motoList, setMotoList] = useState([]);

    useEffect(() => {
      setMotoList(appData)
    },[])
    
    
    return(
        <section>

            <div className="cardList">

                {motoList.map((moto,key) => 
                <Card key={key} moto={moto}/>
                )}
                
            </div>

        </section>
    )
}
