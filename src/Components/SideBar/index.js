import "./SideBar.css";

const SideBar = () => {
    return (
        <div className="sidebar" >
            <div className="sidebar-top-background">
                <img src={process.env.PUBLIC_URL + "/images/bg.jpg"} alt="Los Angeles, California"/>
                <div className="sidebar-top-text">
                    <img src={process.env.PUBLIC_URL + "/images/avatar.png"} alt="Kevin"/>
                    <h1>Kevin Mejia</h1>
                </div>
            </div>
            <div className="sidebar-bottom">
                <a href="https://github.com/Nemurs"><i className="fab fa-github" /></a>
                <a href="www.linkedin.com/in/kevin-octavio-mejia"><i className="fab fa-linkedin" /></a>
                <a href="mailto:kevinoctaviomejia@gmail.com" ><i className="far fa-envelope" /></a>
                <a href="https://drive.google.com/file/d/1E0IQJJadbHTjDSTPJKDgm_ghUUyO3uax/view"><i className="far fa-file" /></a>
            </div>
        </div>
    )
}

export default SideBar;
