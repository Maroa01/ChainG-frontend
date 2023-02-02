import React from "react";
import "../../styles/about.css";
import aboutImg from "../../images/about.png";

const chooseData = [
  {
    icon: "ri-door-lock-line",
    title: "Expand your understanding",
    desc: "Our courses cover everything from the basics to advanced strategies, giving you a complete education in cryptocurrency. They include; Introductory courses, Intermediate courses and Advanced courses.",
  },
  {
    icon: "ri-team-line",
    title: "Dedicated team",
    desc: "Our experienced coaches provide personalized support and guidance to help you reach your goals. The team offers training sessions that allow you to deepen your understanding and put your knowledge into practice.",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">What we are bringing to the space.</h6>
            <h2>You can learn at your own pace and at your </h2>
            <h2 className="highlight"> own convenience</h2>
            <p className="description about__content-desc">
              Our expert-led courses, personalized coaching, interactive
              training sessions and thriving community provide the knowledge and
              support you need to be successful in the world of cryptocurrency.
            </p>

            <div className="choose__item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose__us-title">{item.title} </h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about__img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
