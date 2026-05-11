const ResumeSection = () => {
  const certificates = [
    { name: "SQL 개발자 (SQLD)", date: "2025.12.12" },
    { name: "데이터분석 준전문가 (ADsP)", date: "2025.11.28" },
    { name: "정보처리기사", date: "2025.09.12" },
  ];

  const skillCategories = [
    {
      title: "Languages",
      items: ["JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      items: ["HTML", "CSS", "React.js"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "NestJS", "PostgreSQL"],
    },
    {
      title: "Tools",
      items: ["Git", "Notion", "Docker"],
    },
  ];

  return (
    <dl className="resume-container">
      <div className="CERTIFICATES">
        <dt>CERTIFICATES</dt>
        <dd>
          <ul className="certificate-list">
            {certificates.map((cert) => (
              <li key={cert.name}>
                <span>{cert.name}</span>
                <span className="certificate-date">{cert.date}</span>
              </li>
            ))}
          </ul>
        </dd>
      </div>

      <div className="skills">
        <dt>SKILLS</dt>
        <dd>
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>
              <span>{category.title}</span>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </dd>
      </div>
    </dl>
  );
};

export default ResumeSection;
