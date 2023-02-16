import ComputerIcon from "../assets/computer-icon.svg";

function Heading() {
  return (
    <div className="heading">
      <img src={ComputerIcon} height="120" width="120" alt="Computer Icon" />
      <h1>Michael Mancini</h1>
      <h3>Frontend Engineer</h3>
    </div>
  );
}

export default Heading;
