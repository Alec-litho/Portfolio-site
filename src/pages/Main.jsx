import Project from "../components/Project"
import "../style/main-page.css"
import data from "../projects.json"
import { useContext, useState } from "react"

export default function Main() {
    const [imageToPresent, setImageToPresent] = useState(null)
    return (
        <div>
            <div className="main">
            <div className="present">
                <div className="presentHeader">
                    <h1>My projects</h1>
                </div>
                <div className="presentDescription">
                    <h4>Turbo don't give up! Without fish to work with, you can’t fish the pond out  Turbo </h4>
                </div>
            </div>
            <div className="projects">
                {data.projects.map(el => {return <Project project={el} setImage={setImageToPresent} key={Math.random()*1000}/>})}
            </div>
            <div className="footer"></div>
            </div>
            <div className={imageToPresent? "imagePresenter active" : "imagePresenter"}>
                <img src={imageToPresent}  onClick={() => setImageToPresent(null)} alt="" />
                <div className="bg" onClick={() => setImageToPresent(null)}></div>
            </div>
        </div>
    )
}