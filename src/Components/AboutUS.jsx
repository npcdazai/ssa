import about1 from "../assets/about1.png";
import arrow from "../assets/arrow.png";
import about2 from "../assets/about2.png";
import overlay from "../assets/aboutBg.png";
import aboutBg from "../assets/tti.png";

const AboutUS = () => {
    return (
        <div className="d-flex flex-column gap-4 w-100">
            <div className="d-flex flex-column align-items-center w-100">
                <p
                    className="Matter text-center fw-medium"
                    style={{
                        color: "#000000",
                        width: "718px",
                    }}
                >
                    To be the first venue in the world to have{" "}
                    <span
                        className="boldMatter fw-bold"
                        style={{ color: "#002F50" }}
                    >
                        60 multi surface courts
                    </span>{" "}
                    at one location and establish first one stop tennis academy in
                    the Asia Pacific producing grand slam champions.
                </p>
            </div>

            <div>
                <div className="d-flex flex-row w-100 gap-5 justify-content-center align-items-center position-relative">
                    <div style={{ width: "395px", height: "506px" }} />
                    <img
                        src={about1}
                        alt="About Image 1"
                        style={{
                            width: "395px",
                            height: "506px",
                            position: "absolute",
                            bottom: "-2rem",
                            zIndex: 20,
                            left: 180,
                        }}
                    />

                    <div className="d-flex flex-column align-items-start position-relative">
                        <p
                            className="mid"
                            style={{ color: "#003A5D", fontSize: "36px" }}
                        >
                            About Us
                        </p>

                        <div className="w-100">
                            <p
                                className="Matter mb-3"
                                style={{
                                    lineHeight: "23px",
                                    width: "509px",
                                }}
                            >
                                To be the first venue in the world to have 60 multi
                                surface courts at one location and establish first
                                one stop tennis academy in the Asia Pacific
                                producing grand slam champions.
                            </p>

                            <div
                                className="Matter d-flex flex-row align-items-center gap-2"
                                style={{ cursor: "pointer" }}
                            >
                                <p className="m-0" style={{ color: "#003A5D" }}>
                                    Read More
                                </p>
                                <img
                                    alt="arrow"
                                    src={arrow}
                                    width="27.02px"
                                    height="auto"
                                />
                            </div>
                        </div>
                    </div>

                    <img
                        src={about2}
                        alt="About Image 2"
                        width="293px"
                        height="230px"
                        style={{
                            position: "absolute",
                            bottom: "-4rem",
                            right: 200,
                            zIndex: 30,
                        }}
                    />
                </div>

                <div
                    className="d-flex flex-column align-items-center justify-content-center position-relative text-white text-center overflow-hidden"
                    style={{
                        backgroundImage: `url(${aboutBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "468px",
                        paddingTop:"8rem",
                        paddingBottom:"4rem"
                    }}

                >
                    {/* Overlay */}
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                            zIndex: 1,
                            backgroundImage: `url(${overlay})`,
                            mixBlendMode: "multiply",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    />

                    <p
                        className="mid position-relative z-2 px-3"
                        style={{
                            maxWidth: "800px",
                            fontSize: "35px",
                        }}
                    >
                        “We have created an environment ideal for building craft.
                        Our goal is to be recognized as the best tennis performance
                        centre in the world.”
                    </p>

                    <div
                        className="border-bottom mt-3"
                        style={{ height: "2px", borderColor: "#FFFFFF" }}
                    />

                    <div style={{display:"flex",alignItems:"flex-start" , width:"50%" , flexDirection:"column" }}>
                        <span className="Matter" style={{fontSize:"20px"}}>John Doe</span>
                        <span className="Matter" style={{fontSize:"16px" , fontWeight:100}}>Chairman</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUS;
