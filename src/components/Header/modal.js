import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Contact({ open, handleOpen, handleClose, children }) {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_25zoyfv",
        "template_ij9h16n",
        form.current,
        "aDVEV4dG3i2Hb4XjC"
      )
      .then(
        (result) => {
          toast.success("Form Submitted, We'll get back to you soon");
          handleClose();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      {children}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <h1>Contact Us</h1>
          <div className="one">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
          </div>

          <label htmlFor="message">Message:</label>
          <br />
          <textarea id="message" name="message" rows="5" required></textarea>
          <br />

          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
}
