import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import { motoServices } from "../../data_API/motoServices";

export function Detail() {
	const [id, setId] = useState(useParams().id)
	const [motoDetail, setMotoDetail] = useState({})
	const navigate = useNavigate();


	//const sellerAvatar = motoDetail.seller.avatar;
	useEffect(() => {
	  if(!id) return;

	  const getDataById = () => {
			motoServices.getMotoById(id).then(res => {
				if(res){
					setMotoDetail(res);
				};
			});
		};
	
		getDataById(id);

	}, [id])
	//console.log(sellerAvatar)
	return (
		
		<section>
			<Navbar/>

			<button onClick={()=>navigate(-1)} className="back_btn">
				<i className="fa-solid fa-arrow-left"></i>
			</button>
			
			<div className="wrapper">
				<div className="card">
					<div className="product-right">
						<img src={motoDetail.image} alt="moto"/>
					</div>

					<div className="product-left">
             			<div className="header">

							<div className="contact_box">
								<img src="https://www.semana.com/resizer/9rjTQQMtznGrxgVhtJenzLrXPJA=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/VB67IZFBYNDN5MZQFZK3ITSTLM.jpg" alt=""/> 
								<h4> Jeffrey</h4>
								<p><i class="fa-solid fa-envelope"></i> infojeff@mail.com</p>
								<p><i class="fa-brands fa-whatsapp"></i> +34 666 666 666</p> 
							</div>								
							
							<div className="details_icons">  
								<button className={motoDetail.isFavorite? "star isFavDetail" : "star"}><i className="fa-solid fa-star"></i></button>
								<button className={motoDetail.isClassic?"classic_icon" : "hidden"}><i className="fa-solid fa-landmark"></i></button>
								<button className={motoDetail.isEco?"eco_icon" : "hidden"}><i className="fa-solid fa-leaf"></i></button>
							</div>
							
							<h1 className="brand_detail">{ motoDetail.brand}</h1>
							<h1 className="model_detail">{ motoDetail.model}</h1>										
							
						</div>

						<div className="product-main">
							<h5>Properties:</h5>
							<div className="focus">
								<span>Year:{ motoDetail.prodYear}</span>
								<span>Km:{ motoDetail.km}</span>
								<span>CC:{ motoDetail.cc}</span>
								<span>HP:{ motoDetail.hp}</span>								
								<span><i className="fa-solid fa-location-dot"></i>{ motoDetail.location}</span>
							</div>
							<p>{ motoDetail.description}
							</p>
						</div>

						<div className="product-details">
							<div className="product-total">
								<p>{motoDetail.price }€</p>
							</div>
						</div>
						<div className="product-btns">
							<button className="product-add">BUY</button>
						</div>
					</div>
				</div>
			</div>
			
		</section>
	);
}
