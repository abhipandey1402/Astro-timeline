import ShareComponent from "./ShareComponent";
import {Signup} from "./Signup";
import "./style.css"

const Footer = () => {
    return <div className="footer">
        <div className="first-row">
            <div className="col-1">
                <h4>Need Help</h4>
                <a href="#">Live Chat</a>
                <a href="#">Coming Soon</a>
            </div>
            <hr/>
            <div className="col-2">
                <h4>About IASO</h4>
                <a href="#">Organization information</a>
                <a href="#">Careers</a>
                <a href="#">Refer Freinds</a>
            </div>
            <hr/>

            <div className="col-3">
                <h4>Consultancy Services</h4>
                <a href="#">Book Appointment</a>
                <a href="#">Check Appointment Status?</a>
                <a href="#">Cancellation Policy</a>
            </div>
        </div>
        <div className="second-row">
        <h3 class="center">Stay Updated!</h3>

            <div className="newsletter">
                <p class="deals">Monthly Newsletter, Upcoming Predictions &amp; Events and Status.</p>
                <Signup/>
            </div>
           <ShareComponent/>
        </div>
        <hr className="line"/>
        <div className="third-row">
                <span>Â© 2023 Indian Astro Science Org. All Rights Reserved.</span> 
                <span>Privacy Policy | Terms + Conditions | Sitemap </span>
                <span>Indian Astro Science | Bangalore | Noida | Dehradun</span>
        </div>
    </div>
}

export default Footer;
