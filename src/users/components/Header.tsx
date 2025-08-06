import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header-area header-area2 bg-primary bg-opacity-25 p-0 sticky-top">
      <nav className="navbar navbar-expand-lg navbar-primary">
        <div className="container fw-bold">
          <a className="col-2" href="/">
            <img src="/assets/images/iconlogo/icon-web.png" alt="Logo" />
          </a>

          {/* Mobile menu button */}
          <button
            className="btn btn-outline-secondary d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <i className="fa fa-bars"></i>
          </button>

          {/* Offcanvas menu */}
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="mobileMenu"
            aria-labelledby="mobileMenuLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="mobileMenuLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-1">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/product" className="nav-link">
                    Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
              </ul>

              <ul className="navbar-nav mb-3 mb-lg-0 mt-1">
                <li className="nav-item me-1">
                  <NavLink to="/cart" className="nav-link position-relative">
                    <i className="fa-solid fa-cart-shopping me-1"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    <i className="fa-solid fa-user"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
