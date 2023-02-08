import "./stiff.css";
import Canvas from "../util/Canvas/canvas";
import { useEffect, useRef } from "react";
import drawXAxis from "../axis/xaxis";
import drawPolygon from "../plot/polygon";

const Stiff = () => {
	const canvasHeight = 500;
	const canvasWidth = 500;

	const data = [
		[
			{ name: "Na+", value: -7.2, y: 1 },
			{ name: "Ca++", value: -2.3, y: 2 },
			{ name: "Mg++", value: -6.3, y: 3 },
			{ name: "So4--", value: 4.3, y: 3 },
			{ name: "HCO3-", value: 2.3, y: 2 },
			{ name: "Cl-", value: 1.3, y: 1 },
		],
		[
			{ name: "Na+", value: -7.2, y: 1 + 3 },
			{ name: "Ca++", value: -2.3, y: 2 + 3 },
			{ name: "Mg++", value: -6.3, y: 3 + 3 },
			{ name: "So4--", value: 4.3, y: 3 + 3 },
			{ name: "HCO3-", value: 2.3, y: 2 + 3 },
			{ name: "Cl-", value: 1.3, y: 1 + 3 },
		],
		[
			{ name: "Na+", value: -7.2, y: 1 + 6 },
			{ name: "Ca++", value: -2.3, y: 2 + 6 },
			{ name: "Mg++", value: -6.3, y: 3 + 6 },
			{ name: "So4--", value: 4.3, y: 3 + 6 },
			{ name: "HCO3-", value: 2.3, y: 2 + 6 },
			{ name: "Cl-", value: 1.3, y: 1 + 6 },
		],
	];

	const xInitial = canvasWidth / 2;
	const yInitial = canvasHeight / 2;

	const canvasRef = useRef(null);
	useEffect(() => {
		const canvas = canvasRef.current;

		canvas.height = canvasHeight;
		canvas.width = canvasWidth;

		const context = canvas.getContext("2d");
		//Our first draw
		console.log(context);
		drawXAxis(
			context,
			xInitial, // x coordinate of origin of axis
			yInitial, // y coordinate of origin of axis
			0 * (Math.PI / 180), // angle of axis from global x axis
			canvasWidth / 2, // length of axis in pixels
			2, // unit length of axis in --units--
			13, // length of axis in --units--
			true, // whether to show cuts at every unit
			false, // if false, show cuts at every half unit length
			true // whether to show zero on axis or not
		);
		drawXAxis(
			context,
			xInitial,
			yInitial,
			180 * (Math.PI / 180),
			canvasWidth / 2,
			2,
			13,
			true,
			false,
			false
		);
		drawXAxis(
			context,
			xInitial,
			yInitial,
			90 * (Math.PI / 180),
			canvasHeight / 2,
			2,
			18,
			false,
			false
		);

		for (let i = 0; i < data.length; i++) {
			drawPolygon(
				context,
				xInitial, // x coordinate of origin of axis
				yInitial, // y coordinate of origin of axis
				0, // angle of axis from global x axis
				data[i], // array of points
				13, // length of axis in --units--
				canvasWidth / 2, // length of x axis in pixels
				canvasHeight / 2, // length of y axis in pixels
				true, // whether to fill color or not
				"red" // color of polygon
			);
		}

		// context.moveTo(xInitial, yInitial - 10);
		context.font = "bold 13px Arial";
		context.fillStyle = "black";
		context.fill();
		context.fillText("Meq/L", xInitial, yInitial - 20);
		context.fillText("Cations", xInitial - 100, yInitial - 20);
		context.fillText("Anions", xInitial + 100, yInitial - 20);
		context.fillStyle = "red";
		context.fill();
	}, []);
	return <Canvas canvasref={canvasRef}></Canvas>;
};

export default Stiff;
