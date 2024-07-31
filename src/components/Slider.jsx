import { useRef, useState } from "react"
import "../style/slider.css"

export default function Slider({images, setImage}) {
    let [currImg, setCurrImg] = useState(0);
    let img = useRef(null);

    return (
        <div className="slider" > 
            <div className="setImageIcon">
                <img src="https://i.ibb.co/Br4dmGg/fullscreen-1.png" alt="" onClick={() => setImage(img.current.getAttribute("src"))}/>
            </div>
            <img 
            src={images[currImg]} 
            alt="#" 
            ref={img} 
            onClick={() => setCurrImg(prev => {return prev+1 === images.length? 0 : prev+1})}/>
        </div>
    )
}