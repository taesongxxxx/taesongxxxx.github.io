import ProfileImg from "../assets/profile-img.png";

const HeaderSection = () => {
  return (
    <>
      <h4 className="profile-label">Profile</h4>
      <header className="header-container">
        <div className="header-main">
          <div className="header-aside">
            <div className="header-left">
              <div className="profile-circle">
                <img src={ProfileImg} alt="" />
              </div>
            </div>
          </div>
          <div className="header-copy">
            <h1>
              안녕하세요, 웹 개발자 <span>최태성</span> 입니다.
            </h1>
            <p className="header-introduction">
              백엔드에 중심을 두고 서비스의 흐름 전체를 이해하는 풀스택 웹
              개발자를 지향하고 있습니다.
              <br />
              안정적인 서버 구현뿐 아니라 CI/CD 자동화와 AI 활용 방식에도 꾸준히
              관심을 가지고 있습니다.
            </p>
          </div>
          <p className="header-contact-inline">
            <span className="header-contact-inline-label">CONTACT</span>
            <span className="header-contact-inline-value">
              010-4476-3002 | taeseongxxxx@gmail.com
            </span>
          </p>
        </div>
        <div className="header-about">
          <span className="header-about-label">ABOUT ME</span>
          <div className="header-about-links">
            <a
              href="https://github.com/taesongxxxx"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="about-link"
            >
              <span className="about-link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.52.36 1.91-1.34 2.75-1.06 2.75-1.06.55 1.43.2 2.48.1 2.74.64.72 1.03 1.64 1.03 2.77 0 3.96-2.33 4.82-4.56 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
                  />
                </svg>
              </span>
              <span className="about-link-text">
                <strong>GitHub</strong>
                <small>@taesongxxxx</small>
              </span>
            </a>
            <a
              href="https://velog.io/@taesong/posts"
              target="_blank"
              rel="noreferrer"
              aria-label="Velog"
              className="about-link"
            >
              <span className="about-link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M5 4.5h5.13l1.88 11.27L13.93 4.5H19l-4.3 15H9.3L5 4.5Z"
                  />
                </svg>
              </span>
              <span className="about-link-text">
                <strong>Velog</strong>
                <small>Posts & Notes</small>
              </span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
