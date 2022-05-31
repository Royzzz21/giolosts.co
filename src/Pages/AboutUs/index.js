import "../../Assets/Styles/AboutUs.css";
import ceoImg from "../../Assets/Images/ceo.jpg";
import agileImg from "../../Assets/Images/agile.jpg";

const ForCompanies = () => {
  return (
    <div className="header-container">
      <h1 className="h1">WHO WE ARE?</h1>
      <h3 className="h3">
        {" "}
        LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET{" "}
      </h3>
      <button className="btn">GET STARTED</button>
      <div></div>

      <div className="offers-container">
        <img src={ceoImg} alt={ceoImg} className="ceo" />
        <h2 className="name">JHONATHAN HOWARD</h2>
        <h1 className="label">CEO</h1>
        <p className="par">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          fringilla enim a mattis congue. Morbi e Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent fringilla enim a mattis congue.
          Morbi e
        </p>
      </div>

      <div class="card">
        <label className="lab1">LINKS</label>
        <h3>jhonathan@giolosts.co</h3>
        <h3>inquiry@giolosts.co</h3>
        <h3>suuport@giolosts.co</h3>
      </div>
      <div class="card2">
        <label className="lab1">LOCATION</label>
        <h3>
          UB 111 Paseo de Roxas, Legazpi Village, Makati City, Metro Manila
        </h3>
      </div>

      <div className="sec3">
        <h1 className="h11">WHAT WE DO?</h1>
        <h2 className="h22">
          LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET{" "}
        </h2>
      </div>

      <div className="sec4">
        <h1 className="title">DEVELOPMENT LIFE CYCLE</h1>
        <img src={agileImg} alt={agileImg} className="agile" />
        <h1 className="col">DESIGN SPRINTS</h1>
        <p className="par2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          fringilla enim a mattis congue. Morbi e Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent fringilla enim a mattis congue.
          Morbi e
        </p>
      </div>
    </div>
  );
};

export default ForCompanies;
