
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = ()=>{
    return <>
    <Container className="bg-gray p-5 mt-5" fluid>
        <Row>
            <Col md={4}>
            <h4 className="text-white">Miller &copy; 2022</h4>
            </Col>

            <Col md={4}>
                <div className="d-flex flex-column align-items-lg-center" >
                <h3 className="text-white"> Quick Link:</h3>
                <Link to="/about"className="text-decoration-none text-white" >About</Link>
                <Link to="/contact"className="text-decoration-none text-white"  >Contact</Link>
                <Link to="/service"className="text-decoration-none text-white"  >Service</Link>
                <Link to="/blog"className="text-decoration-none text-white"  >Blog</Link>
                </div>
            </Col>
            <Col md={4}>
                <div className="d-flex flex-column float-lg-end" >
                    <h3 className="text-white"> Follow us on:</h3>
                <Link to="/#"className="text-decoration-none text-white" >Facebook</Link>
                <Link to="/#"className="text-decoration-none text-white"  >Twitter</Link>
                <Link to="/#"className="text-decoration-none text-white"  >Instagram</Link>
                
                </div>
            </Col>
        </Row>

    </Container>
    
    </>
}

export default Footer;