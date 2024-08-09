import React from "react";
import Banner from "./Banner";
// import websitevideo from "../images/websitevideo.mp4";
import websitevideo from "../images/AuspexMedixVideo.MP4";

function Home() {
  return (
    <>
      <Banner />
      {/* *************************************** */}
      <div className="mission">
        <div className="mission-content bg-light">
          <h2>Our Mission</h2>
          <p>
            To be the global leader in comprehensive health monitoring by
            providing clinical decision-makers with non-invasive and actionable
            insights into the overall health of their patients, including
            neurological, developmental, and mental health aspects.
          </p>
        </div>
        <div className="mission-fact ">
          <p>
            <b>A couple of examples are:</b>
          </p>
          <ul>
            <li>Alzheimer's Disease</li>
            <li>Parkinson's</li>
            <li>Autism and Developmental Delay</li>
            <li>Stress and Anxiety</li>
          </ul>
        </div>
      </div>
      {/* *************************************** */}
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Our Product - Converting Speech into Biomarkers
            </h1>
            <p className="lead">
              Our innovative product transforms speech data into valuable
              biomarkers, offering a breakthrough in health monitoring and
              diagnostics. By analyzing speech patterns, we can convert vocal
              data into precise biomarkers, providing actionable insights into
              various health conditions. This technology enables clinical
              decision-makers to assess a patient's health status with accuracy,
              making it an essential tool for comprehensive and non-invasive
              healthcare.
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
          <div className="col-10 col-sm-8 col-lg-6 ">
            <iframe
              className="d-block mx-lg-auto img-fluid"
              style={{ borderRadius: "20px", height: "250px", width: "700px" }}
              src={websitevideo}
              title="Website Video"
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
              Our solution offers tow ways to collaboration: <br /> 1) By
              licensing our API/SDK solutions to access neurological,
              developmental and mental health vocal biomarkers <br /> 2) By
              partnering with us to develop innovative health monitoring
              solutions. These partnerships enable companies to integrate
              advanced vocal biomarker technology into their offerings,
              enhancing their ability to monitor and improve health outcomes
              effectively.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
