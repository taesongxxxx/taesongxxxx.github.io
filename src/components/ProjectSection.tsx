import { useState } from "react";

interface Project {
  title: string;
  date: string;
  description: string;
  detail?: string;
}

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "프로그래머스 프로젝트",
      date: "2026-2026",
      description: "프로그래머스 프로젝트 설명입니다.",
      detail:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "개인 포트폴리오 웹사이트",
      date: "2026.01 - 2026.02",
      description: "React와 TypeScript를 활용하여 제작한 반응형 포트폴리오",
      detail:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Medical Navigator",
      date: "2025.04 - 2025.11",
      description:
        "3D 인체 모델링 기반 의학 정보 시각화 & 임베딩 기반 개인 맞춤 추천시스템",
      detail:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <dl className="project-container">
        <div className="project">
          <dt>PROJECTS</dt>
          <dd>
            <ul className="project-list">
              {projects.map((proj, index) => (
                <li key={index} onClick={() => handleProjectClick(proj)}>
                  <div className="project-header">
                    <strong className="project-title">{proj.title}</strong>
                    <span className="project-date">{proj.date}</span>
                  </div>
                  <p className="project-description">{proj.description}</p>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <h2>{selectedProject.title}</h2>
            <span className="modal-date">{selectedProject.date}</span>
            <hr />
            <p className="modal-desc">{selectedProject.detail || selectedProject.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectSection;
