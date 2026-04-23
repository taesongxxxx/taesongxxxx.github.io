import { useEffect, useRef, useState } from "react";

interface ProjectLink {
  label: string;
  href: string;
}

interface Project {
  title: string;
  period: string;
  summary: string;
  techStack: string[];
  features: string[];
  role: string[];
  learned?: string[];
  links?: ProjectLink[];
}

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [panelWidth, setPanelWidth] = useState(680);
  const [isFullPage, setIsFullPage] = useState(false);
  const resizeStateRef = useRef<{
    isResizing: boolean;
    startX: number;
    startWidth: number;
  }>({
    isResizing: false,
    startX: 0,
    startWidth: 680,
  });

  const projects: Project[] = [
    {
      title: "프로그래머스 프로젝트",
      period: "2026.01 - 2026.03",
      summary: "팀 단위로 진행한 웹 서비스 프로젝트입니다.",
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      features: [
        "사용자 중심의 화면 흐름 설계",
        "반응형 UI 구현",
        "프로젝트 주요 정보 시각화",
      ],
      role: [
        "프론트엔드 화면 구현",
        "컴포넌트 단위 구조 분리",
        "API 연동 및 상태 반영",
      ],
      learned: [
        "팀 프로젝트에서는 역할 분리와 커뮤니케이션이 중요하다는 점을 배웠습니다.",
        "재사용 가능한 컴포넌트 구조가 유지보수에 큰 도움이 된다는 점을 경험했습니다.",
      ],
      links: [{ label: "GitHub", href: "https://github.com/taesongxxxx" }],
    },
    {
      title: "개인 포트폴리오 웹사이트",
      period: "2026.01 - 2026.02",
      summary: "React와 TypeScript를 활용하여 제작한 반응형 포트폴리오 웹사이트입니다.",
      techStack: ["React", "TypeScript", "Vite", "CSS"],
      features: [
        "프로필, 이력, 프로젝트 정보를 한 화면에 구성",
        "프로젝트 클릭 시 상세 모달 제공",
        "모바일 환경에 대응하는 반응형 레이아웃 구현",
      ],
      role: [
        "전체 UI 설계 및 구현",
        "섹션 단위 컴포넌트 분리",
        "프로젝트 상세 템플릿 구조 설계",
      ],
      learned: [
        "작은 규모의 프로젝트라도 데이터 구조를 먼저 정리하면 확장성이 좋아진다는 점을 배웠습니다.",
        "정보를 읽기 쉽게 배치하는 것이 포트폴리오 설계에서 중요하다는 점을 느꼈습니다.",
      ],
      links: [{ label: "GitHub", href: "https://github.com/taesongxxxx" }],
    },
    {
      title: "Medical Navigator",
      period: "2025.04 - 2025.11",
      summary:
        "3D 인체 모델링 기반 의학 정보 시각화와 임베딩 기반 개인 맞춤 추천 기능을 다룬 프로젝트입니다.",
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      features: [
        "의학 정보를 시각적으로 탐색할 수 있는 인터페이스 구성",
        "사용자 조건 기반 추천 흐름 설계",
        "복잡한 데이터를 이해하기 쉽게 표현",
      ],
      role: [
        "프론트엔드 UI 개발",
        "데이터 시각화 화면 구성",
        "사용자 인터랙션 흐름 개선",
      ],
      learned: [
        "전문 도메인 데이터를 다룰 때는 정확성과 가독성을 함께 고려해야 한다는 점을 배웠습니다.",
      ],
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsFullPage(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsFullPage(false);
  };

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!resizeStateRef.current.isResizing) {
        return;
      }

      const deltaX = resizeStateRef.current.startX - event.clientX;
      const nextWidth = resizeStateRef.current.startWidth + deltaX;
      const maxWidth = Math.min(window.innerWidth - 40, 960);
      const clampedWidth = Math.min(Math.max(nextWidth, 420), maxWidth);

      setPanelWidth(clampedWidth);
    };

    const stopResizing = () => {
      resizeStateRef.current.isResizing = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", stopResizing);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", stopResizing);
    };
  }, []);

  const startResizing = (event: React.PointerEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 640 || isFullPage) {
      return;
    }

    resizeStateRef.current = {
      isResizing: true,
      startX: event.clientX,
      startWidth: panelWidth,
    };

    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  return (
    <>
      <dl className="project-container">
        <div className="project">
          <dt>PROJECTS</dt>
          <dd>
            <ul className="project-list">
              {projects.map((project) => (
                <li key={project.title} onClick={() => handleProjectClick(project)}>
                  <div className="project-header">
                    <strong className="project-title">{project.title}</strong>
                    <span className="project-date">{project.period}</span>
                  </div>
                  <p className="project-description">{project.summary}</p>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      {selectedProject && (
        <div
          className={`modal-overlay ${isFullPage ? "modal-overlay-full" : ""}`}
          onClick={closeModal}
        >
          <div
            className={`modal-content ${isFullPage ? "modal-content-full" : ""}`}
            onClick={(e) => e.stopPropagation()}
            style={isFullPage ? undefined : { width: `min(${panelWidth}px, 100%)` }}
          >
            {!isFullPage && (
              <div
                className="modal-resize-handle"
                onPointerDown={startResizing}
                onClick={(e) => e.stopPropagation()}
                aria-hidden="true"
              />
            )}
            <div className="modal-actions">
              <button
                type="button"
                className="modal-mode-btn"
                onClick={() => setIsFullPage((prev) => !prev)}
              >
                {isFullPage ? "패널로 보기" : "전체 페이지로 보기"}
              </button>
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
            </div>
            <h2>{selectedProject.title}</h2>
            <span className="modal-date">{selectedProject.period}</span>
            <p className="modal-summary">{selectedProject.summary}</p>
            <hr className="modal-divider" />

            <section className="modal-section">
              <h3>Tech Stack</h3>
              <ul className="modal-tag-list">
                {selectedProject.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </section>

            <section className="modal-section">
              <h3>Key Features</h3>
              <ul className="modal-bullet-list">
                {selectedProject.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="modal-section">
              <h3>Role</h3>
              <ul className="modal-bullet-list">
                {selectedProject.role.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            {selectedProject.learned && (
              <section className="modal-section">
                <h3>What I Learned</h3>
                <ul className="modal-bullet-list">
                  {selectedProject.learned.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {selectedProject.links && (
              <section className="modal-section">
                <h3>Links</h3>
                <ul className="modal-link-list">
                  {selectedProject.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectSection;
