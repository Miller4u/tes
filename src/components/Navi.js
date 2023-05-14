import { Link, Outlet } from "react-router-dom";

export default function Navi() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-gray navbar-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand text-white fw-bold">
            Miller
          </Link>
          <button
            types="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/service" className="nav-link text-white">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-white">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
