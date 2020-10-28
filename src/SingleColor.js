import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
	const [ alert, setAlert ] = useState(false);
	const bcg = rgb.join(',');
	console.log(hexColor);
	const hex = rgbToHex(...rgb);
	console.log(rgbToHex(...rgb));
	console.log(...rgb);
	console.log(typeof rgbToHex(...rgb));
	const hexvalue = `#${hexColor}`;
	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false);
		}, 3000);
		return clearTimeout(timeout);
	}, []);
	return (
		<article
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hexvalue);
			}}
			className={`color ${index > 10 && 'color-light'}`}
			style={{ backgroundColor: `rgb(${bcg})` }}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">{hexvalue}</p>
			{alert && <p className="alert">copied to clip board</p>}
		</article>
	);
};

export default SingleColor;
