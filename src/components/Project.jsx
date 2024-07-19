import { useState } from "react"
import "../style/projectComponent.css"
import Slider from "./Slider"

export default function Project({project}) {
    const projectPreviews = {
        "SocialSite":<ProjectPreviewSocialSite/>,
        "LupisVulpesSite": <ProjectPreviewLupisVulpesSite/>,
        "BattleSeaGame": <ProjectPreviewSeaBattleGame/>
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

function ProjectPreviewSocialSite() {

    return (
        <div className="projectPreview socialSite">
            <div className="projectName">
                <h2>Social<span> site</span></h2>
            </div>
            <div className="leftSide">
                <img src="./socialSite-preview.png" alt="" />
            </div>
            <div className="rightSide">
                <div className="description">
                    <p>Этот проект является социальной сетью, в которой есть многие функции присущее любым социальным сетям: 
                        <br/>- Создание собственной страницы и просмотр страниц других людей 
                        <br/>- Создание просмотр постов, как своих, так и других людей 
                        <br/>- Комментирование, возможность поставить оценку, ответ на комментарий и оценка комментария 
                        <br/>- Управление собственной галерей, создание альбомов, создание фото и просмотр этих фото</p>
                    <a href="#">see more...</a>
                </div>
            </div>
        </div>
    )
}
function ProjectPreviewSeaBattleGame() {
    
    return (
        <div className="projectPreview seaBattleGame">
            <div className="projectName">
                <h2>Battle-sea<span>game</span></h2>
            </div>
            <div className="leftSide">
                <div className="description">
                    <p>Этот проект является социальной сетью, в которой есть многие функции присущее любым социальным сетям: Создание собственной страницы и просмотр страниц других людей Создание просмотр постов, как своих, так и других людей Комментирование, возможность поставить оценку, ответ на комментарий и оценка комментария Управление собственной галерей, создание альбомов, создание фото и просмотр этих фото</p>
                    <a href="#">see more...</a>
                </div>
            </div>
            <div className="rightSide">
                <img src="./battleSeaGame-preview.png" alt="" />
            </div>
        </div>
    )
}
function ProjectPreviewLupisVulpesSite() {
    
    return (
        <div className="projectPreview seaBattleGame">
            <div className="projectName">
                <h2>Social<span>site</span></h2>
            </div>
            <div className="leftSide">
                <img src="../../public/socialSite-preview.png" alt="" />
            </div>
            <div className="rightSide">
                <div className="description">
                    <p>Этот проект является социальной сетью, в которой есть многие функции присущее любым социальным сетям: Создание собственной страницы и просмотр страниц других людей Создание просмотр постов, как своих, так и других людей Комментирование, возможность поставить оценку, ответ на комментарий и оценка комментария Управление собственной галерей, создание альбомов, создание фото и просмотр этих фото</p>
                    <a href="#">see more...</a>
                </div>
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
        <div>
            <ul>
                {technologies.map(tech => <li><p>{tech}</p></li>)}
            </ul>
        </div>
    )
}

function ProjectStructureComponent({structureDescription}) {

    return (
        <div>
            <p>{structureDescription}</p>
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
