import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motoServices } from "../../data_API/motoServices";

export function Detail() {
	const [id, setId] = useState(useParams().id)
	const [motoDetail, setMotoDetail] = useState({})

	//const sellerAvatar = motoDetail.seller.avatar;
	useEffect(() => {
	  if(!id) return;

	  const getDataById = () => {
			motoServices.getMotoById(id).then(res => {
				if(res){
					setMotoDetail(res);
					console.log(res)
				};
			});
		};
	
		getDataById(id);

	}, [id])
	//console.log(sellerAvatar)
	return (
		
		<section>
			
			<div className="wrapper">
				<div className="card">
					<div className="product-right">
						<img
							src={motoDetail.image}
							alt=""
						/>
					</div>
					<div className="product-left">
						<div className="star"><i className="fa-solid fa-star"></i></div>
             <div className="header">
						{/* <img src={motoDetail.seller.avatar} alt=""/>  */}
							   {/* <p> { motoDetail.seller.name}</p>      */}
							<h2>{motoDetail.brand}</h2>
							<h2>{ motoDetail.model}</h2>
						</div>

						<div className="product-main">
							<div className="focus">
								<span>{ motoDetail.prodYear}</span>
								<span>{ motoDetail.km}km</span>
								<span>{ motoDetail.cc}cc</span>
								<span>{ motoDetail.hp}</span>
								<i className="fa-solid fa-location-dot"></i>
								<span>{ motoDetail.location}</span>
							</div>
							<p>{ motoDetail.description}
							</p>
						</div>

						<div className="product-details">
							<div className="product-total">
								<p>€{motoDetail.price }</p>
							</div>
						</div>
						<div className="product-btns">
							<button className="product-add">Buy</button>
						</div>
					</div>
				</div>
			</div>
			
		</section>
	);
}
