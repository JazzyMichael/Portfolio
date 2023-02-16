import face from "../assets/face.jpg";

function About() {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={face} alt="Michael's Face" />
        </div>
        <div className="about-card">
          <div className="about-card-header">
            <div className="dot dot__red"></div>
            <div className="dot dot__yellow"></div>
            <div className="dot dot__green"></div>
          </div>
          <div className="about-card-content">
            <h4>Hello World!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {/* <p>
              After working as an software consultant at several big tech
              companies, I'm seeking to get back into the startup space.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
