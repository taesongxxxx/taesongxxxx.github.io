const ResumeSection = () => {
  const certificates = [
    "정보처리기사",
    "데이터분석준전문가 (ADsP)",
    "SQL 개발자 (SQLD)",
  ];

  const skills = {
    frontEnd: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js"],
    backEnd: ["Node.js"],
    tools: ["Git", "Docker", "AWS"],
  };

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
          <div className="skill-category">
            <span>FrontEnd</span>
            <ul>
              {skills.frontEnd.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
          <ul>
            <span>BackEnd</span>
            {skills.backEnd.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          </div>
          <div className="skill-category">
          <ul>
            <span>Tools</span>
            {skills.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          </div>
        </dd>
      </div>
    </dl>
  );
};

export default ResumeSection;
