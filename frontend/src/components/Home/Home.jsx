import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const phrases = [
    "Aspiring Software Developer",
    "Data & Cloud Enthusiast",
    "Python Developer",
    "DevOps Engineer",
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  /*
   * Typewriter effect
   */
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const typingSpeed = deleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentPhrase.substring(0, text.length + 1));

        if (text.length === currentPhrase.length) {
          setTimeout(() => {
            setDeleting(true);
          }, 1300);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);

          setPhraseIndex(
            (previousIndex) =>
              (previousIndex + 1) % phrases.length
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, deleting, phraseIndex]);

  /*
   * Mouse movement for the 3D space environment
   */
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      document.documentElement.style.setProperty(
        "--mouse-x",
        `${x}`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${y}`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <section className="home" id="home">

      {/* =========================================
          SPACE BACKGROUND
          ========================================= */}

      <div className="home-space" aria-hidden="true">

        {/* Nebulae */}

        <div className="home-nebula home-nebula-green"></div>

        <div className="home-nebula home-nebula-pink"></div>

        <div className="home-nebula home-nebula-cyan"></div>

        {/* Stars */}

        <div className="home-stars home-stars-small"></div>

        <div className="home-stars home-stars-medium"></div>

        <div className="home-stars home-stars-large"></div>

        {/* Perspective grid */}

        <div className="home-space-grid"></div>

        {/* Vignette */}

        <div className="home-vignette"></div>

      </div>

      {/* =========================================
          DECORATIVE PARTICLES
          ========================================= */}

      <div className="home-particles" aria-hidden="true">

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>

      {/* =========================================
          MAIN CONTENT
          ========================================= */}

      <div className="home-content">

        <p className="home-intro">
          HELLO, I'M
        </p>

        <h1
          className="home-name"
          data-text="Rudra Narayan Panda"
        >
          Rudra Narayan Panda
        </h1>

        <div className="home-role">
          <span>{text}</span>

          <span className="typing-cursor">
            |
          </span>
        </div>

        <p className="home-description">
          Building ideas into intelligent, scalable and
          visually engaging digital experiences.
        </p>

        <div className="home-buttons">

          <button
            className="home-button primary-button"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Explore My Work
          </button>

          <button
            className="home-button secondary-button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Contact Me
          </button>

        </div>

      </div>

      {/* =========================================
          3D SPACE OBJECT
          ========================================= */}

      <div
        className="home-orbit"
        aria-hidden="true"
      >

        <div className="orbit-ring orbit-ring-one"></div>

        <div className="orbit-ring orbit-ring-two"></div>

        <div className="orbit-ring orbit-ring-three"></div>

        {/* Accretion disk */}

        <div className="accretion-disk">

          <div className="disk-inner"></div>

          <div className="disk-middle"></div>

          <div className="disk-outer"></div>

        </div>

        {/* Black hole */}

        <div className="orbit-core">

          <div className="core-glow"></div>

          <div className="core-center"></div>

        </div>

        {/* Orbiting particles */}

        <div className="orbit-particle orbit-particle-one"></div>

        <div className="orbit-particle orbit-particle-two"></div>

        <div className="orbit-particle orbit-particle-three"></div>

      </div>

      {/* =========================================
          SCROLL INDICATOR
          ========================================= */}

      <div className="scroll-indicator">

        <span>SCROLL</span>

        <div className="scroll-line"></div>

      </div>

    </section>
  );
}

export default Home;