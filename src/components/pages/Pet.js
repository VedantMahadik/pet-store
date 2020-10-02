import React from "react";
import StoreCard from "../StoreCard/StoreCard";
import "./Pet.css";
import { Dogs } from "../../data/Dogs";
import { Cats } from "../../data/Cats";

const Pet = () => {
	//show only first 3 elements of the list
	const DogItems = Dogs.slice(0, 3);
	const CatItems = Cats.slice(0, 3);
	return (
		<div>
			{/* head */}
			<div className="pet-section">
				<img className="pet-back" src="images/home1.jpg" alt="" />
				<h1 className="pet-text">A pet is all you need</h1>
			</div>

			{/* Dogs */}
			<h1 className="pet-subtitle">Looking for Dogs?</h1>
			<div className="pet-pet">
				{DogItems.map((data, key) => {
					return (
						<StoreCard
							key={key}
							link="/pet/dog"
							imgSrc={data.imgSrc}
							name={data.name}
							age={data.age}
							price={data.price}
							breed={data.breed}
							gender={data.gender}
							text={data.text}
						/>
					);
				})}
			</div>

			{/* Cats */}
			<h1 className="pet-subtitle">Or Cats?</h1>
			<div className="pet-pet">
				{CatItems.map((data, key) => {
					return (
						<StoreCard
							key={key}
							link="/pet/cat"
							imgSrc={data.imgSrc}
							name={data.name}
							age={data.age}
							price={data.price}
							breed={data.breed}
							gender={data.gender}
							text={data.text}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Pet;
