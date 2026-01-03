import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

      then(
        () => {
          alert("Message sent successfully 😤🔥");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Something went wrong 😭");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <p className="contact-subtitle">
        Have a project, opportunity, or just want to say hi?
        <br />
        Drop a message and I’ll get back to you.
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {/* 🔥 BACK TO TOP CTA */}
      <div className="contact-cta">
        <a href="#home" className="back-top-btn">
          ↑ Back to Top
        </a>
      </div>
    </section>
  );
}

export default Contact;
