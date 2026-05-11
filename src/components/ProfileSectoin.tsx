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
      </dl>
    </div>
  );
};

export default ProfileSection;
