import SideBar from "./Components/SideBar";
import RecentWork from "./Components/RecentWork";
import ContactMe from "./Components/ContactMe";
import './App.css';

function App() {
  return (
    <div className="site-wrapper">
      <SideBar />
      <div className="main-section">
        <div className="page-section">
          <h2>About Me</h2>
          <p>
            I'm Kevin Mejia, and I'm a passionate coder with a love for building innovative solutions. My Electrical Engineering degree taught me a lot about problem-solving and I am confident that I can be a great asset to any team. My background as a first-generation student provides me a diverse perspective and I am excited to apply that knowledge as a new Software Engineer.
          </p>
          <p>
            <span className="italic">“Do or do not. There is no try.”</span>
            <br />
            - Yoda
          </p>
        </div>
        <div className="page-section">
          <h2>Recent Work</h2>
          <RecentWork/>
        </div>
        <div className="page-section" id="skills-section">
          <h2>Skills</h2>
          <p><strong id="skill-languages">Languages: </strong>Javascript, Python, SQL, HTML, CSS</p>
          <p><strong id="skill-frameworks">Frameworks/Tools: </strong>React, Redux, Express, Flask, Sequelize, SQLAlchemy, PostgresQL, AWS, Docker, Git, GitHub </p>
          <p><strong id="skill-key">Key Skills: </strong>{"Pair Programming, Test-Driven Development (TDD), Object-Oriented Programming (OOP), Scrum Methodologies"}</p>
        </div>
        <div className="page-section">
          <h2>Get in Touch</h2>
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default App;
