import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navBar" variant="dark">
        <Container>
          <Navbar.Brand as={HashLink} to="/home#home">
            <img
              alt=""
              src={"./logo.png"}
              width="50"
              className="d-inline-block me-2"
            />{" "}
            Easy Travels
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto d-flex justify-content-end align-items-center nav-links">
              <Nav.Link as={HashLink} to="/home#home">
                HOME
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                SERVICES
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#blogs">
                BLOGS
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#guides">
                GUIDES
              </Nav.Link>

              {/* Login Dependent */}
              {user?.email && (
                <>
                  <Nav.Link>☲</Nav.Link>
                  <Nav.Link as={HashLink} to="/myOrders">
                    MY ORDERS
                  </Nav.Link>
                  <Nav.Link as={HashLink} to="/manageOrders">
                    MANAGE ORDERS
                  </Nav.Link>
                  <Nav.Link as={HashLink} to="/ManageServices">
                    MANAGE SERVICES
                  </Nav.Link>
                  <Nav.Link>☲</Nav.Link>
                </>
              )}
              {/* --- */}

              <Nav.Link as={HashLink} to="/whyChooseUs">
                WHY US
              </Nav.Link>
              <Nav.Link as={HashLink} to="/contactUS">
                CONTACT
              </Nav.Link>

              <Navbar.Text href="" className="login-btn">
                {user?.email && (
                  <span>
                    {user?.displayName}
                    <span className="text-white">&nbsp;|&nbsp;</span>
                  </span>
                )}
                <span>
                  {user?.email ? (
                    <span onClick={logOut}>LOGOUT</span>
                  ) : (
                    <Nav.Link as={Link} to="/login" className="logout-btn">
                      LOGIN
                    </Nav.Link>
                  )}
                </span>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
