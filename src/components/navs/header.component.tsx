const Header = () => {
  return (
    <header
      id="header"
      className="header">
      <div className="container-fluid">
        <div className="brand">
          <a
            href="#About"
            className="brand-name">
            <b>it's</b> Me
          </a>
        </div>
        <div className="lets-chat">
          <span>Let's Chat</span>
          <button>
            <i
              className="fab fa-rocketchat"
              style={{ color: "#1D2043" }}
            />
          </button>
        </div>
        <button className="nav-toggle-btn a-nav-toggle">
          <span className="hamburger">
            <span className="top-bun" />
            <span className="meat" />
            <span className="bottom-bun" />
          </span>
        </button>
        <div className="hide-menu a-nav-toggle" />
        <div className="menu">
          <div className="menu-lang">
            <a
              href="#"
              className="menu-lang-item active">
              Eng.
            </a>
            <a
              href="#"
              className="menu-lang-item">
              Fra.
            </a>
            <a
              href="#"
              className="menu-lang-item">
              Ara.
            </a>
          </div>
          <div
            className="menu-main mt-100"
            id="accordion">
            <ul id="menuMain">
              <li
                data-menuanchor="About"
                className="active">
                <a href="#About">About</a>
              </li>
              <li data-menuanchor="Services">
                <a href="#Services">Services</a>
              </li>
              <li data-menuanchor="Skills">
                <a href="#Skills">Skills</a>
              </li>
              <li data-menuanchor="Resume">
                <a href="#Resume">Resume</a>
              </li>
              <li data-menuanchor="Portfolio">
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li data-menuanchor="Testimonials">
                <a href="#Testimonials">Testimonials</a>
              </li>
              <li data-menuanchor="Weapons">
                <a href="#Weapons">Weapons</a>
              </li>
              <li data-menuanchor="Contact">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="menu-ornament" />
        </div>
      </div>
    </header>
  );
};

export default Header;
