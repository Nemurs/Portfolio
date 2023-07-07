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
            I'm Kevin Mejia, and I'm a passionate coder with a love for problem-solving and building innovative solutions. The moments that truly make me fall in love with coding are when I experience the exhilaration of solving a complex bug or completing a snippet of code that works flawlessly. There's nothing quite like that sense of satisfaction, and it fuels my desire to keep pushing the boundaries of what I can create and achieve.
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
