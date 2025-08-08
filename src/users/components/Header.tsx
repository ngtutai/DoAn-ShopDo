import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div className="bg-dark">
        <i>
          <span className="text-white ms-3" style={{ fontSize: "12px" }}>
            <i className="fa-solid fa-phone-volume text-white"></i>
            hotline : 1900 8060
          </span>
        </i>
      </div>

      <header
        className={`header-area header-area2 welcome-bg sticky-top ${
          isHome ? "home" : ""
        }`}
      >
        <nav className="navbar navbar-expand-lg navbar-primary">
          <div className="container fw-bold">
            <a className="col-2" href="/">
              <img src="/assets/imgs/logo/icon-web.png" alt="Logo" />
            </a>

            {/* Mobile menu button */}
            <button
              className="btn btn-info d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
            >
              <i className="fa fa-bars"></i>
            </button>

            {/* Offcanvas menu */}
            <div
              className="offcanvas offcanvas-start bg-secondary text-start"
              tabIndex={-1}
              id="mobileMenu"
              aria-labelledby="mobileMenuLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title text-white fs-1 ms-5 mt-2"
                  id="mobileMenuLabel"
                >
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close fs-4"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                      <h4>Home</h4>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/product" className="nav-link">
                      <h4>Product</h4>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">
                      <h4>Contact</h4>
                    </NavLink>
                  </li>
                </ul>

                <ul className="navbar-nav mb-3 mb-lg-0 mt-1">
                  <li className="nav-item me-0">
                    <NavLink
                      to="/cart"
                      className="nav-link fs-4 position-relative"
                    >
                      <i className="fa-solid fa-cart-shopping text-dark me-1"></i>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/favourite" className="nav-link fs-4">
                      <i className="fa-solid fa-heart text-dark"></i>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link  fs-4">
                      <i className="fa-solid fa-user text-dark"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
