import "../style/socialSitePreview.css"

export default function ProjectPreviewSocialSite() {

    return (
        <div className="projectPreview socialSite">
            <div className="leftSide">
            <div className="projectName">
                <h2>Social<span> site</span></h2>
            </div>
                <img src="./socialSite-preview.png" alt="" />
            </div>
            <div className="rightSide">
                <div className="description">
                <p>
                    This project is a social network that has many functions inherent in any social networks: 
                    <br/> - Creating your own page and viewing the pages of other people 
                    <br/> - Creating viewing posts, both yours and other people 
                    <br/> - Commenting, liking, reply to a comment and like a comment 
                    <br/> - Managing your own gallery , creating albums, taking photos and viewing these photos
                </p>
                </div>
            </div>
        </div>
    )
}
