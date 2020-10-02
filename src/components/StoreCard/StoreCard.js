import React, { useState } from "react";
import "./StoreCard.css";
import Modal from "react-modal";

const StoreCard = ({ breed, name, price, gender, age, text, imgSrc, link }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<div className="store">
			<img
				onClick={() => {
					setModalIsOpen(true);
				}}
				className="card-img"
				src={imgSrc}
				alt=""
			/>
			<Modal
				className="Modal"
				isOpen={modalIsOpen}
				onRequestClose={() => {
					setModalIsOpen(false);
				}}
			>
				<div className="modal">
					<img className="store-left" src={imgSrc} alt="" />
					<div className="store-right">
						<div className="modal-header">
							<h1 className="modal-title">
								{name} , {age}yo
							</h1>
							<button
								className="close-button"
								onClick={() => {
									setModalIsOpen(false);
								}}
							>
								&times;
							</button>
						</div>
						<div className="modal-body">
							<h2>Breed: {breed}</h2>
							<h2>Price: {price}</h2>
							<h2>Gender: {gender}</h2>
							<p>{text}</p>
							<button className="btn-card">
								<a className="btn-link" href={link}>
									See More
								</a>
							</button>
							<button className="btn-card">
								<a className="btn-link" href="/sign-up">
									Contact
								</a>
							</button>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default StoreCard;
