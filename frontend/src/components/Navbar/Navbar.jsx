import "./Navbar.css";

function Navbar() {
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact Me", id: "contact" },
  ];

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <button
          className="navbar-logo"
          onClick={() => handleNavigation("home")}
          aria-label="Go to home"
        >
          <span className="logo-green">R</span>
          <span className="logo-cyan">N</span>
          <span className="logo-pink">P</span>
        </button>

        {/* Navigation */}
        <nav className="navbar-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="navbar-link"
              onClick={() => handleNavigation(item.id)}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Navbar;