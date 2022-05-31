import "../../Assets/Styles/ForCompanies.css";
import offersImg from "../../Assets/Images/offersImg.png";
import OfferItem from "../../Components/ForCompanies/OfferItem";
import techImg from "../../Assets/Images/techImg.jpg";
import PartnerItem from "../../Components/ForCompanies/PartnerItem";
import IndustryImg from "../../Assets/Images/check.png";
import servicesImg from  "../../Assets/Images/services.png";
import Industry from "../../Components/ForCompanies/Industry";

const ForCompanies = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <p className="header-text header-label">FOR COMPANIES</p>
          <h1 className="header-text header"> HIRE A TEAM OF DEVELOPERS TODAY</h1>
          <h2 className="header-text header-sub">
            LOREM IPSUM DOLOR SIT AMET LOREM IPSUM DOLOR SIT AMET
          </h2>
          <button className="header-text header-btn">CONTACT US</button>
        </div>
      </div>

      
      <div className="offers-container">
       
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
        <div className="offers-img-container">
          <h1 className="text offers-header-text">EXCLUSIVE OFFERS</h1>
          <img src={offersImg} alt={offersImg} className="offers-img" />
        </div>
      </div>

      <div className="technology-container">
        <div className="technologies">
          <h1 className="text tech-header">PARTNERED WITH</h1>
          <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla enim a mattis congue. Morbi eLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla enim a mattis congue. Morbi e
          </p>
          
          <div className="technologies-container">
            <PartnerItem techImg={techImg} />
            <PartnerItem techImg={techImg} />
            <PartnerItem techImg={techImg} />
          </div>
          <div className="technologies-container">
            <PartnerItem techImg={techImg} />
            <PartnerItem techImg={techImg} />
            <PartnerItem techImg={techImg} />
          </div>
        </div>
      </div>

      <div className="service-container">
        <div className="technologies">
          <h1 className="text-services">SERVICES</h1>
          <h2 className="text serve-header">WHAT WE DO?</h2>
          <p className="text serve-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            fringilla enim a mattis congue. Morbi e Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent fringilla enim a mattis
            congue. Morbi e
          </p>  
          <img src={servicesImg} alt={servicesImg} className="service-png" />
        </div>
      </div>

      <div className="Industry-container">
        <div className="technologies">
          <h1 className="text tech-header">INDUSTRY LIST</h1>
          <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla enim a mattis congue. Morbi eLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla enim a mattis congue. Morbi e
          </p>
          
          <div className="Ind-container">
            <Industry IndustryImg={IndustryImg}/>   
          </div>
          <div className="iind-container">
            <Industry IndustryImg={IndustryImg} />   
          </div>
          <div className="iiind-container">
            <Industry IndustryImg={IndustryImg} />   
          </div>
          <div className="Four">
          <Industry IndustryImg={IndustryImg}/>  </div> 
        </div>
        <div>
        <div className="Five">
          <Industry IndustryImg={IndustryImg}/>  </div> 
        </div>
        <div>
        <div className="Six">
          <Industry IndustryImg={IndustryImg}/>  </div> 
        </div>
        <div>
        <div className="Seven">
          <Industry IndustryImg={IndustryImg}/>  </div> 
        </div>
        <div>
        <div className="Eight">
          <Industry IndustryImg={IndustryImg}/>  </div> 
        </div>
        <div>
        <div className="Nine">
          <Industry IndustryImg={IndustryImg}/>  </div> 
        </div>
      </div>


      {/* <div className="sprint-container">
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
      </div>  */}
    </>
  );
};

export default ForCompanies;

