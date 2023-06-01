import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../rtk/slices/CartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // get Total Price
  const totalPrice = cart.reduce((acc, product) => {
    return (acc = acc + product.price * product.quantity);
  }, 0);

  return (
    <Container>
      <Row>
        <h5> total Price is : {totalPrice}</h5>
        {cart.map((product) => {
          return (
            <Col key={product.id}>
              <Card style={{ width: "15rem", fontSize: "10px" }}>
                <Card.Img
                  className="m-auto mt-2"
                  variant="top"
                  src={product.image}
                  style={{ width: "5rem", height: "5rem" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Title> price is :{product.price}</Card.Title>
                  <Card.Title> quantity is :{product.quantity}</Card.Title>

                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    remove from cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Cart;
