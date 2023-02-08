const drawPolygon = (
	ctx,
	x,
	y,
	angle,
	points,
	lengthOfAxis,
	widthOfCanvas,
	heightOfCanvas,
	fill,
	color
) => {
	const relativeValue = (value, factor) => (value * factor) / lengthOfAxis;

	ctx.moveTo(x, y);
	ctx.rotate(angle);
	ctx.beginPath();
	ctx.strokeStyle = "blue";

	for (let i = 0; i < points.length; i++) {
		ctx.lineTo(
			x + relativeValue(points[i].value, widthOfCanvas),
			y + relativeValue(points[i].y, heightOfCanvas)
		);
		ctx.stroke();
	}
	ctx.closePath();
	ctx.stroke();

	if (fill) {
		ctx.fillStyle = "red";
		ctx.fill();
	}
};

export default drawPolygon;
