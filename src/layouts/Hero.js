import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import miller from "../images/miller1.png"

const Hero = () =>{

    return (
        <>
        <Container fluid className="bg-curve">
            <Row className="p-5 mt-5"> 
                <Col md={6}>
                    <h1 className="display-1 fw-bolder">Hello,<br/> I am <span>Miller Lexa</span> </h1>
                    <h3>Frontend Developer</h3>
                    <Button className="rounded-0 bg-lime mt-5">Download Cv</Button>
                </Col>
                <Col md={6}>
                    <img src={miller} alte = "Miller" className="rounded-circle w-50 d-none d-sm-block float-end"/>
                
                </Col>
            </Row>

        </Container>
        </>
    )
}
export default Hero;