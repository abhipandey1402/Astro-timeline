import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import { toast } from "react-toastify";

export const Signup = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_25zoyfv",
        "template_xw39lkw",
        form.current,
        "aDVEV4dG3i2Hb4XjC"
      )
      .then(
        (result) => {
          toast.success(
            "Successfully Signed up, Soon you'll get update on mail"
          );
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{ display: "flex", gap: "1rem" }}
    >
      <input type="email" name="user_email" placeholder="Enter email address" />
      <button type="submit">Sign Up</button>
    </form>
  );
};
