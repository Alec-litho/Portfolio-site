import Project from "../components/Project"
import "../style/main-page.css"
import data from "../projects.json"

export default function Main() {

    return (
        <div>
            <div className="present">
                <div className="presentHeader">
                    <h1>My projects</h1>
                </div>
                <div className="presentDescription">
                    <h4>Turbo don't give up! Without fish to work with, you can’t fish the pond out  Turbo </h4>
                </div>
            </div>
            <div className="projects">
                {data.projects.map(el => {return <Project project={el} key={Math.random()*1000}/>})}
            </div>
        </div>
    )
}