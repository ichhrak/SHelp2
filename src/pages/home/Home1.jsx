import React, { useState } from "react";
import img from "../../components/img/Screen Shot 2023-06-14 at 11.45 2.png";
import img2 from "../../components/img/We all need a little help sometimes.png";
import img3 from "../../components/img/image 6.png";
import img4 from "../../components/img/image 7.png";
import img5 from "../../components/img/image 8.png";
import { Link } from "react-router-dom";
import LocationMap from "../../components/location/LocationMap";
import "./home.css";

export default function Home1() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Search Address:", searchText);
  };

  return (
    <>
      <div className="topleft">
        <Link to="/">
          <img className="img2" src={img2} alt="Image" />
        </Link>
        <Link to="/">
          <img className="img" src={img} alt="Image" />
        </Link>
      </div>
      <div className="search-box">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter an address"
          className="search-input"
        />
          <Link to="/Search">
            <button className="search-button" onClick={handleSearch}>
            Search
            </button>
          </Link>
      </div>
      <div className="home">
        <div className="images-container">
          <div className="image-container">
            <img className="image" src={img3} alt="Image" />
            <div className="image-text">Quick way to make money</div>
          </div>
          <div className="image-container">
            <img className="image" src={img4} alt="Image" />
            <div className="image-text">Have a peace of mind</div>
          </div>
          <div className="image-container">
            <img className="image" src={img5} alt="Image" />
            <div className="image-text">Get all the help you need</div>
          </div>
        </div>
        <div className="text">Find the closest city</div>
        <LocationMap />
      </div>
    </>
  );
}
