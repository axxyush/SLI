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
              width={300}
              height={200}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Deep speech, better care.
            </h1>
            <p className="lead">
              Deep vocal analysis offer objective and reliable biomarkers for
              health conditions and care. Our technology enables remote and
              accessible care by tracking early symptoms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
