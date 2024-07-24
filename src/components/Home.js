import React from "react";
import Banner from "./Banner";

function Home() {
  return (
    <>
      <Banner />
      {/* *************************************** */}
      <div className="mission">
        <div className="mission-content bg-light">
          <h2>Our Mission</h2>
          <p>
            To be the global leader in brain health monitoring by providing
            clinical decision makers with non-invasive and actionable insights
            regarding the neurological health of their patients.
          </p>
        </div>
        <div className="mission-fact ">
          <h2>55,000,000</h2>
          <p>People currently living with a neurological disease</p>
        </div>
      </div>
      {/* *************************************** */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Our Purpose
            </h1>
            <p className="lead">
              To build the world’s most advanced model driven, transparent
              speech analytics platform. Neurological diseases and injuries are
              among the most debilitating and costly health challenges facing
              the world today. We strive to improve patient outcomes by
              unlocking the valuable brain health data available in the speech
              signal with scientifically sound and technically viable speech
              analytics technology.
            </p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://auralanalytics.com/wp-content/uploads/2022/04/Why-We-Exist-2.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* *************************************** */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <iframe
              className="d-block mx-lg-auto img-fluid"
              style={{ borderRadius: "40px", height: "250px", width: "700px" }}
              src="https://www.youtube.com/embed/KgDhaaPSHcI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Our Solution
            </h1>
            <p className="lead">
              Our suite of easy-to-use, mobile first solutions extract
              clinically relevant measures by tapping into various nervous
              system functions. We make speech elicitation and clinical outcome
              measures simple. Disease, location, language, device agnostic
              Real-time, online and easily extensible Deployed in 8 languages
              and on 4 continents Clinically validated across multiple disease
              states
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
