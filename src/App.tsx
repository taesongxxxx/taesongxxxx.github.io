import "./App.css";
import ProfileSection from "./components/ProfileSectoin";
import ResumeSection from "./components/ResumeSection";
import ProjectSection from "./components/ProjectSection";
import ProfileImg from "./assets/profile-img.png";

function App() {
  return (
    <div className="portfolio-container">
      <header className="header-container">
        <div className="header-left">
          <h4 className="profile-label">Profile</h4>
          <div className="profile-circle">
            <img src={ProfileImg} alt="" />
          </div>
        </div>
        <div className="header-text">
          <h1>
            안녕하세요,
            <br />
            프론트엔드 개발자 <span>최태성</span> 입니다.
          </h1>
        </div>
      </header>
      <div className="main-container">
        <ProfileSection />
        <ResumeSection />
        <ProjectSection />
      </div>
    </div>
  );
}

export default App;
