import React from "react";
import logo from "../../assets/images/dewallstreet.svg";
import "./root.scss";
const Root: React.FC = () => {
  return (
    <>
      <div className="mx">
        <div className="home_page">
          <div className="bg_video">
            <video autoPlay loop muted>
              <source
                src="https://ik.imagekit.io/d4cf2o3ja/production_ID_4992555__1_.mp4?updatedAt=1680083200775 "
                type="video/mp4"
              />
            </video>
          </div>
          <div className="dewall_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="">
            <h3>We are the best professional service network for all your</h3>
          </div>
          <div>
            <p>
              Dewallstreet Consultancy is a legally structured unit of
              Dewallstreet Private Limited, an India based multiple interest
              conglomeration foundation in its early seed stage, which is
              ethically incorporated and regulated under the norms of Ministry
              of Corporate Affairs (MCA) & Registrar of Companies (RoC) and
              follows industrial reputation trust marks, quality delivery
              standards, ethical business & market practices with Go-Global
              bootstrapped principle.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
