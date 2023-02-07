import './canvas.css';
const Canvas = ({children,canvasref}) => {
    return (
        <canvas id="main_canvas" ref={canvasref}></canvas>
    );
}

export default Canvas;
