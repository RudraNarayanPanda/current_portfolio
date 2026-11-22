import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      number: "01",
      title: "Skin Cancer Detection",
      category: "MACHINE LEARNING",
      description:
        "CNN , SVM and ELM based skin cancer classification system using the HAM10000 and Dermis.net dataset to classify Benign and Melanoma type skin cancer with an accuracy of 98%.",
      technologies: [
        "Python",
        "TensorFlow",
        "CNN",
        "Deep Learning",
      ],
      link: "https://ieeexplore.ieee.org/document/10725357",
    },

    {
      id: 2,
      number: "02",
      title: "Full Stack Developer",
      category: "WEB DEVELOPMENT",
      description:
        "A Complain Management System which help Admin to check the status and escalate to higher authority to manage the concern including status updation and allows user to check their tickets and issue progress along with whom it is pending for resolution.",
      technologies: [
        "HTML",
        "CSS",
        "Node.js",
        "PostgressSQL",
      ],
      link: "https://github.com/geeky-brahma/ComplaintManagementSystem",
    },

    {
      id: 3,
      number: "03",
      title: "Portfolio Universe",
      category: "WEB DEVELOPMENT",
      description:
        "An interactive space-inspired developer portfolio with animated UI, glowing elements and responsive design.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "Node.js",
      ],
      link: "#",
    },

    {
      id: 4,
      number: "04",
      title: "Data Security System",
      category: "PYTHON / STEGANOGRAPHY",
      description:
        "Developed a Steganography tool that enables secure data encryption by embedding messages/text/information within specified images which can be decrypted with specialized key which stealth the data to access by unauthorized person.",
      technologies: [
        "Python",
        "Cyber Security concepts",
        "python Libraries",
        "Github",
      ],
      link: "https://github.com/RudraNarayanPanda/STEGANOGRAPHY/blob/main/stegnography.py",
    },
  ];

  const handleMouseMove = (event) => {
    const card = event.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX =
      ((y - rect.height / 2) / rect.height) * -8;

    const rotateY =
      ((x - rect.width / 2) / rect.width) * 8;

    card.style.setProperty(
      "--project-rotate-x",
      `${rotateX}deg`
    );

    card.style.setProperty(
      "--project-rotate-y",
      `${rotateY}deg`
    );
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.setProperty(
      "--project-rotate-x",
      "0deg"
    );

    event.currentTarget.style.setProperty(
      "--project-rotate-y",
      "0deg"
    );

    setActiveProject(null);
  };

  return (
    <section
      className="projects"
      id="projects"
    >
      {/* Background */}
      <div
        className="projects-background"
        aria-hidden="true"
      >
        <div className="projects-glow projects-glow-one"></div>

        <div className="projects-glow projects-glow-two"></div>

        <div className="projects-stars"></div>
      </div>

      {/* Heading */}
      <div className="projects-heading">

        <span className="projects-label">
          02 / PROJECTS
        </span>

        <h2>
          Things I've
          <span> Built</span>
        </h2>

        <p>
          A collection of experiments, projects and
          things I've worked on.
        </p>

      </div>

      {/* Projects */}
      <div className="projects-container">

        {projects.map((project) => (
          <article
            key={project.id}
            className={`project-card ${
              activeProject === project.id
                ? "project-active"
                : ""
            }`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() =>
              setActiveProject(project.id)
            }
            onMouseLeave={handleMouseLeave}
          >
            {/* Card number */}
            <div className="project-number">
              {project.number}
            </div>

            {/* Decorative orbital element */}
            <div
              className="project-orbit"
              aria-hidden="true"
            >
              <div className="project-orbit-ring"></div>

              <div className="project-orbit-core"></div>
            </div>

            {/* Card content */}
            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              {/* Technologies */}
              <div className="project-technologies">
                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>

              {/* Project link */}
              <a
                href={project.link}
                className="project-link"
                onClick={(event) => {
                  if (project.link === "#") {
                    event.preventDefault();
                  }
                }}
              >
                <span>
                  VIEW PROJECT
                </span>

                <span className="project-arrow">
                  ↗
                </span>
              </a>

            </div>

            {/* Hover light */}
            <div
              className="project-hover-light"
              aria-hidden="true"
            ></div>

          </article>
        ))}

      </div>

      {/* Bottom text */}
      <div className="projects-footer">

        <span></span>

        <p>
          MORE PROJECTS COMING SOON
        </p>

        <span></span>

      </div>

    </section>
  );
}

export default Projects;