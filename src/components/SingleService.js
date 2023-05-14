import { Card, Col } from "react-bootstrap";

const SingleService = (props) =>{
    return(
        <>
        <Col className="my-lg-5 my-2" md={4}>
            <Card className="shadow">
                <Card.Body className="text-center">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text className="text-muted">{props.text}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        </>
    )
}
export default SingleService;