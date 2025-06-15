import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as S from "./style";

export default function InputField() {
  // Form reference for EmailJS
  const formRef = useRef();

  // Input state management
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Initialize EmailJS with public key on component mount
  useEffect(() => {
    emailjs.init("Nh5wSYe6y_LeweE-S");
  }, []);

  // Handle form submission and send email via EmailJS
  const handleSubmit = (event) => {
    event.preventDefault();

    // Prevent submission if any field is empty
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm("service_c88s4hs", "template_18mnipe", formRef.current)
      .then(() => {
        alert("Message sent successfully!");
        // Reset form fields after submission
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("An error occurred while sending the message.");
        console.error("Email sending failed:", error);
      });
  };

  return (
    <S.InputContainer>
      <h1>CONTACT ME</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          maxLength="20"
          placeholder="Your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          maxLength="50"
          placeholder="Your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="3"
          maxLength="200"
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Send" />
      </form>
    </S.InputContainer>
  );
}
