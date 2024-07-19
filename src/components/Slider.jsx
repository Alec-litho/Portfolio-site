import { useRef, useState } from "react"
import "../style/slider.css"

export default function Slider({images}) {
    let [currImg, setCurrImg] = useState(0);
    let img = useRef(null);

    return (
        <div className="slider" > 
            <img src={images[currImg]} alt="#" ref={img} onClick={() => setCurrImg(prev => {return prev+1 === images.length? 0 : prev+1})}/>
        </div>
    )
}