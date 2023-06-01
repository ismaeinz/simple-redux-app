import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clear } from "../rtk/slices/CartSlice";

function AppNavbar() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Products
            </Link>
            <Link to="/cart" className="nav-link">
              Cart {cart.length}
            </Link>
          </Nav>
          <Button variant="danger" onClick={() => dispatch(clear())}>
            clear Cart
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
