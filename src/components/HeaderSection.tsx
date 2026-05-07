import ProfileImg from "../assets/profile-img.png";

const HeaderSection = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <h4 className="profile-label">Profile</h4>
        <div className="profile-circle">
          <img src={ProfileImg} alt="" />
        </div>
      </div>
      <div className="header-text">
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
    </header>
  );
};

export default HeaderSection;
