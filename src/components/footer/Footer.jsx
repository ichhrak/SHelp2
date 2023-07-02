import { Link } from "react-router-dom";
import "./footer.css";
import logo1 from "../../components/img/logo.png";

export default function Footer() {

  return (
    <div className="footer">
      <div className="topleft">
        <Link to="/Home">
          <img className="logo1" src={logo1} alt="react logo" />
        </Link>
        <div className="bottomright">
        <Link to="/Services">
        <div className="itext">Offer your services</div>
        </Link>
        <Link to="/About">
        <div className="itext0">How does this work</div>
        </Link>
        </div>
        </div>
    </div>
  );
}
