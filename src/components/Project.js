import { Col, Row, Button } from "react-bootstrap";
const Project = (props) => {
  return (
    <Row className="mt-5">
      <Col md={8}>
        <img src={props.img} alt="project-img" className="img-fluid rounded-3" />
      </Col>
      <Col md={4} className="align-self-center" >
        <h1 className="fw-bold">{props.projectTitle}</h1>
        <p className="small">{props.projectIntro}</p>
        <Button size="lg" variant="dark"className="rounded-0n">View case Student</Button>
      </Col>
    </Row>
  );
};
export default Project;
