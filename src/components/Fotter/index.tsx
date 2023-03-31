import React from "react";
import "./fotter.scss";
import { ReactComponent as Logo } from "../../assets/icons/dewall-logo.svg";
import { ReactComponent as Map } from "../../assets/icons/map-pin.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Twiter } from "../../assets/icons/twiter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Rigtarrow } from "../../assets/icons/arrow-right-footer.svg";

const Fotter: React.FC = () => {
  return (
    <>
      <div>
        <div className="mx">
          <div className="fotter">
            <div className="address">
              <div className="logo">
                <Logo />
              </div>
              <div className="address-deteials">
                <Map />
                <p>
                  #1, VOC Street, Mahalaxmi Nagar, East Tambaram,
                  <br /> Selaiyur Post, Tamilnadu - 600 059, India.
                </p>
              </div>
              <div className="address-deteials">
                <Mail />
                <p>connect@dewallstreet.capital</p>
              </div>
              <div className="address-deteials">
                <Phone />
                <p>+91 44356 72539/ +91 44356 72539</p>
              </div>
            </div>
            <div className="border-right"></div>
            <div>
              <div className="terms_policy">
                <div className="aboutus">
                  <div>
                    <ul>
                      <li>
                        <h5>FIRM</h5>
                      </li>
                      <li>About Us</li>
                      <li>Jobs</li>
                      <li>Case Study</li>
                      <li>Latest News</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <h5>WINGS</h5>
                      </li>
                      <li>Bureaus</li>
                      <li>Studios</li>
                      <li>Labs</li>
                      <li>Boards</li>
                    </ul>
                  </div>
                </div>
                <div className="appoinment">
                  <h4>Schedule an appointment </h4>
                  <div className="search">
                    <input type="text" placeholder="Your email" />
                    <Rigtarrow />
                  </div>
                  <div className="follow">
                    <h5>Follow Us On</h5>
                    <div className="social_media">
                      <Twiter />
                      <Instagram />
                      <Linkedin />
                      <Telegram />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border_bottom"></div>
              <div className="connect">
                <h5>Terms | Privacy policies | Connect</h5>
                <p>Copyright @ 2022 Dewallstreet @ All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotter;
