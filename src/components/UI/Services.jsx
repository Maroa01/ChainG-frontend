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
    desc: "Participate in hands-on training sessions to hone your skills and master the intricacies of cryptocurrency investment and trading.",
  },

  {
    icon: "ri-community-fill",
    title: "Community",
    desc: "Connect with a dynamic community of crypto enthusiasts to share knowledge, experiences and insights in the world of cryptocurrencies.",
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
