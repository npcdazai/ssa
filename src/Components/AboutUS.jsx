import about1 from "../assets/about1.png";
import arrow from "../assets/arrow.png";
import about2 from "../assets/about2.png";
import overlay from "../assets/aboutBg.png";
import aboutBg from "../assets/tti.png";
import "../styles/About.css";

const AboutUS = () => {
  return (
    <div className="about-container d-flex flex-column gap-4 w-100 of">
      <div className="d-flex flex-column align-items-center w-100 of">
        <p className="Matter text-center fw-medium about-pad of" style={{ color: "#000000" }}>
          To be the first venue in the world to have{" "}
          <span className="boldMatter fw-bold" style={{ color: "#002F50" }}>
            60 multi surface courts
          </span>{" "}
          at one location...
        </p>
      </div>

      <div>
        <div className="about-section of d-flex flex-row w-100 gap-5 justify-content-center align-items-center position-relative">
          <div className="eer" />
          
          <img
            src={about1}
            alt="About Image 1"
            className="about-image1"
          />

          <div className="d-flex flex-column align-items-start position-relative of about-text">
            <p className="mid" style={{ color: "#003A5D", fontSize: "36px" }}>
              About Us
            </p>

            <div className="w-100 of">
              <p className="Matter mb-3 of about-description">
                To be the first venue in the world...
              </p>

              <div className="Matter of d-flex flex-row align-items-center gap-2 read-more">
                <p className="m-0" style={{ color: "#003A5D" }}>Read More</p>
                <img alt="arrow" src={arrow} width="27.02px" />
              </div>
            </div>
          </div>

          <img
            src={about2}
            alt="About Image 2"
            className="about-image2"
          />
        </div>

        <div
          className="quote-section of d-flex flex-column align-items-center justify-content-center position-relative text-white text-center overflow-hidden"
          style={{
            backgroundImage: `url(${aboutBg})`,
          }}
        >
          <div className="overlay of" style={{ backgroundImage: `url(${overlay})` }} />

          <p className="mid position-relative z-2 px-3 quote-text">
            “We have created an environment ideal for building craft...”
          </p>

          <div className="border-bottom mt-3 of position-relative z-2 quote-line" />

          <div className="quote-author of position-relative z-2 mt-3">
            <span className="Matter">John Doe</span>
            <span className="Matter position-title">Chairman</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
