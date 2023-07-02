import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./about.css";

const reviews = [
  {
    id: 1,
    name: "Dwight Shrute",
    rating: 4.5,
    comment: "Great service! Highly recommended.",
  },
  {
    id: 2,
    name: "Jim Halpert",
    rating: 5,
    comment: "Excellent platform for finding local services.",
  },
  {
    id: 3,
    name: "Michael Scott",
    rating: 4.8,
    comment: "Excellent platform for finding local services.",
  },
  
];



export default function About() {
    const [userReview, setUserReview] = useState({
      id: 4,
      name: "",
      rating: 0,
      comment: "",
    });
  
    const addReview = () => {
      if (userReview.name !== "" && userReview.rating !== 0) {
        setUserReview({ ...userReview, id: userReview.id + 1 });
      }
    };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    
    <div className="containe1">
      <h2>About Our Website</h2>
      <p>
        Our website is a platform that allows people to offer a wide range of
        services to others in their community. Similar to Uber Eats, but for
        services, our platform connects service providers with individuals who
        are in need of those services.
      </p>
      <p>
        Whether you need help with household tasks, tutoring, pet care,
        gardening, or any other service, you can find qualified individuals in
        your area who are ready to assist you. Likewise, if you have skills or
        expertise in a particular area, you can offer your services and earn
        money by helping others.
      </p>
      <p>
        To use our platform, simply search for the service you need or browse
        through the available categories. You can view detailed profiles of
        service providers, including their experience, pricing, and reviews from
        other users. Once you find the right person for the job, you can easily
        connect with them and arrange the details.
      </p>
      <p>
        Our mission is to make it convenient for people to find reliable and
        trustworthy service providers in their local community. We strive to
        create a platform that fosters mutual trust and satisfaction between
        service providers and users.
      </p>
      <p>
        Thank you for choosing our platform. We hope it brings convenience and
        value to your life by connecting you with the services you need or
        enabling you to share your skills with others.
      </p>
      <div className="reviews-section">
        <h3>Reviews</h3>
        <Slider {...sliderSettings}>
          {/* Existing code */}
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h4>{review.name}</h4>
              <p>Rating: {review.rating}</p>
              <p>{review.comment}</p>
            </div>
          ))}
          <div key={userReview.id} className="review-card">
            <p>Leave your own review</p>
            <input
              type="text"
              placeholder="Your Name"
              value={userReview.name}
              onChange={(e) =>
                setUserReview({ ...userReview, name: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Your Rating"
              value={userReview.rating}
              onChange={(e) =>
                setUserReview({ ...userReview, rating: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Your Comment"
              value={userReview.comment}
              onChange={(e) =>
                setUserReview({ ...userReview, comment: e.target.value })
              }
            />
            <br />
            <button onClick={addReview}>Submit</button>
          </div>
        </Slider>
      </div>
      </div>
  );
}
