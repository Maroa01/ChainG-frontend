import React from "react";
import "../../styles/Services.css";

const serviceData = [
  {
    icon: "ri-apps-line",
    title: "Courses",
    desc: "Deep dive into the world of cryptocurrencies with our comprehensive courses covering all aspects, from basics to advanced strategies.",
  },

  {
    icon: "ri-line-chart-fill",
    title: "Coaching",
    desc: "Receive tailored support and expert advice from our seasoned cryptocurrency coaches to help you achieve your goals.",
  },

  {
    icon: "ri-lightbulb-line",
    title: "Training",
    desc: "Achieve mastery in the world of cryptocurrency and blockchain technology with our comprehensive training program.",
  },

  {
    icon: "ri-community-fill",
    title: "Community",
    desc: "Connect with like-minded individuals and stay updated on industry developments.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="service__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Now is the time to invest in your</h2>
          <h2 className="highlight"> Crypto Education</h2>
        </div>

        <div className="service__item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services__item">
              {" "}
              key={index}
              <span className="service__icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
