import "./RecentWork.css";

const RecentWork = () => {
    return (
        <div className="RecentWork">
            <a href="https://supereats.onrender.com">
                <h3 id="project-text-supereats">SuperEats</h3>
                <img src={process.env.PUBLIC_URL + "/images/SuperEats/splash.webp"} alt="Kevin's Super Eats Project"/>
                <p>An intuitive and feature rich web app based on UberEats</p>
            </a>
            <a href="https://mango-music-4c4k.onrender.com">
                <h3 id="project-text-mangomusic">Mango Music</h3>
                <img src={process.env.PUBLIC_URL + "/images/MangoMusic/splash.webp"} alt="Kevin's Mango Music Project"/>
                <p>A responsive and fun web app based on Apple Music</p>
            </a>
            <a href="https://k-bnb.onrender.com">
                <h3 id="project-text-kbnb">K-BnB</h3>
                <img src={process.env.PUBLIC_URL + "/images/K-BnB/splash.webp"} alt="Kevin's K.B.N.B Project"/>
                <p>An easy-to-use and beautiful web app based on AirBnB</p>
            </a>
        </div>
    )
}

export default RecentWork;
