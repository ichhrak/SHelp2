import React, { useState, useRef, useEffect } from "react";
import img from "../../components/img/image 9.png";
import img1 from "../../components/img/Screen Shot 2023-06-28 at 1.41.31 PM.png";
import { Link } from "react-router-dom";
import "./search.css";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [setShowFacetMenu] = useState(false);
  const popupRef = useRef(null);

  const handleSearch = () => {
    console.log("Search Address:", searchText);
  };
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowFacetMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="topleft">
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
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="containe2">
        <div className="text">Explore by category</div>
        <Link className="text0" to="/Viewall">
          View All
        </Link>
      </div>
      <div className="bottom">
        <Link to="/">
          <img className="img0" src={img1} alt="Image" />
        </Link>
      </div>
    </>
  );
}