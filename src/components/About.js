import { useState, useRef, useEffect } from "react";
import { descriptions } from "../constants";
import face from "../assets/face.jpg";
import jazzy from "../assets/jazzy.jpg";
import folder from "../assets/mac-folder.png";

function About() {
  const [activeTab, setActiveTab] = useState("michael");
  const [cardDimensions, setCardDimensions] = useState("256x256");
  const [showSmallTabs, setshowSmallTabs] = useState(true);
  const aboutCard = useRef(null);

  const changeTab = (clickedTab) => {
    if (clickedTab !== activeTab) {
      setActiveTab(clickedTab);
    }
  };

  const resizeHandler = () => {
    const width = aboutCard?.current?.clientWidth || "24";
    const height = aboutCard?.current?.clientHeight || "48";
    setCardDimensions(`${width}x${height}`);

    if (window.innerWidth <= 548 && !showSmallTabs) {
      setshowSmallTabs(true);
    }

    if (window.innerWidth > 548 && showSmallTabs) {
      setshowSmallTabs(false);
    }
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [showSmallTabs]);

  return (
    <section className="about">
      <h2>About Me</h2>

      <div className="about-container">
        <div className="image-container">
          <div
            className={`about-image michael-image " + ${
              activeTab === "michael" ? "foreground-image" : "background-image"
            }`}
            onClick={() => changeTab("michael")}
          >
            <img src={face} alt="Michael's Face" />
          </div>

          <div
            className={`about-image jazzy-image " + ${
              activeTab === "jazzy" ? "foreground-image" : "background-image"
            }`}
            onClick={() => changeTab("jazzy")}
          >
            <img src={jazzy} alt="Michael's Cat" />
          </div>
        </div>

        <div className="about-card" ref={aboutCard}>
          <div className="about-card-header">
            <div className="dot-container">
              <div className="dot dot__red">
                <div className="dot-icon">
                  <div className="close-1"></div>
                  <div className="close-2"></div>
                </div>
              </div>
              <div className="dot dot__yellow">
                <span className="dot-icon">
                  <div className="minimize-1"></div>
                </span>
              </div>
              <div className="dot dot__green">
                <span className="dot-icon">
                  <div className="maximize-1"></div>
                  <div className="maximize-2"></div>
                </span>
              </div>
            </div>

            <div className="about-card-header-label-container">
              <div className="about-card-header-label">
                <img
                  src={folder}
                  draggable="false"
                  height="24"
                  alt="Blue Folder"
                />
                <div className="about-card-header-text">
                  {!showSmallTabs ? "~/Portfolio/AboutMe - -zsh" : "~/AboutMe"}{" "}
                  - {cardDimensions}
                </div>
              </div>
            </div>
          </div>

          <div className="about-card-tabs">
            <div
              className={activeTab === "michael" ? "tab active-tab" : "tab"}
              onClick={() => changeTab("michael")}
            >
              {showSmallTabs
                ? "~/Michael"
                : "~/Portfolio/AboutMe/Michael - -zsh"}
            </div>
            <div
              className={activeTab === "jazzy" ? "tab active-tab" : "tab"}
              onClick={() => changeTab("jazzy")}
            >
              {showSmallTabs ? "~/Jazzy" : "~/Portfolio/AboutMe/Jazzy - -zsh"}
            </div>
          </div>

          <div className="about-card-content">
            <div className={activeTab === "michael" ? "" : "invisible"}>
              <h4>~ Hello World!</h4>
              {descriptions.michael.map((paragraph, i) => (
                <p key={i}>~ {paragraph}</p>
              ))}
            </div>

            <div className={activeTab === "jazzy" ? "absolute-tab" : "hidden"}>
              {descriptions.jazzy.map((paragraph, i) => (
                <p key={i}>~ {paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
