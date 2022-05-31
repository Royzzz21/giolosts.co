import "../../Assets/Styles/EngineersPage.css";
import offersImg from "../../Assets/Images/offers_img.png";
import OfferItem from "../../Components/EngineersPage/OfferItem";
import techImg from "../../Assets/Images/tech.jpg"
import TechItem from "../../Components/EngineersPage/TechItem";
import sprintImg from "../../Assets/Images/sprint.png";

const EngineersPage = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <p className="header-text header-label">FOR ENGINEERS</p>
          <h1 className="header-text header"> JOIN OVER 99999+ DEVELOPERS</h1>
          <h2 className="header-text header-sub">
            LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET
          </h2>
          <button className="header-text header-btn">CONTACT US</button>
        </div>
      </div>

      <div className="offers-container">
        <div className="offers-img-container">
          <h1 className="text offers-header-text">EXCLUSIVE OFFERS</h1>
          <img src={offersImg} alt={offersImg} className="offers_img.png" />
        </div>
        <div className="offers-items-container">
          <div className="item-container">
            <OfferItem />
            <OfferItem />
          </div>
          <div className="item-container">
            <OfferItem />
            <OfferItem />
          </div>
        </div>
      </div>

      <div className="technology-container">
        <div className="technologies">
          <h1 className="text tech-header">TECHNOLOGY USED</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            fringilla enim a mattis congue. Morbi e
          </p>

          <div className="technologies-container">
            <TechItem techImg={techImg} />
            <TechItem techImg={techImg} />
            <TechItem techImg={techImg} />
          </div>
          <div className="technologies-container">
            <TechItem techImg={techImg} />
            <TechItem techImg={techImg} />
            <TechItem techImg={techImg} />
          </div>
        </div>
      </div>

      <div className="sprint-container">
        <img src={sprintImg} alt={sprintImg} className="sprint-img" />
        <div className="sprint-text">
          <h1 className="text">DESIGN SPRINT</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            fringilla enim a mattis congue. Morbi e Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent fringilla enim a mattis
            congue. Morbi e
          </p>
        </div>
      </div>
    </>
  );
};

export default EngineersPage;
