import './App.css'
import ProfileSection from './components/ProfileSectoin'
import ResumeSection from './components/ResumeSection'
import ProjectSection from './components/ProjectSection'

function App() {
  return (
    <div className="portfolio-container">
      <header className="title">
        <h4>Profile</h4>
        <h1>최태성</h1>
      </header>

      <div className="main-container">
        <ProfileSection />
        <ResumeSection />
        <ProjectSection />
      </div>
    </div>
  )
}

export default App