import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav id="nav">
      <ul>
        <Link to="/intro">
          <li>
            <i className={"fas fa-info"} />
            <p>Inleiding</p>
          </li>
        </Link>
        <Link to="/clues">
          <li>
            <i className={"fas fa-search"}></i>
            <p>Aanwijzingen</p>
          </li>
        </Link>
        <Link to="/cluedo">
          <li>
            <i className={"fas fa-user-secret"}></i>
            <p>Cluedo</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
