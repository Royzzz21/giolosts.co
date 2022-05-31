import firstSectionImage from "../../Assets/Images/home-img1.png";
import forEngineersImg from "../../Assets/Images/home-img2.png";
import forCompaniesImg from "../../Assets/Images/home-img3.png";
import partnerLogo from "../../Assets/Images/partner-logo.JPG";
import servicesImg from "../../Assets/Images/service-img.png";

import "../../Assets/Styles/HomePage.css";
import CallToAction from "../../Components/HomePage/CallToAction";
import Partner from "../../Components/HomePage/Partner";
import ServiceItem from "../../Components/HomePage/ServiceItem";
const HomePage = () => {
  return (
    <div className="section-first">
      <div className="section-first-container">
        <h1 className="text section-first-title">THINK. CREATE .INOVATE</h1>
        <img src={firstSectionImage} alt={firstSectionImage} className="img1" />
      </div>

      <div className="section-two-container">
        <div className="section-two-item-container illustration">
          <img src={forEngineersImg} alt={forEngineersImg} />
        </div>
        <div className="section-two-item-container content">
          <CallToAction
            title={"FOR ENGINEERS"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla enim a mattis congue. Morbi e"
            }
          />
        </div>
      </div>

      <div className="section-two-container for-companies-container">
        <div className="section-two-item-container content">
          <CallToAction
            title={"FOR CAMPANIES"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla enim a mattis congue. Morbi e"
            }
          />
        </div>
        <div className="section-two-item-container illustration">
          <img src={forCompaniesImg} alt={forCompaniesImg} />
        </div>
      </div>

      <div className="section-three-container">
        <div>
          <h1 className="text section-three-title">WHO WE ARE?</h1>
          <p className="text section-three-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            fringilla enim a mattis congue. Morbi eLorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent fringilla enim a mattis
            congue. Morbi e
          </p>
        </div>
      </div>

      <div className="section-four">
        <div>
          <h1 className="text section-three-title">PARTNERED WITH</h1>
          <p className="text section-three-subtitle four-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            fringilla enim a mattis congue. Morbi eLorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent fringilla enim a mattis
            congue. Morbi e
          </p>

          <div className="partners-container">
            <Partner partnerLogo={partnerLogo} />
            <Partner partnerLogo={partnerLogo} />
            <Partner partnerLogo={partnerLogo} />
            <Partner partnerLogo={partnerLogo} />
          </div>
          <div className="partners-container">
            <Partner partnerLogo={partnerLogo} />
            <Partner partnerLogo={partnerLogo} />
            <Partner partnerLogo={partnerLogo} />
            <Partner partnerLogo={partnerLogo} />
          </div>
        </div>
      </div>

      <div className="section-five">
        <div className="container-five">
          <h1 className="text section-three-title five-title">
            PRODUCT AND SERVICES
          </h1>

          <div className="services-container">
            <div className="service">
              <ServiceItem
                servicesImg={servicesImg}
                title="STAFF AUGMENTATION"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                fringilla enim a mattis congue. Morbi eLorem ipsum dolor sit amet,
                consectetur adipis"
              />
            </div>
            <div className="service">
              <ServiceItem
                servicesImg={servicesImg}
                title="STAFF AUGMENTATION"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                fringilla enim a mattis congue. Morbi eLorem ipsum dolor sit amet,
                consectetur adipis"
              />
            </div>
          </div>
          <div className="services-container">
            <div className="service">
              <ServiceItem
                servicesImg={servicesImg}
                title="STAFF AUGMENTATION"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                fringilla enim a mattis congue. Morbi eLorem ipsum dolor sit amet,
                consectetur adipis"
              />
            </div>
            <div className="service">
              <ServiceItem
                servicesImg={servicesImg}
                title="STAFF AUGMENTATION"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                fringilla enim a mattis congue. Morbi eLorem ipsum dolor sit amet,
                consectetur adipis"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
