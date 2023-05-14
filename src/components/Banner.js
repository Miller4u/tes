import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = (props) => {
  return (
    <>
      <Container className="p-5 bg-img" fluid>
        <h1 className="text-center p-5 fw-bold">{props.title}</h1>
        <Breadcrumb>
          <Breadcrumb.Item active>
            <Link to="/" className="text-decoration-none text-muted">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="text-white">
            {props.title}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </>
  );
};

export default Banner;
