import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header style={{ padding: "1rem", backgroundColor: "#ccc" }}>
      <nav>
        <ul style={{ display: "flex", listStyleType: "none", gap: "1rem" }}>
          {location.pathname !== "/" && (
            <li>
              <Link to={"/"}>Home</Link>
            </li>
          )}
          <li>
            <Link to={"/characters"}>Characters</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
