// cutsReq: whether to put cuts into axis or not
// equalCuts: cuts at every unitLength if true and big ones at every unit and small ones at half unit if false

const fixTextPlacement = (angle) => {
	let xShift = 0,
		yShift = 0;

	if (angle >= 0 && angle <= Math.PI / 2) {
		yShift = 2;
		xShift = 10;
		if (angle < Math.PI / 4) {
			xShift = 2;
			yShift = -5;
		}
	} else if (angle > Math.PI / 2 && angle <= Math.PI) {
		xShift = -2;
		yShift = -5;
		if (angle < 3 * (Math.PI / 4)) {
			xShift = -10;
			yShift = -2;
		}
	} else if (angle > Math.PI && angle <= (3 * Math.PI) / 2) {
		xShift = 10;
		yShift = 2;
		if (angle < 5 * (Math.PI / 4)) {
			xShift = 2;
			yShift = -5;
		}
	} else if (angle > (3 * Math.PI) / 2 && angle < 2 * Math.PI) {
		xShift = -2;
		yShift = -5;
		if (angle < 7 * (Math.PI / 4)) {
			xShift = -10;
			yShift = -2;
		}
	}

	return { xShift, yShift };
};

const drawXAxis = (
	context,
	x,
	y,
	angle,
	length,
	unitLength,
	maximumLengthOnAxis,
	cutsReq,
	equalCuts,
	showZero
) => {
	// context.scale(scaleFactorX, scaleFactorY);
	if (angle < 0) {
		angle += 2 * Math.PI;
	}
	angle %= 2 * Math.PI;

	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(length * Math.cos(angle) + x, length * Math.sin(angle) + y);
	context.stroke();

	context.textAlign = "center";

	let { xShift, yShift } = fixTextPlacement(angle);

	if (cutsReq === true) {
		let cnt = 0;
		if (equalCuts) {
			for (
				let i = 0;
				i < length;
				i += (length * unitLength) / maximumLengthOnAxis
			) {
				context.beginPath();
				context.fillStyle = "black";
				context.ellipse(
					i * Math.cos(angle) + x,
					i * Math.sin(angle) + y,
					1.5,
					1,
					angle + Math.PI / 2,
					0,
					2 * Math.PI
				);
				context.fill();
				context.stroke();

				if (cnt === 0 && showZero === false) {
					cnt++;
					continue;
				}

				context.fillText(
					unitLength * cnt,
					i * Math.cos(angle) + x + xShift,
					i * Math.sin(angle) + y + yShift,
					20
				);
				cnt++;
			}
		} else {
			for (
				let i = 0;
				i <= length;
				i += (length * unitLength) / maximumLengthOnAxis
			) {
				context.beginPath();
				context.fillStyle = "black";
				context.ellipse(
					i * Math.cos(angle) + x,
					i * Math.sin(angle) + y,
					1.5,
					1,
					angle + Math.PI / 2,
					0,
					2 * Math.PI
				);
				context.fill();
				context.stroke();

				if (cnt === 0 && showZero === false) {
					cnt++;
					continue;
				}

				context.fillText(
					cnt * unitLength,
					i * Math.cos(angle) + x + xShift,
					i * Math.sin(angle) + y + yShift,
					20
				);
				cnt++;
			}
			for (
				let i = 0;
				i <= length;
				i += (length * unitLength) / (maximumLengthOnAxis * 2)
			) {
				context.beginPath();
				context.fillStyle = "black";
				context.ellipse(
					i * Math.cos(angle) + x,
					i * Math.sin(angle) + y,
					0.75,
					1,
					angle + Math.PI / 2,
					0,
					2 * Math.PI
				);
				context.fill();
				context.stroke();

				// context.fillText(
				// 	i,
				// 	i * Math.cos(angle) + x,
				// 	i * Math.sin(angle) + y,
				// 	20
				// );
			}
		}
	}
};
export default drawXAxis;
