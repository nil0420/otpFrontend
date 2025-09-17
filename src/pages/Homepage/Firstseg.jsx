import React, { useState, useEffect } from "react";
import "../../App.css";
import user1 from "../../assets/images/12.jpg";
import user2 from "../../assets/images/22.jpg";
import user3 from "../../assets/images/32.jpg";
import user4 from "../../assets/images/42.jpg";

const initialDevelopers = [
  {
    id: 1,
    name: "Garg R",
    role: "Senior iOS Developer",
    company: "PayTM",
    img: user1,
  },
  {
    id: 2,
    name: "Pradhan R",
    role: "Lead iOS Developer",
    company: "Standard Chartered",
    img: user2,
  },
  {
    id: 3,
    name: "Yogi Adityanath",
    role: "Senior iOS Developer",
    company: "Apple",
    img: user3,
  },
  {
    id: 4,
    name: "Nana",
    role: "Senior Software Engineer",
    company: "Share",
    img: user4,
  },
  {
    id: 5,
    name: "Kumar J",
    role: "Senior iOS Developer",
    company: "McDonald's",
    img: user1,
  },
  {
    id: 6,
    name: "Thummar B",
    role: "iOS Development",
    company: "Capgemini",
    img: user2,
  },
];

const Firstseg = () => {
  const [developers, setDevelopers] = useState(initialDevelopers);
  const [exitingCardId, setExitingCardId] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    if (screenWidth <= 1024) return; 

    const interval = setInterval(() => {
      const firstDev = developers[0];

      setExitingCardId(firstDev.id);

      setTimeout(() => {
        setDevelopers((prevDevs) => {
          const newDevs = [...prevDevs.slice(1), firstDev];
          return newDevs;
        });
        setExitingCardId(null);
      }, 2300);
    }, 3000);

    return () => clearInterval(interval);
  }, [developers, screenWidth]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % developers.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? developers.length - 1 : prev - 1
    );
  };

  return (
    <div className="firstseg-wrapper">
      <div className="firstseg-container">
        <div className="firstseg-left">
          <h1>Find & Hire iOS Developers with Ease</h1>
          <p>
            Bring the right talent to your team effortlessly with Talrn <br />
            Hire pre-vetted remote iOS developers with strong technical & <br />
            communication skills within 48 hours.
          </p>
          <div className="email-box">
            <input type="text" placeholder="Your work email" />
            <button>Hire iOS Dev</button>
          </div>
          <p className="apply-text">
            Looking for remote iOS dev jobs? <a href="#apply">Apply here</a>
          </p>
        </div>

 
        <div className="firstseg-right">
          {screenWidth > 1024 &&
            developers.map((dev) => {
              let cardClass = "dev-card";
              if (exitingCardId === dev.id) {
                cardClass += " exiting";
              }
              if (exitingCardId && exitingCardId !== dev.id) {
                cardClass += " slow-scroll";
              }
              return (
                <div key={dev.id} className={cardClass}>
                  <img src={dev.img} alt={dev.name} />
                  <h3>{dev.name}</h3>
                  <p className="role">{dev.role}</p>
                  <p className="company">
                    Worked at <b>{dev.company}</b>
                  </p>
                </div>
              );
            })}

          {screenWidth <= 1024 && screenWidth > 720 && (
            <div className="dev-grid">
              {developers.slice(0, 4).map((dev) => (
                <div key={dev.id} className="dev-card">
                  <img src={dev.img} alt={dev.name} />
                  <h3>{dev.name}</h3>
                  <p className="role">{dev.role}</p>
                  <p className="company">
                    Worked at <b>{dev.company}</b>
                  </p>
                </div>
              ))}
            </div>
          )}

          {screenWidth <= 720 && (
            <div className="dev-carousel">
              <button className="arrow left" onClick={prevCard}>
                ‹
              </button>
              <div className="dev-card single">
                <img
                  src={developers[currentIndex].img}
                  alt={developers[currentIndex].name}
                />
                <h3>{developers[currentIndex].name}</h3>
                <p className="role">{developers[currentIndex].role}</p>
                <p className="company">
                  Worked at <b>{developers[currentIndex].company}</b>
                </p>
              </div>
              <button className="arrow right" onClick={nextCard}>
                ›
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="firstseg-top-info">
        <p>
          Explore <b>411+ iOS developers</b> from 70+ countries, delivering{" "}
          <b>2503+ projects</b>.
        </p>
        <p>
          Discover <b>102+ industry expert</b> in Ecommerce, Health and Fitness
          & more with, <b>326+ technology specialists</b> in Swift, ObjectiveC &
          more
        </p>
      </div>

      <div className="firstseg-banner">
        <h2>Augment your team with highly-skilled iOS Developers</h2>
        <button className="view-profiles-btn">View Profiles</button>
      </div>
    </div>
  );
};

export default Firstseg;
