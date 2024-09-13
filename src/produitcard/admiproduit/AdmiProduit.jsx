import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";

const AdmiProduit = ({ el, del }) => {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          margin: "40px",
          marginInlineStart: "20px",
        }}
      >
        <Carousel indicators={false}>
          {el.imgURL.map((el) => (
            <Carousel.Item key={el.id}>
              <img
                src={el.URL}
                alt={el.id}
                style={{ width: "18rem", height: "280px" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text style={{ color: "red", textDecoration: "line-through" }}>
            Price:{el.price}$
          </Card.Text>
          <Card.Text> Discount:{el.discount}% </Card.Text>
          <Card.Text style={{ color: "green" }}>
            {` Price: ${el.price - (el.price * el.discount) / 100}$`}
          </Card.Text>

          <Button variant="primary">Edit</Button>
          <Button variant="danger" onClick={() => del(el.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdmiProduit;
