import React,{useState} from "react";
import "./style.css"
import NavDrawer from "./drawer";
import Contact from "./modal";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/actions/searchAction";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    dispatch(setSearch(inputValue));
  };


  return (
    <>
      <div className="container-head">
        <div className="navbar">
          <ul className="left">
            <li><script src="https://cdn.logwork.com/widget/digital.js"></script>
              <a href="https://logwork.com/current-time-in-delhi-india" class="digital-clock" data-style="round" data-size="253" data-timezone="Asia/Kolkata" data-language="en">Delhi, India</a></li>
            <li><a className="link">Home</a></li>
            <a className="link">About IASO</a>
            <li><a className="link">News</a></li>
            <li>
              <a className="link">Services</a>
              <ul className="dropdown-menu">
                <li><a className="link">Book Appointment</a></li>
              </ul>
            </li>
            <li><Contact open={open} handleOpen={handleOpen} handleClose={handleClose}><a className="link" onClick={handleOpen}>Contact</a></Contact></li>
          </ul>
          <div className="right">
            <a className="link">
            <input type='text' onChange={handleInputChange} placeholder="Search" className="searchBox"/>
            </a>
            <li><a className="link">Need Help</a></li>

          </div>
        </div>
      </div>
      <NavDrawer />
      <div className="foot">
        <h2 className="logo">
          <span className="name">[INDIAN ASTRO SCIENCE]<sup>Predictions By Anirudh Kumar Mishra</sup></span>
        </h2>

      </div>

    </>
  )
}

export default Header;


