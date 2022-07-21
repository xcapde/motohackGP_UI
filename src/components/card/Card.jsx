import { Link } from "react-router-dom";

export function Card(props){

    const markFavorite=(moto)=>{
        // let thisMoto = moto

        // if(thisMoto.isFavorite === false){
        //     thisMoto.isFavorite=true

        //  }else thisMoto.isFavorite=false

        // //  props.getAllData();

        // console.log(moto.isFavorite)
    }

    return (
        <section className="card_cnt">

                <div className="card_img_cnt">
                    <Link to={`/detail/${props.moto.id}`}>
                        <img className="moto_img" src={props.moto.image} alt="moto"/>
                    </Link>
                    <img src={props.moto.seller.avatar} className="sellerAvatar" alt="seller avatar"/>
                    <p className="moto_year">{props.moto.year}</p>
                    <button onClick={()=>markFavorite(props.moto)} className={props.moto.isFavorite? "fav_btn isFav" : "fav_btn"}>{props.moto.isFavorite}</button>
                </div>

                <div className="card_text_cnt">
                    <div className="card_basicInfo">
                        <div className="card_info_box">
                            <h1 className="moto_brand">{props.moto.brand}</h1>
                            <h2 className="moto_model">{props.moto.model}</h2>
                        </div>
                        <div className="techInfo">
                            <p className="techdata">{props.moto.km}km</p>
                            <p className="techdata">{props.moto.cc}cc</p>
                            <p className="techdata">{props.moto.hp}</p>
                        </div>

                    </div>

                    <div className="card_tech_box">
                        <div className="price_location">
                            <h1 className="locationInfo">{props.moto.location}</h1>                            
                            <h1 className="priceInfo">{props.moto.price}€</h1>    
                            <button className="card_info_btn">+INFO</button>                        
                        </div>
                    </div>                      
                </div>

        </section>
    )
}
