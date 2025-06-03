import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as S from "./style";

export default function InputField() {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    emailjs.init("Nh5wSYe6y_LeweE-S");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Fill in all fields");
      return;
    }

    emailjs
      .sendForm("service_c88s4hs", "template_18mnipe", formRef.current)
      .then(() => {
        alert("Sucess!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Error");
        console.log("FAILED...", error);
      });
  };

  return (
    <S.InputContainer>
      <h1>CONTACT ME</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="name"  maxLength="20" placeholder="Your name..." value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="email"name="email" maxLength="50" placeholder="Your email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
        <textarea name="message" rows="3" maxLength="150" placeholder="Your text..." value={message} onChange={(e) => setMessage(e.target.value)} />
        <input type="submit" value="Send" />
      </form>
    </S.InputContainer>
  );
}
