import "./SideBar.css";

const SideBar = () => {
    return (
        <div className="sidebar" >
            <div className="sidebar-top-background">
                <img src={process.env.PUBLIC_URL + "/images/bg.webp"} alt="Los Angeles, California"/>
                <div className="sidebar-top-text">
                    <img src={process.env.PUBLIC_URL + "/images/avatar.webp"} alt="Kevin"/>
                    <h1>Kevin Mejia</h1>
                </div>
                <div className="sidebar-bottom">
                    <a href="https://github.com/Nemurs"><i className="fab fa-github" /></a>
                    <a href="www.linkedin.com/in/kevin-octavio-mejia"><i className="fa-linkedin" /></a>
                    <a href="mailto:kevinoctaviomejia@gmail.com" ><i className="far fa-envelope" /></a>
                    <a href="https://drive.google.com/file/d/1WjH10whstAurSQjiJ406BdT5qpujB3u5/view"><i className="far fa-file" /></a>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
