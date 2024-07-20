import React, { useState } from "react";
import "./nav.css";
import omkarLogo from "../Assets/omkar-nature.jpeg";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navebarrr() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => setExpanded(false);

  return (
    <>
      <>
        <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
          <Container>
            <Navbar.Brand href="#home">
              <a href="index.html" className="navbar-brand">
                <img src={omkarLogo} alt="logo" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            />
            <Navbar.Collapse id="basic-navbar-nav " className="heeyy">
              <Nav  onClick={handleNavClose}>
                <Nav.Link href="#link" className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active linkLine"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link href="#home" className="nav-item">
                  <Link
                    to="/family-farmhouse-wada"
                    className="nav-link linkLine"
                    href="about.html"
                  >
                    about Us
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link" className="nav-item">
                  <Link to="/activitypage" className="nav-link linkLine">
                    Activities
                  </Link>
                </Nav.Link>
                <Nav.Link href="#home" className="nav-item">
                  <Link to="/eventpage" className="nav-link linkLine">
                    Event
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link" className="nav-item">
                  <Link to="/farmhouse-private-pool" className="nav-link linkLine">
                    Accommodation
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link" className="nav-item">
                  <Link to="/private-farmhouse-wada" className="nav-link linkLine">
                    Gallery
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link" className="nav-item">
                  <Link to="/farmhouse-near-wada" className="nav-link">
                    Contact Us
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </>
  );
}

export default Navebarrr;
