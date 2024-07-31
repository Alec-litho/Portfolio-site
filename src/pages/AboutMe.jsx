import "../style/aboutMe.css"

export default function AboutMe() {
    return (
        <div className="aboutMe">
            <div className="description">
                <h3>Люблю разбираться в технологиях сферы WEB, развиваться в своих навыках и учиться у коллег по старше. Общителен, нравится подискутировать о современных и уже устоявшихся технологиях
                </h3>
            </div>
            <div className="links">
                <div className="gitHubLink">
                    <a href="https://github.com/Alec-litho"><img src="https://i.ibb.co/863Qyj2/github.png" alt="" /></a>
                </div>
                <div className="telegram">
                    <a href="https://web.telegram.org/k/#@vreynq"> <img src="https://i.ibb.co/QrGQ49C/telegram.png" alt="" /></a>
                </div>
                <div className="gmail">
                    <a href="mailto:opallitho@gmail.com"><img src="https://i.ibb.co/F8LQ3fn/gmail.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}