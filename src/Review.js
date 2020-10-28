import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	const [ index, setIndex ] = useState(0);
	const { name, job, image, text } = people[index];
	const checkNumber = (number) => {
		if (number > people.length - 1) {
			return 0;
		}
		if (number < 0) {
			return people.length - 1;
		}
		return number;
	};
	const randomPerson = () => {
		let ranNum = Math.floor(Math.random() * people.length);
		if (ranNum === index) {
			ranNum = index + 1;
		}
		setIndex(ranNum);
	};
	const nextPerson = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};
	const prevPerson = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};
	return (
		<article className="review">
			<div className="img-container">
				<img src={image} alt={name} className="person-img" />
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<h4 className="author">{name}</h4>
			<p className="job">{job}</p>
			<p className="info">{text}</p>
			<div className="button-container">
				<button className="prev-btn" onClick={prevPerson}>
					<FaChevronRight />
				</button>
				<button className="prev-btn" onClick={nextPerson}>
					<FaChevronLeft />
				</button>
			</div>
			<button className="random-btn" onClick={randomPerson}>
				surprise me
			</button>
		</article>
	);
};

export default Review;
