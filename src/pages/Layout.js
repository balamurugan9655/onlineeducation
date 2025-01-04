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
                  <Nav.Link as={Link} to="/"  className='hover-link'> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill align-bottom mb-1 hover-icon" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                  </svg>
                  Home</Nav.Link>
                  <Nav.Link as={Link} to="/about" className='hover-link'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-vcard-fill align-bottom mb-1 me-1 hover-icon" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
                  </svg>
                  About Us</Nav.Link>
                  <Nav.Link as={Link} to="/courses" className='hover-link'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mortarboard-fill align-bottom mb-1 me-1 hover-icon" viewBox="0 0 16 16">
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                  </svg>
                  Courses</Nav.Link>
                  <Nav.Link as={Link} to="/contact" className='hover-link'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill align-bottom mb-1 me-1 hover-icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                  </svg>
                  Contact</Nav.Link>
                </Nav>
                <Button type="button" variant="primary" className='d-blok me-2'as={Link} to="/register">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square align-bottom mb-1 " viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
                Register</Button>
                <Button type="button" variant="outline-primary" className='d-blok' as={Link} to="/login">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right align-bottom mb-1 me-1" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                </svg>
                Login</Button>
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