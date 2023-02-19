import { useState, useRef, useEffect } from "react";
import face from "../assets/face.jpg";
import jazzy from "../assets/jazzy.jpg";
import folder from "../assets/mac-folder.png";

function About() {
  const [activeTab, setActiveTab] = useState("michael");
  const [cardDimensions, setCardDimensions] = useState("256x256");
  const [showSmallText, setShowSmallText] = useState(true);
  const aboutCard = useRef(null);

  const changeTab = (clickedTab) => {
    if (clickedTab === activeTab) return;
    setActiveTab(clickedTab);
  };

  const resizeHandler = () => {
    const width = aboutCard?.current?.clientWidth || "24";
    const height = aboutCard?.current?.clientHeight || "48";
    setCardDimensions(`${width}x${height}`);

    if (window.innerWidth <= 548 && !showSmallText) {
      setShowSmallText(true);
    }

    if (window.innerWidth > 548 && showSmallText) {
      setShowSmallText(false);
    }
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [showSmallText]);

  return (
    <div className="about-section">
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
            <div className="dot dot__red"></div>
            <div className="dot dot__yellow"></div>
            <div className="dot dot__green"></div>
            <div className="about-card-header-text-container">
              <div className="about-card-header-text">
                <img src={folder} height="24" alt="Blue Folder" />
                <div
                  style={{
                    height: "22px",
                    paddingLeft: "4px",
                    paddingTop: "3px",
                  }}
                >
                  {!showSmallText ? "~/Portfolio/AboutMe - -zsh" : "~/AboutMe"}{" "}
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
              {showSmallText
                ? "~/Michael"
                : "~/Portfolio/AboutMe/Michael - -zsh"}
            </div>
            <div
              className={activeTab === "jazzy" ? "tab active-tab" : "tab"}
              onClick={() => changeTab("jazzy")}
            >
              {showSmallText ? "~/Jazzy" : "~/Portfolio/AboutMe/Jazzy - -zsh"}
            </div>
          </div>
          <div className="about-card-content">
            <div
              className={activeTab === "jazzy" ? "" : "hidden"}
              style={{ visibility: "hidden" }}
            >
              <h4>~ Hello World!</h4>
              <p>
                ~ I’m a software engineer passionate about building
                applications, while balancing time and effort with getting the
                most effective results. I take a mindful approach to software
                development; first identifying the core goals and business
                objectives, then finding the best fitting system architecture
                and programming frameworks to achieve those goals, and finally
                mastering the relevant technical skills required to deliver a
                high quality product.
              </p>
              <p>
                ~ I either have practical experience or a comprehensive
                understanding of most modern tech-stacks, giving me a great
                perspective to implement reliable solutions and make intuitive
                decisions that leverage the best tools available today. I
                believe this comes from a genuine curiosity and desire to build
                interesting things.
              </p>
            </div>
            <div className={activeTab === "michael" ? "" : "hidden"}>
              <h4>~ Hello World!</h4>
              <p>
                ~ I’m a software engineer passionate about building
                applications, while balancing time and effort with getting the
                most effective results. I take a mindful approach to software
                development; first identifying the core goals and business
                objectives, then finding the best fitting system architecture
                and programming frameworks to achieve those goals, and finally
                mastering the relevant technical skills required to deliver a
                high quality product.
              </p>
              <p>
                ~ I either have practical experience or a comprehensive
                understanding of most modern tech-stacks, giving me a great
                perspective to implement reliable solutions and make intuitive
                decisions that leverage the best tools available today. I
                believe this comes from a genuine curiosity and desire to build
                interesting things.
              </p>
            </div>
            <div className={activeTab === "jazzy" ? "absolute-tab" : "hidden"}>
              <p>
                ~ In 2018 I adopted a beautiful Maine Coon cat named Jazzy. I
                love the name, and also think it's a great adjective to describe
                my personality; strategically pushing the boundaries of what is
                deemed ’normal’ and constantly challenging my beliefs.
              </p>
              <p>
                ~ I also enjoy playing improv guitar with odd rhythms and
                complex chords, a common characteristic of Jazz music. All of
                this being said; in addition to adopting the cat, I also adopted
                the online alias “JazzyMichael.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
