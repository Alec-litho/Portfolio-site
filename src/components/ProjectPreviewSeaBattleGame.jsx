

export default function ProjectPreviewSeaBattleGame() {
    
    return (
        <div className="projectPreview seaBattleGame">
            <div className="projectName">
                <h2>Battle-sea<span>game</span></h2>
            </div>
            <div className="leftSide">
                <div className="description">
                    <p>This project is classic battleship game. The motivation for developing this project was to try something different than web app and also to try new techologies such as socket.io and nest.js. Also, this project uses many principles of OOP and consists of classes and object that have different types of relationship between each over. This project is more focused on back-end and game logic rather UI</p>
                    <a href="#" className="seeMoreBtn">see more...</a>
                </div>
            </div>
            <div className="rightSide">
                <img src="./battleSeaGame-preview.png" alt="" />
            </div>
        </div>
    )
}