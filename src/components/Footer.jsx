import { Container } from "react-bootstrap";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`py-3 mt-5 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      } border-top`}
    >
      <Container className="text-center">
        <small>
          &copy; {new Date().getFullYear()} AbiStudio. All rights reserved.
        </small>
      </Container>
    </footer>
  );
}
