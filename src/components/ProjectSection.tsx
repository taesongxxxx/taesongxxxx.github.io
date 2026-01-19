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