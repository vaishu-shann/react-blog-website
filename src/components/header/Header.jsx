import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Vaishu spots</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?cs=srgb&dl=pexels-efdal-yildiz-917494.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
}
