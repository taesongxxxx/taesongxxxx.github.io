const ProfileSection = () => {
  return (
    <div className="profile-container">
      <dl className="profile-info">
        <div className="birth">
          <dt>Birth</dt>
          <dd>2000.09.21</dd>
        </div>
        <div className="Experience">
          <dt>Experience</dt>
          <dd>신입</dd>
        </div>
        <div className="Education">
          <dt>Education</dt>
          <dd>
            <ul className="education-list">
              <li>
                <span>프로그래머스 웹 풀 사이클 개발 9기</span>
                <span className="education-period">2025.12.30 ~ 2026.06.19</span>
              </li>
              <li>
                <span>인천대학교 정보통신공학과 졸업</span>
                <span className="education-period">2020.03.02 ~ 2026.02.20</span>
              </li>
            </ul>
          </dd>
        </div>
        <div className="Focus">
          <dt>Focus</dt>
          <dd>
            <ul className="focus-list">
              <li>
                <strong>CI/CD 자동화</strong>
                <span>반복되는 배포 과정을 줄이고 안정적으로 운영할 수 있는 흐름을 익히고 있습니다.</span>
              </li>
              <li>
                <strong>AI 활용</strong>
                <span>개발 과정에서 AI를 생산성을 높이는 도구로 활용하는 방법을 실험하고 있습니다.</span>
              </li>
              <li>
                <strong>개발 사이클 이해</strong>
                <span>백엔드 구현뿐 아니라 배포와 운영까지 포함한 전체 흐름을 함께 이해하는 데 집중하고 있습니다.</span>
              </li>
            </ul>
          </dd>
        </div>
        <div className="contact">
          <dt>contact</dt>
          <dd>
            <ul className="contact-list">
              <li className="contact-email">taeseongxxxx@gmail.com</li>
              <li className="contact-links">
                <a
                  href="https://github.com/taesongxxxx"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="contact-icon-link"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.52.36 1.91-1.34 2.75-1.06 2.75-1.06.55 1.43.2 2.48.1 2.74.64.72 1.03 1.64 1.03 2.77 0 3.96-2.33 4.82-4.56 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
                    />
                  </svg>
                </a>
                <a
                  href="https://velog.io/@taesong/posts"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Velog"
                  className="contact-icon-link"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M5 4.5h5.13l1.88 11.27L13.93 4.5H19l-4.3 15H9.3L5 4.5Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default ProfileSection;
