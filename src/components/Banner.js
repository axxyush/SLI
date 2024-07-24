import React from "react";
import bannerImg from "../images/banner-img.png";

function Banner() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={bannerImg}
              className="banner-img d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Better care through speech.
            </h1>
            <p className="lead">
              Speech analytics provide objective, repeatable metrics—unlocking a
              new paradigm of patient care. Achieve better care and identify
              health problems before symptoms appear through remote, frequent
              speech assessments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
