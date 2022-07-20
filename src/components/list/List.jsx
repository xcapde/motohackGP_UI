import { useState } from "react";
import { Link } from "react-router-dom";


export function List(){
    const [productList, setProductList] = useState()



    
    return(
        <section>
            <Link to="/favorites"> CLICK FOR FAVLIST! </Link>
        </section>
    )
}
