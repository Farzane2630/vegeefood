import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./_Navbar.scss";
import { Link, useParams } from "react-router-dom";

export default function NavBar() {

  const productName = useParams()
  return (
    <Navbar expand="lg" className="nav-main">
      <Container className="nav-container">
        <Navbar.Brand href="#home" className="logo">
          VEGEFOODS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-ul">
            <Nav.Link href="/" className="nav-item">
              Home
            </Nav.Link>
            <NavDropdown
              className="nav-item"
              title="Shop"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#/products/1" className="nav-item">
                Shop
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className="nav-item">
              <Link to="wishlist" className="link">
                Wishlist
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className="nav-item">
              <Link to={`Product-info/${productName}`} className="link">
                Single Product
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className="nav-item">
              <Link to="cart" className="link">
                Cart
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className="nav-item">
              <Link to="checkout" className="link">
                Checkout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="" className="nav-item">
            <Link to="about" className="link">
              About
              </Link>
            </Nav.Link>
            <Nav.Link href="" className="nav-item">
            <Link to="blog" className="link">
              Blog
              </Link>
            </Nav.Link>
            <Nav.Link href="" className="nav-item">
            <Link to="contact" className="link">
              Contact
              </Link>
            </Nav.Link>
            <Nav.Link href="" className="nav-item cart-elem">
              <Link to="cart" className="link">
                <ShoppingCartIcon />
                <span className="orders-count">[0]</span>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
