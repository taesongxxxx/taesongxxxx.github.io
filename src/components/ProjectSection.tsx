interface Project {
  title: string;
  date: string;
  description: string;
}

const ProjectSection = () => {
  const projects: Project[] = [
    {
      title: "프로그래머스 프로젝트",
      date: "2026-2026",
      description: "프로그래머스 프로젝트 설명입니다."
    },
    {
      title: "개인 포트폴리오 웹사이트",
      date: "2026.01 - 2026.02",
      description: "React와 TypeScript를 활용하여 제작한 반응형 포트폴리오"
    },
    {
      title: "Medical Navigator",
      date: "2025.04 - 2025.11",
      description: "3D 인체 모델링 기반 의학 정보 시각화 & 임베딩 기반 개인 맞춤 추천시스템"
    }
  ];

  return (
    <dl className="project-container">
      <div className="project">
        <dt>PROJECTS</dt>
        <dd>
          <ul>
            {projects.map((proj, index) => (
              <li key={index}>
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
  );
};

export default ProjectSection;