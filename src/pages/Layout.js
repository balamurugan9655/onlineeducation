import React from 'react';
import { useState,useEffect } from 'react';
import { Outlet,Link,useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container,Button,Row,Col } from 'react-bootstrap';

function ProgressBar({ progress }) {
  return (
    <div
      style={{
        width: `${progress}%`,
        height: "5px",
        backgroundColor: "blue",
        position: "fixed",
        top: 0,
        left: 0,
        transition: "width 0.3s ease-in-out",
        zIndex: 1000,
        display: progress >= 120 ? "none" : "block",
      }}
    ></div>
  );
}

const Layout = () => {

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [renderPage, setRenderPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // Show progress bar
    setRenderPage(false); // Delay page rendering
    setProgress(0); // Reset progress bar

    let value = 0;
    const interval = setInterval(() => {
      value += 10;
      setProgress(value);
      if (value >= 120) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false); // Hide progress bar
          setRenderPage(true); // Allow page rendering
        }, 200); // Slight delay to make the progress bar visible at 100%
      }
    }, 200); // Adjust speed here

    return () => clearInterval(interval); // Cleanup
  }, [location]);

    return(
        <>
          <Navbar bg="white" expand="lg" className="position-fixed z-1 w-100">
            <Container >
              <Navbar.Brand as={Link} to="/" className='fw-bold'> <span className="text-primary">O</span>nline <span className="text-primary">E</span>ducation</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/" >Home</Nav.Link>
                  <Nav.Link as={Link} to="/about" >About Us</Nav.Link>
                  <Nav.Link as={Link} to="/courses" >Courses</Nav.Link>
                  <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                </Nav>
                <Button type="button" variant="primary" className='d-blok me-2'as={Link} to="/register">Register</Button>
                <Button type="button" variant="outline-primary" className='d-blok' as={Link} to="/login">Login</Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container fluid className='pt-5'>
            {loading && <ProgressBar progress={progress} />}
            {renderPage && <Outlet />} {/* Render page only after progress bar completes */}
          </Container>
          <Container fluid className='mt-3'>
            <footer className="bg-dark text-white py-4">
              <Container>
                <Row>
                  <Col md={4}>
                    <h5>Online Education</h5>
                    <p>The automated process starts as soon as your clothes go into the machine.</p>
                  </Col>
                  <Col md={4}>
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled ms-md-3">
                      <li>
                        <Link to="/" className='text-decoration-none'>Home</Link>
                      </li>
                      <li>
                        <Link to="/about" className='text-decoration-none'>About</Link>
                      </li>
                      <li>
                        <Link to="/courses" className='text-decoration-none'>Course</Link>
                      </li>
                      <li>
                        <Link to="/contact" className='text-decoration-none'>Contact</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={4}>
                    <h5>Contact Us</h5>
                    <p><b>Email : </b> onlineeducation@gmail.com</p>
                    <p><b>Phone : </b> +123 456 7890</p>
                    <div className='d-flex justify-contant-center align-items-center'>
                      <p className='me-3'><i className="bi bi-facebook"></i> <Link className='text-decoration-none text-white'>Facebook</Link></p>
                      <p className='me-3'><i className="bi bi-twitter"></i> <Link className='text-decoration-none text-white'>Twitter</Link></p>
                      <p className='me-3'><i className="bi bi-whatsapp"></i> <Link className='text-decoration-none text-white'>Whatsapp</Link></p>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col className="text-center">
                    <p className="mb-0">&copy; 2024 Online Education. All rights reserved.</p>
                  </Col>
                </Row>
              </Container>
            </footer>
          </Container>
        </>

    )
}
export default Layout;