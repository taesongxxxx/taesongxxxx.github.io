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
            <ul>
              <li>프로그래머스 웹 풀 사이클 개발 9기</li>
              <li>인천대학교 정보통신공학과 졸업</li>
            </ul>
          </dd>
        </div>
        <div className="Active">
          <dt>Active</dt>
          <dd>
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus amet illo maxime perspiciatis incidunt vel nulla esse dignissimos repellat cumque explicabo quae omnis voluptas, veritatis beatae atque ut nam tenetur!</li>
            </ul>
          </dd>
        </div>
        <div className="contact">
          <dt>contact</dt>
          <dd>taeseongxxxx@gmail.com</dd>
        </div>
      </dl>
    </div>
  );
};

export default ProfileSection;