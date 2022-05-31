import "../../Assets/Styles/Styles.css";
import fbImg from "../../Assets/Images/fb.png";

import youImg from "../../Assets/Images/you.png";
import twiImg from "../../Assets/Images/twi.png";
import tikImg from "../../Assets/Images/tik.png";
import insImg from "../../Assets/Images/ins.png";

const Footer = () => {
  return (
    <div className="Container">
      <div>
        <h1 className="Company-Name">GIOLOSTS TECHNOLOGIES</h1>
        <label className="Labels">About us</label>
      </div>
      <div>
        <h1 className="For-Engineers">FOR ENGINEERS</h1>
        <label className="Label1">OFFERS</label>
      </div>
      <div>
        <h1 className="For-Companies">FOR COMPANIES</h1>
        <label className="Label2">SERVICES</label>
      </div>
      <div>
        <button className="bot">CONTACT US</button>
      </div>
      <div>
        <h1 className="connect">CONNECT</h1>
      </div>
      <div className="Icons">
        <img src={fbImg} alt={fbImg} className="fb" />
        <img src={youImg} alt={youImg} className="you" />
        <img src={insImg} alt={insImg} className="ins" />
        <img src={twiImg} alt={twiImg} className="twi" />
        <img src={tikImg} alt={tikImg} className="tik" />
      </div>
    </div>
  );
};

export default Footer;
