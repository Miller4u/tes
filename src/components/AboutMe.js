import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container className="p-5">
        <Row className="m-border p-5">
          <Col md={4}>
            <span className="bg-warning fs-4 fw-bold">Education</span>
          </Col>
          <Col md={8}>
            <h4>First School Leaving Certificate</h4>
            <p>1004 Fed. Housing Estate Primary School Lagos State</p>
            <h4>Secondary School Certificate</h4>
            <p>Ojo High School Lagos</p>
            <h4>Tertiary Institution</h4>
            <p>University of Southwales London</p>
          </Col>
        </Row>
        <Row className="m-border p-5 my-3">
          <Col md={4}>
            <span className="bg-warning fs-4 fw-bold">Experience</span>
          </Col>
          <Col md={8}>
            <h4>Aptech</h4>
            <p>2020 to 2022</p>
          </Col>
        </Row>
        <Row className="m-border p-5">
          <Col md={4}>
            <span className="bg-warning fs-4 fw-bold">Skills</span>
          </Col>
          <Col md={8}>
            <h4 className="text-uppercase">HTML, css, javascript, node js, mongo db, react js, bootstrap, Tailwind css</h4>
            <p>2020 to 2022</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default About;
