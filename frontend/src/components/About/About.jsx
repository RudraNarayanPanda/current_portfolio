import { useState } from "react";
import "./About.css";

function About() {
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseMove = (event, index) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);

    setActiveCard(index);
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.setProperty(
      "--rotate-x",
      "0deg"
    );

    event.currentTarget.style.setProperty(
      "--rotate-y",
      "0deg"
    );

    setActiveCard(null);
  };

  return (
    <section className="about" id="about">

      {/* Background stars */}
      <div className="about-stars about-stars-one"></div>
      <div className="about-stars about-stars-two"></div>

      {/* Section heading */}
      <div className="about-heading">

        <span className="about-label">
          01 / ABOUT
        </span>

        <h2>
          Exploring The
          <span> Digital Universe</span>
        </h2>

        <p>
          A little about the person behind the code.
        </p>

      </div>

      {/* Main content */}
      <div className="about-container">

        {/* Central space object */}
        <div className="about-visual">

          <div className="about-orbit orbit-a"></div>

          <div className="about-orbit orbit-b"></div>

          <div className="about-orbit orbit-c"></div>

          <div className="about-core">

            <span className="core-letter">
              R
            </span>

          </div>

          <div className="about-orbit-dot dot-one"></div>

          <div className="about-orbit-dot dot-two"></div>

          <div className="about-orbit-dot dot-three"></div>

        </div>

        {/* Information cards */}
        <div className="about-cards">

          <div
            className={`about-card ${
              activeCard === 0
                ? "card-active"
                : ""
            }`}
            onMouseMove={(event) =>
              handleMouseMove(event, 0)
            }
            onMouseLeave={handleMouseLeave}
          >
            <span className="about-card-number">
              01
            </span>

            <h3>
              Who Am I?
            </h3>

            <p>
              I'm Rudra Narayan Panda, an aspiring
              developer passionate about building
              meaningful digital experiences and
              solving problems through technology.
            </p>
          </div>

          <div
            className={`about-card ${
              activeCard === 1
                ? "card-active"
                : ""
            }`}
            onMouseMove={(event) =>
              handleMouseMove(event, 1)
            }
            onMouseLeave={handleMouseLeave}
          >
            <span className="about-card-number">
              02
            </span>

            <h3>
              What I Do
            </h3>

            <p>
              I work with programming, data,
              cloud technologies and modern
              development tools to turn ideas
              into practical solutions.
            </p>
          </div>

          <div
            className={`about-card ${
              activeCard === 2
                ? "card-active"
                : ""
            }`}
            onMouseMove={(event) =>
              handleMouseMove(event, 2)
            }
            onMouseLeave={handleMouseLeave}
          >
            <span className="about-card-number">
              03
            </span>

            <h3>
              My Mission
            </h3>

            <p>
              To continuously learn, experiment
              and create technology that is
              useful, scalable and visually
              engaging.
            </p>
          </div>

        </div>

      </div>

      {/* Bottom decorative line */}
      <div className="about-bottom-line">

        <span></span>

        <p>
          KEEP EXPLORING
        </p>

        <span></span>

      </div>

    </section>
  );
}

export default About;