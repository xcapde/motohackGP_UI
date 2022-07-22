import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import { motoServices } from "../../data_API/motoServices";

export function Detail() {
	const [id, setId] = useState(useParams().id)
	const [motoDetail, setMotoDetail] = useState({});
	const [showContact, setShowContact] = useState(false);
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
							<div className="header_top">
								<div className="contact_box">
									<div className="seller">
										<img src="https://www.semana.com/resizer/9rjTQQMtznGrxgVhtJenzLrXPJA=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/VB67IZFBYNDN5MZQFZK3ITSTLM.jpg" alt=""/> 
										<p className="contactMail"><i className="fa-solid fa-envelope"></i></p>
										<p className="contactWhats"><i className="fa-brands fa-whatsapp"></i></p>
										<p onClick={()=>setShowContact(true)} className="contactMore"><i className="fa-solid fa-plus"></i></p>

										<div className={showContact? "open_cnt" : "hidden"}>
											<button onClick={()=>setShowContact(false)} className="back_btn">
												<i class="fa-solid fa-arrow-left"></i>
											</button>
											<div className="open_box">												
												<div className="avatar">
													<img src="https://www.semana.com/resizer/9rjTQQMtznGrxgVhtJenzLrXPJA=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/VB67IZFBYNDN5MZQFZK3ITSTLM.jpg" alt=""/> 
													<h4> Jeffrey</h4>
												</div>
												<div className="contact">
													<div className="contactData"><i class="fa-solid fa-envelope contactMail"></i> infojeff@mail.com</div>
													<div className="contactData"><i class="fa-brands fa-whatsapp contactWhats"></i> +34 666 666 666</div>
												</div> 											
											</div>
										</div>
										
										
									</div>
									
								</div>								
								<div className="details_icons">  
									<button className={motoDetail.isClassic?"classic_icon" : "hidden"}><i className="fa-solid fa-landmark"></i></button>
									<button className={motoDetail.isEco?"eco_icon" : "hidden"}><i className="fa-solid fa-leaf"></i></button>
									<button className={motoDetail.isFavorite? "star isFavDetail" : "star"}><i className="fa-solid fa-star"></i></button>
								</div>
							</div>
							<div className="details_title">
								<h1 className="brand_detail">{ motoDetail.brand}</h1>
								<h1 className="model_detail">{ motoDetail.model}</h1>
							</div>																										
						</div>

						<div className="product-main">
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

						<div className="details_buy">
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
			</div>
			
		</section>
	);
}
