import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motoServices } from "../../data_API/motoServices";

export function Detail() {
	const [id, setId] = useState(useParams().id)
	const [motoDetail, setMotoDetail] = useState({})

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
	

	return (
		<section>
			<div className="wrapper">
				<div className="card">
					<div className="product-right">
						<img
							src="https://res-2.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/t/r/tr1_lchair_sk_34-toro-lounge-chair-chocolate-smoke.jpg"
							alt=""
						/>
					</div>
					<div className="product-left">
						<div className="header">
							<p> Prduct Owner</p>
							<h2>{motoDetail.brand}</h2>
							<h2>Z900</h2>
						</div>

						<div className="product-main">
							<div className="focus">
								<span>Year:</span>
								<span>Km:</span>
								<span>CC:</span>
								<span>CV:</span>
								<span>Oviedo:</span>
							</div>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Ratione voluptatem quam vel,
								delectus expedita ullam asperiores laudantium
								modi. Voluptatum eum cum quis ea modi.
								Reiciendis asperiores aut beatae odit minima.
							</p>
						</div>

						<div className="product-details">
							<div className="product-total">
								<h3>Total Price</h3>
								<p>$1399.00</p>
							</div>
						</div>
						<div className="product-btns">
							<button className="product-add">Add To Cart</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
