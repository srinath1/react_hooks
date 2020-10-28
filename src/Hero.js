import React from 'react';
import phoneImg from './images/phone.svg';

import { useGlobalContext } from './context';

const Hero = () => {
	const { closeSubmenu } = useGlobalContext();

	return (
		<section className="hero">
			<article className="hero-info">
				<h1>Payment infrastructre for internet</h1>
				<p>Internet infrastructure for the internet.It will be payment gatway</p>
				<button className="btn">Start Now</button>
			</article>
			<article className="hero-images">
				<img src={phoneImg} className="phoneimg" alt="phone" />>
			</article>
		</section>
	);
};

export default Hero;
