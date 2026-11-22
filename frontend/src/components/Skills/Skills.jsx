import { useState } from "react";
import "./Skills.css";

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const skillGroups = [
    {
      id: 1,
      title: "PROGRAMMING",
      icon: "</>",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "SQL", level: "Advanced" },
      ],
    },

    {
      id: 2,
      title: "DATA & AI",
      icon: "◈",
      skills: [
        { name: "Machine Learning", level: "Advanced" },
        { name: "Deep Learning", level: "Intermediate" },
        { name: "Data Analysis", level: "Advanced" },
        { name: "Pandas", level: "Advanced" },
        { name: "TensorFlow", level: "Intermediate" },
      ],
    },

    {
      id: 3,
      title: "CLOUD & DEVOPS",
      icon: "⌘",
      skills: [
        { name: "Cloud Computing", level: "Intermediate" },
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "CI/CD", level: "Intermediate" },
        { name: "Linux", level: "Intermediate" },
      ],
    },

    {
      id: 4,
      title: "WEB & DATABASE",
      icon: "{}",
      skills: [
        { name: "React", level: "Intermediate" },
        { name: "HTML / CSS", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "MySQL", level: "Advanced" },
        { name: "REST APIs", level: "Intermediate" },
      ],
    },
  ];

  const handleMouseMove = (event) => {
    const card = event.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX =
      ((y - rect.height / 2) / rect.height) * -7;

    const rotateY =
      ((x - rect.width / 2) / rect.width) * 7;

    card.style.setProperty(
      "--skill-rotate-x",
      `${rotateX}deg`
    );

    card.style.setProperty(
      "--skill-rotate-y",
      `${rotateY}deg`
    );
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.setProperty(
      "--skill-rotate-x",
      "0deg"
    );

    event.currentTarget.style.setProperty(
      "--skill-rotate-y",
      "0deg"
    );

    setActiveSkill(null);
  };

  return (
    <section
      className="skills"
      id="skills"
    >
      {/* =================================================
          BACKGROUND
          ================================================= */}

      <div
        className="skills-background"
        aria-hidden="true"
      >
        <div className="skills-stars"></div>

        <div className="skills-nebula skills-nebula-one"></div>

        <div className="skills-nebula skills-nebula-two"></div>

        <div className="skills-grid"></div>
      </div>

      {/* =================================================
          HEADING
          ================================================= */}

      <div className="skills-heading">

        <span className="skills-label">
          03 / SKILLS
        </span>

        <h2>
          My
          <span> Technical Universe</span>
        </h2>

        <p>
          Technologies and tools I use to transform
          ideas into working solutions.
        </p>

      </div>

      {/* =================================================
          SKILL CARDS
          ================================================= */}

      <div className="skills-container">

        {skillGroups.map((group) => (
          <article
            key={group.id}
            className={`skill-card ${
              activeSkill === group.id
                ? "skill-active"
                : ""
            }`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() =>
              setActiveSkill(group.id)
            }
            onMouseLeave={handleMouseLeave}
          >
            {/* Card glow */}
            <div
              className="skill-card-glow"
              aria-hidden="true"
            ></div>

            {/* Header */}
            <div className="skill-card-header">

              <div className="skill-icon">
                {group.icon}
              </div>

              <div>
                <span className="skill-card-number">
                  0{group.id}
                </span>

                <h3>
                  {group.title}
                </h3>
              </div>

            </div>

            {/* Skills */}
            <div className="skill-list">

              {group.skills.map(
                (skill, index) => (
                  <div
                    className="skill-item"
                    key={skill.name}
                    style={{
                      "--skill-index": index,
                    }}
                  >
                    <div className="skill-info">

                      <span className="skill-name">
                        {skill.name}
                      </span>

                      <span className="skill-level">
                        {skill.level}
                      </span>

                    </div>

                    <div className="skill-bar">

                      <span
                        className={`skill-progress ${
                          skill.level ===
                          "Advanced"
                            ? "progress-advanced"
                            : "progress-intermediate"
                        }`}
                      ></span>

                    </div>
                  </div>
                )
              )}

            </div>

            {/* Decorative corner */}
            <div
              className="skill-corner"
              aria-hidden="true"
            ></div>

          </article>
        ))}

      </div>

      {/* =================================================
          BOTTOM
          ================================================= */}

      <div className="skills-footer">

        <span></span>

        <p>
          ALWAYS LEARNING · ALWAYS BUILDING
        </p>

        <span></span>

      </div>

    </section>
  );
}

export default Skills;