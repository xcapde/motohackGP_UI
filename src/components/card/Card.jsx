export function Card(){


    return (
        <section>
            <div className="card_cnt">

                <div className="card_img_cnt">
                    <img className="moto_img" src="https://www.motofichas.com/images/phocagallery/Kawasaki/z900-2022/02-kawasaki-z900-2022-estudio-verde.jpg" alt="moto"/>
                    <img className="sellerAvatar" alt="seller avatar"/>
                    <p className="moto_year">YEAR</p>
                    <button className="fav_btn">FAV</button>
                </div>

                <div className="card_text_cnt">
                    <div className="card_basicInfo">
                        <div className="card_info_box">
                            <h1 className="moto_brand">MARCA</h1>
                            <h2 className="moto_model">MODELO</h2>
                        </div>

                        <button className="card_info_btn">+INFO</button>

                    </div>

                    <div className="card_tech_box">
                        <div className="techInfo">
                            <p className="techdata">20.000km</p>
                            <p className="techdata">943cc</p>
                            <p className="techdata">125cv</p>
                        </div>
                        <div className="price_location">
                            <h1 className="locationInfo">Oviedo</h1>                            
                            <h1 className="priceInfo">6500€</h1>                            
                        </div>
                    </div>                      
                </div>

            </div>          
        </section>
    )
}