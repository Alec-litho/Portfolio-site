import { useState } from "react"
import "../style/projectComponent.css"
import Slider from "./Slider"
import ProjectPreviewSocialSite from "./ProjectPreviewSocialSite"
import ProjectPreviewLupisVulpesSite from "./ProjectPreviewLupisVulpesSite"
import ProjectPreviewSeaBattleGame from "./ProjectPreviewSeaBattleGame"
import ProjectPreviewNewsSite from "./ProjectPreviewNewsSite"

export default function Project({project}) {
    const projectPreviews = {
        "SocialSite":<ProjectPreviewSocialSite/>,
        "LupisVulpesSite": <ProjectPreviewLupisVulpesSite/>,
        "BattleSeaGame": <ProjectPreviewSeaBattleGame/>,
        "NewsSite": <ProjectPreviewNewsSite/>
    }
    return (
        <div className="project">
            {projectPreviews[project.name]}
            <ProjectInfo projectInformation={project}/>
        </div>
    )
}

function ProjectInfo({projectInformation}) {
    let windowList = ["technologies", "preview", "structure", "information"]
    let [currWindow, setCurrWindow] = useState("technologies")

    function chooseWindow(e) {
        if(e.target.nodeName === "div") setCurrWindow(e.target.childNodes[0].innerText)
        else setCurrWindow(e.target.innerText)
    }

    return (
        <div className="projectInfo">
            <div className="menu">
                {windowList.map((option, indx, arr) => <div className={`${arr[indx]===currWindow? "option active" : "option"}`} onClick={chooseWindow}><h3 id={option}>{option}</h3></div>)}
            </div>
            <div className="window">
                {currWindow === "preview"? 
                    <Slider images={projectInformation.preview}/>
                    :
                    currWindow === "technologies"?
                    <TechnologiesComponent technologies={projectInformation[currWindow]}/>
                    :
                    currWindow === "structure"?
                    <ProjectStructureComponent structureDescription={projectInformation[currWindow]}/>
                    :
                    <InformationComponent information={projectInformation[currWindow]}/>
                }
            </div>

        </div>
    )
}


function InfoComponent({optionInfo}) {

    return (
        <div>
            <p>{optionInfo}</p>
        </div>
    )
}

function TechnologiesComponent({technologies}) {

    return (
        <div className="technologiesComponent">
            <ul>
                {technologies.map(tech => <li><p>{tech}</p></li>)}
            </ul>
        </div>
    )
}

function ProjectStructureComponent({structureDescription}) {

    return (
        <div className="projectStructure">
            <div className="descriptionContainer">
                <p>{structureDescription.description}</p>
            </div>
            <div className="imgContainer">
                <img src={structureDescription.image} alt="#" />
            </div>
        </div>
    )
}


function InformationComponent({information}) {

    return (
        <div className="informationComponent">
            <div className="status">
                <h3>Status </h3><p>{information.status}</p>
            </div>
            <div className="ip">
                <h3>Project's ip </h3><p>{information.ip}</p>
            </div>
            <div className="status">
                <h3>Code </h3><p>{information.code}</p>
            </div>
        </div>
    )
}
