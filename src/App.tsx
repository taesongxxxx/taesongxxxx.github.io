import "./App.css";
import HeaderSection from "./components/HeaderSection";
import ProfileSection from "./components/ProfileSectoin";
import ResumeSection from "./components/ResumeSection";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <div className="portfolio-container">
      <HeaderSection />
      <div className="section-divider" aria-hidden="true" />
      <div className="main-container">
        <ProfileSection />
        <ResumeSection />
        <ProjectSection />
      </div>
    </div>
  );
}

export default App;
