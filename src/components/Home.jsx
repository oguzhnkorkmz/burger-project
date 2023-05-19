import { Link } from "react-router-dom";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div
      className="main-page"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="order">
        <Link to="/menu">
          <button className="order-btn">SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
