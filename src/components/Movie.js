import { Button, Card, Col } from "react-bootstrap";
import { useState } from "react";

const Rating = (num) => {
  var s = "";
  for (let i = 0; i < num; i++) {
    s += "★";
  }

  return s;
};
const Movies = ({ id, title, rating, img }) => {
  const [watch, setWatch] = useState(false);
  return (
    <Col md={3} key={id} className="my-3">
      <Card className="border-0 shadow rounded-0" style={{ height: 330 }}>
        <Card.Body>
          <Card.Img src={img} alte={title} style={{ height: 200 }}></Card.Img>
          <p className="d-none">{id}</p>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="small text-warning">
            <span className="text-danger fw-bold">Rating </span>{" "}
            {Rating(rating)}
          </Card.Text>
          <Button
            size="sm"
            onClick={() => {
              setWatch(!watch);
            }}>
            {" "}
            {watch ? "already watched?" : " watched "}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Movies;
