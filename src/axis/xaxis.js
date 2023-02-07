// cutsReq: whether to put cuts into axis or not
// equalCuts: cuts at every unitLength if true and big ones at every unit and small ones at half unit if false

const drawXAxis = (
	context,
	x,
	y,
	angle,
	length,
	cutsReq,
	unitLength,
	equalCuts
) => {
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(x, y);
	// Try rotate method
	context.lineTo(length * Math.cos(angle) + x, length * Math.sin(angle) + y);
	context.stroke();

	if (cutsReq === true) {
		if (equalCuts) {
			for (let i = 0; i < length; i += unitLength) {
				context.moveTo(
					unitLength * i * Math.cos(angle) + x,
					unitLength * i * Math.sin(angle) + y
				);
				context.lineTo(
					unitLength * i * Math.cos(angle) + x,
					unitLength * i * Math.sin(angle) + y + 2
				);
				context.stroke();
			}
		} else {
			for (let i = 0; i <= length; i += unitLength) {
				context.fillRect(
					i * Math.cos(angle) + x,
					i * Math.sin(angle) + y,
					3.5,
					3.5
				);

				// context.beginPath();
				// context.ellipse(
				// 	i * Math.cos(angle) + x,
				// 	i * Math.sin(angle) + y,
				// 	3.5,
				// 	1,
				// 	angle + Math.PI / 2,
				// 	0,
				// 	2 * Math.PI
				// );
				// context.stroke();
			}
			for (let i = 0; i <= length; i += unitLength / 2) {
				context.fillRect(
					i * Math.cos(angle) + x,
					i * Math.sin(angle) + y,
					2.5,
					2.5
				);
			}
		}
	}
};
export default drawXAxis;
