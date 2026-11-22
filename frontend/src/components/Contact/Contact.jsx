
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    reason: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Clear previous feedback when the user edits the form
    if (feedback.message) {
      setFeedback({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setFeedback({ type: "", message: "" });

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            mobile: formData.mobile.trim(),
            reason: formData.reason.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to send your message."
        );
      }

      setFeedback({
        type: "success",
        message: "Message transmitted successfully! Thank you for reaching out.",
      });

      setFormData({
        name: "",
        mobile: "",
        reason: "",
      });

    } catch (error) {
      console.error("Contact submission error:", error);

      setFeedback({
        type: "error",
        message:
          error.message ||
          "Unable to connect to the server. Please try again.",
      });

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">

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
            feel free to reach out .
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
                {isSubmitting ? "SENDING" : "ONLINE"}
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
                maxLength={100}
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
                maxLength={20}
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
                maxLength={2000}
                required
              ></textarea>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
            >
              <span>
                {isSubmitting
                  ? "TRANSMITTING..."
                  : "SEND TRANSMISSION"}
              </span>

              <span className="submit-arrow">
                ↗
              </span>
            </button>

            {/* API response message */}
            {feedback.message && (
              <p
                className={`contact-feedback ${feedback.type}`}
                role="status"
                aria-live="polite"
              >
                {feedback.message}
              </p>
            )}

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
