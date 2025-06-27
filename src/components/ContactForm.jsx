import { Form, Button } from "react-bootstrap";

export default function ContactForm({ darkMode }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Your message..." />
      </Form.Group>

      <Button variant={darkMode ? "light" : "dark"} type="submit">
        Send Message
      </Button>
    </Form>
  );
}
