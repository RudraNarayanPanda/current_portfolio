import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    reason: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact form submitted:", formData);

    // Backend API connection will be added later.

    setFormData({
      name: "",
      mobile: "",
      reason: "",
    });
  };

  return (
    <section
      className="contact"
      id="contact"
    >
      {/* Background */}
      <div
        className="contact-background"
        aria-hidden="true"
      >
        <div className="contact-stars"></div>

        <div className="contact-glow contact-glow-one"></div>

        <div className="contact-glow contact-glow-two"></div>
      </div>

      {/* Heading */}
      <div className="contact-heading">

        <span className="contact-label">
          04 / CONTACT
        </span>

        <h2>
          Let's
          <span> Connect</span>
        </h2>

        <p>
          Have an idea, opportunity or simply want
          to talk? Send me a message.
        </p>

      </div>

      {/* Main content */}
      <div className="contact-container">

        {/* Left side */}
        <div className="contact-info">

          <div className="contact-orbit">

            <div className="contact-orbit-ring"></div>

            <div className="contact-orbit-ring contact-orbit-ring-two"></div>

            <div className="contact-orbit-core">
              R
            </div>

          </div>

          <h3>
            Ready to
            <span> build something?</span>
          </h3>

          <p>
            Whether it's a project, collaboration,
            opportunity or just a conversation,
            feel free to reach out.
          </p>

          {/* Social links */}
          <div className="contact-socials">

            <a
              href="mailto:nrudra796@gmail.com"
              className="contact-social"
              aria-label="Email"
            >
              <span className="social-icon">
                @
              </span>

              <span className="social-text">
                EMAIL
              </span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
              aria-label="LinkedIn"
            >
              <span className="social-icon">
                in
              </span>

              <span className="social-text">
                LINKEDIN
              </span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
              aria-label="GitHub"
            >
              <span className="social-icon">
                &lt;/&gt;
              </span>

              <span className="social-text">
                GITHUB
              </span>
            </a>

          </div>

        </div>

        {/* Right side - Form */}
        <div className="contact-form-wrapper">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-header">

              <span>
                TRANSMISSION
              </span>

              <div className="form-status">
                <span></span>
                ONLINE
              </div>

            </div>

            {/* Name */}
            <div className="form-group">

              <label htmlFor="name">
                YOUR NAME
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

            </div>

            {/* Mobile */}
            <div className="form-group">

              <label htmlFor="mobile">
                MOBILE NUMBER
              </label>

              <input
                id="mobile"
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                required
              />

            </div>

            {/* Reason */}
            <div className="form-group">

              <label htmlFor="reason">
                REASON FOR CONTACT
              </label>

              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Tell me what you would like to discuss..."
                rows="5"
                required
              ></textarea>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="contact-submit"
            >
              <span>
                SEND TRANSMISSION
              </span>

              <span className="submit-arrow">
                ↗
              </span>
            </button>

          </form>

        </div>

      </div>

      {/* Footer */}
      <div className="contact-footer">

        <span></span>

        <p>
          END OF TRANSMISSION
        </p>

        <span></span>

      </div>

    </section>
  );
}

export default Contact;