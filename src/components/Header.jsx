import { Link } from "react-router-dom"
import Main from "../pages/Main"
import AboutMe from "../pages/AboutMe"
import "../style/header.css"

export default function Header() {


    return (
        <div className="header">
            <div className="nav">
                <Link to={"/"} element={<Main/>} className="link">main</Link>
                <Link to={"/aboutme"} element={<AboutMe/>} className="link">about me</Link>

            </div>

        </div>
    )
}