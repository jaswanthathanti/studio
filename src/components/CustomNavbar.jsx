import { Navbar, Nav, Container, Button } from "react-bootstrap";

const sections = ["home", "about", "services" /* "myworks"*/, , "contact"];

export default function CustomNavbar({
  darkMode,
  toggleDarkMode,
  activeSection,
}) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      fixed="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="fw-bold d-flex align-items-center"
        >
          <img
            src="src\assets\img\logo.png"
            alt="AbiStudio Logo"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          Abistudio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {sections.map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                className={
                  activeSection === section ? "fw-bold text-primary" : undefined
                }
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <Button
            variant={darkMode ? "outline-light" : "outline-dark"}
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
