import "./stiff.css";
import Canvas from "../util/Canvas/canvas";
import { useEffect, useRef } from "react";
import drawXAxis from "../axis/xaxis";
const Stiff = () => {
	const canvasHeight = 500;
	const canvasWidth = 500;

	const data = [
		{ name: "Ca++", value: -2.3, y: 1 },
		{ name: "So4--", value: 4.3, y: 1 },
		{ name: "Mg++", value: -6.3, y: 2 },
		{ name: "Cl-", value: 1.3, y: 2 },
		{ name: "Fe++", value: -4.3, y: 3 },
	];

	const xInitial = canvasWidth / 2;
	const yInitial = canvasHeight / 2;
	const axisAngle = 90; // In Degrees and increases clockwise
	const axisLength = canvasWidth;

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
			xInitial,
			yInitial,
			(axisAngle + 360) * (Math.PI / 180),
			axisLength,
			true,
			50,
			false
		);
		// drawXAxis(
		// 	context,
		// 	xInitial,
		// 	yInitial,
		// 	90 * (Math.PI / 180),
		// 	axisLength,
		// 	true,
		// 	50,
		// 	true
		// );
	}, []);
	return <Canvas canvasref={canvasRef}></Canvas>;
};

export default Stiff;
