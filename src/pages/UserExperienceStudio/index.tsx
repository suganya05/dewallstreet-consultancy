import React from "react";
import UserExperienceStudioImg from "../../assets/images/userExperienceStudioImg.png";
import UserExperienceImgOne from "../../assets/images/userExperience-img-1.png";
import UserExperienceImgTwo from "../../assets/images/userExperience-img-2.png";
import { ReactComponent as UxServiceIcon } from "../../assets/icons/uxService.svg";
import { ReactComponent as EnterpriseIcon } from "../../assets/icons/enterprise.svg";
import "./UserExperienceStudio.scss";

const UserExperienceStudio: React.FC = () => {
  return (
    <div className="mx">
      <div className="user-experience-wrapper">
        <div className="ux-box">
          <h1>UX</h1>
        </div>
        <div className="user-experience-content">
          <h2>User Experience Studio </h2>
          <h3>We build outcome focused designs, that drives businesses.</h3>
        </div>
        <div className="user-experience-flexContent">
          <div className="services-icons">
            <div>
              <UxServiceIcon />
              <h3>STARTUP</h3>
              <h3>UX SERVICES</h3>
            </div>
          </div>
          <div className="UserExperienceStudioImg">
            <img src={UserExperienceStudioImg} alt="" />
          </div>
          <div className="services-icons">
            <div>
              <EnterpriseIcon />
              <h3>ENTERPRISE</h3>
              <h3>UX SERVICES</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="UserExperience-content-One">
        <div className="content-one">
          <div>
            <UxServiceIcon />
            <h3>STARTUP</h3>
            <h3>UX SERVICES</h3>
          </div>
        </div>
        <div>
          <img src={UserExperienceImgOne} alt="" />
        </div>
      </div>

      <div className="UserExperience-content-One userExperience-two">
        <div>
          <img src={UserExperienceImgTwo} alt="" />
        </div>
        <div className="content-one">
          <div>
            <EnterpriseIcon />
            <h3>ENTERPRISE</h3>
            <h3>UX SERVICES</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserExperienceStudio;
