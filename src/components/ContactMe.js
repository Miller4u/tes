import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";

const ContactMe = () => {
  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="border-0 shadow p-2 rounded-3">
              <Card.Body>
                <h3 className="text-center">Message Me</h3>
                <Form>
                  <Form.Group>
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control type="text" placeholder="Fullname" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Message" />
                  </Form.Group>
                  <Button className="my-3">Send</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ContactMe;
