import React from "react";
import "./PetStore.css";
import StoreCard from "../StoreCard/StoreCard";
import { DogItems } from "../../data/DogItems";
import { CatItems } from "../../data/CatItems";

const PetStore = () => {
	const DogItem = DogItems.slice(0, 3);
	const CatItem = CatItems.slice(0, 3);
	return (
		<>
			<div>
				<h1 className="petStore--title">Pet Store</h1>
				<img className="petStoreBack" src="/images/dog_food4.jpg" alt="" />
			</div>

			{/* Dogs */}
			<h1 className="pet-subtitle">Looking for Dog Products?</h1>
			<div className="pet-pet">
				{DogItem.map((data, key) => {
					return (
						<StoreCard
							key={key}
							link="/petStore/dog"
							imgSrc={data.imgSrc}
							name={data.name}
							age={data.company}
							price={data.price}
							breed={data.type}
							gender={data.delivertTime}
							text={data.review}
						/>
					);
				})}
			</div>
			{/* Cats */}
			<h1 className="pet-subtitle">Cat Products</h1>
			<div className="pet-pet">
				{CatItem.map((data, key) => {
					return (
						<StoreCard
							key={key}
							link="/petStore/dog"
							imgSrc={data.imgSrc}
							name={data.name}
							age={data.company}
							price={data.price}
							breed={data.type}
							gender={data.delivertTime}
							text={data.review}
						/>
					);
				})}
			</div>
		</>
	);
};

export default PetStore;
