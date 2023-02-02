import React from "react";
import "../../styles/blog.css";
import videoImg from "../../images/video.png";
import articleImg from "../../images/article.png";
import caseImg from "../../images/case-study.png";

const blogData = [
  {
    imgUrl: videoImg,
    title: "Video",
    desc: "Watch some of our videos and see ho...",
    linkUrl: "#",
  },
  {
    imgUrl: articleImg,
    title: "Article",
    desc: "In recent years, cryptocurrency has captured the attention of investors an...",
    linkUrl: "#",
  },
  {
    imgUrl: caseImg,
    title: "Learn",
    desc: "In an increasingly digital world, understanding cryptocurrency is becoming more impo...",
    linkUrl: "#",
  },
];

const Blog = () => {
  return (
    <section>
      <div className="container">
        <div className="blog__top-content">
          <h6 className="subtitle">Our Blog</h6>
          <h2>
            Have a look at our <span className="highlight">recent blogs</span>{" "}
          </h2>
        </div>
        <div className="blog__wrapper">
          {blogData.map((item, index) => (
            <div className="blog__item" key={index}>
              <h3>{item.title}</h3>
              <div className="blog__img">
                <img src={item.imgUrl} alt="" />
              </div>
              <p className="description blog__desc">{item.desc}</p>
              <div>
                <a href={item.linkUrl} className="learn__more">
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
