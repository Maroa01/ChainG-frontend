import React from "react";
import "../../styles/hero.css";
import heroDarkImg from "../../images/hero-img.png";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>Rise to the Top of the Crypto Market,</h2>
              <h2>Learn and Earn non-stop.</h2>
              <h2 className="highlight">Mastering Digital Wealth</h2>
            </div>
            <p className="description">
              Chain Goats is your one-stop destination for unlocking the wealth
              and potential of the crypto market. Our mission is to provide
              high-quality crypto education for individuals of all levels,
              taught by experienced and successful traders, investors, and
              developers known as GOATS.
            </p>
            <div className="hero__btns">
              <button className="primary__btn">Get Started</button>
              <button className="secondary__btn">Learn more</button>
            </div>
          </div>
          <div className="hero__img">
            <img src={heroDarkImg} alt="hero-img"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
