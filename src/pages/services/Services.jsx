import React, { useState } from "react";
import "./services.css";

export default function Services() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    alert("Thank you for offering your service! We will review your application and let you know.");
  };

  return (
    <div className="services">
      <h1 className="heading">Offer your services</h1>
      <div className="steps">
        <div className={`step ${step === 1 ? "active" : ""}`}>Step 1</div>
        <div className={`step ${step === 2 ? "active" : ""}`}>Step 2</div>
        <div className={`step ${step === 3 ? "active" : ""}`}>Step 3</div>
        <div className={`step ${step === 4 ? "active" : ""}`}>Step 4</div>
      </div>
      {step === 1 && (
        <>
          <p className="title">Enter your personal information:</p>
          <form>
            <div className="boxes">
              <input className="box" type="text" placeholder="First Name" />
              <input className="box" type="text" placeholder="Last Name" />
              <input className="box" type="email" placeholder="Email" />
              <input className="box" type="tel" placeholder="Phone" />
            </div>
            <div className="buttons">
              <button className="back-button" disabled>
                Back
              </button>
              <button className="next-button" onClick={handleNextStep}>
                Next
              </button>
            </div>
          </form>
        </>
      )}
      {step === 2 && (
        <>
          <p>Step 2 Content</p>
          <div className="buttons">
            <button className="back-button" onClick={handlePreviousStep}>
              Back
            </button>
            <button className="next-button" onClick={handleNextStep}>
              Next
            </button>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <p>Step 3 Content</p>
          <div className="buttons">
            <button className="back-button" onClick={handlePreviousStep}>
              Back
            </button>
            <button className="next-button" onClick={handleNextStep}>
              Next
            </button>
          </div>
        </>
      )}
      {step === 4 && (
        <>
          <p className="review">
            Review and Submit<br />
            Your name <br />
            Your age<br />
            Your email<br />
            Your phone number<br />
            Your category<br />
            Your location
          </p>
          <div className="submit">
            <button onClick={handleSubmit}>Submit</button>
          </div>
          <div className="buttons">
            <button className="back-button" onClick={handlePreviousStep}>
              Back
            </button>
            <button disabled>Next</button>
          </div>
        </>
      )}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(step - 1) * 33.33}%` }}></div>
      </div>
    </div>
  );
}