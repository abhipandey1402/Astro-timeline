import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './style.css'

export const Signup = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bnu7ry5",
        "template_w69uoo4",
        form.current,
        "a-i1J6_W467PJLuh8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={{display: "flex", gap: '1rem'}}>
      <input type="email" name="user_email" placeholder="Enter email address" />
      <button type="submit">Sign Up</button>
    </form>
  );
};


