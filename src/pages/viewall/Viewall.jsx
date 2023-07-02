import React, { useState } from "react";
import "./viewall.css";

const data = [
  {
    id: 1,
    title: "Snow Shoveling",
    image: "https://example.com/card1.png",
    price: 10,
    experience: "Beginner",
  },
  {
    id: 2,
    title: "Babysitting",
    image: "https://example.com/card2.png",
    price: 20,
    experience: "Intermediate",
  },
  {
    id: 3,
    title: "Tutoring",
    image: "https://example.com/card3.png",
    price: 30,
    experience: "Advanced",
  },
  {
    id: 4,
    title: "Dog walking",
    image: "https://example.com/card3.png",
    price: 45,
    experience: "Advanced",
  },
  {
    id: 5,
    title: "Cook",
    image: "https://example.com/card3.png",
    price: 25,
    experience: "Beginner",
  },
];

export default function ViewAll() {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");

  const handlePriceFilter = (price) => {
    setSelectedPrice(price);
  };

  const handleExperienceFilter = (experience) => {
    setSelectedExperience(experience);
  };

  const filteredData = data.filter(
    (card) =>
      (!selectedPrice || card.price <= selectedPrice) &&
      (!selectedExperience || card.experience === selectedExperience)
  );

  return (
    <div className="containe3">
      <div className="sidebar">
        <h2>Filters</h2>
        <div className="filter">
          <h3>Price:</h3>
          <button onClick={() => handlePriceFilter(10)}>Under $10</button>
          <button onClick={() => handlePriceFilter(20)}>Under $20</button>
          <button onClick={() => handlePriceFilter(30)}>Under $30</button>
          <button onClick={() => handlePriceFilter("")}>All</button>
        </div>
        <div className="filter">
          <h3>Experience:</h3>
          <button onClick={() => handleExperienceFilter("Beginner")}>
            Beginner
          </button>
          <button onClick={() => handleExperienceFilter("Intermediate")}>
            Intermediate
          </button>
          <button onClick={() => handleExperienceFilter("Advanced")}>
            Advanced
          </button>
          <button onClick={() => handleExperienceFilter("")}>All</button>
        </div>
      </div>
      <div className="card-container">
        {filteredData.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>Price: ${card.price}</p>
            <p>Experience: {card.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
