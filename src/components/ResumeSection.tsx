const ResumeSection = () => {
  const certificates = [
    "정보처리기사",
    "데이터분석준전문가 (ADsP)",
    "SQL 개발자 (SQLD)",
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
      items: ["Node.js", "Express.js", "PostgreSQL"],
    },
    {
      title: "Tools",
      items: ["Git", "Notion", "Docker"],
    },
  ];

  return (
    <dl className="resume-container">
      <div className="career">
        <dt>CAREER</dt>
        <dd>신입</dd>
      </div>

      <div className="CERTIFICATES">
        <dt>CERTIFICATES</dt>
        <dd>
          <ul>
            {certificates.map((cert, index) => (
              <li key={index}>{cert}</li>
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
