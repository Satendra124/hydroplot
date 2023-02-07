import './stiff.css';
import Canvas from '../util/Canvas/canvas';
import { useEffect, useRef } from 'react';
const Stiff = () => {
    const data = [
        { name: 'Ca++', value: -2.3, y: 1 },
        { name: 'So4--', value: 4.3, y: 1 },
        { name: 'Mg++', value: -6.3, y: 2 },
        { name: 'Cl-', value: 1.3, y: 2 },
        { name: 'Fe++', value: -4.3, y: 3 },
    ];
    const canvasRef = useRef(null);
    useEffect(()=>{
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        console.log(context)
    },[])
    return (
        <Canvas canvasref={canvasRef}>
        </Canvas>
    );
}

export default Stiff;
