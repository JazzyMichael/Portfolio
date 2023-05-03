import ComputerIcon from "../assets/computer-icon.svg";

function Header() {
  return (
    <header>
      <img src={ComputerIcon} height="120" width="120" alt="Computer Icon" />
      <h1>Michael Mancini</h1>
      <h3>Full-Stack Engineer</h3>
    </header>
  );
}

export default Header;
