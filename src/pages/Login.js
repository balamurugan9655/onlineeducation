import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Tab, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AuthPage = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [signupData, setSignupData] = useState({
      name: "", 
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
    });
  
    const handleLoginChange = (e) => {
      const { name, value } = e.target;
      setLoginData({ ...loginData, [name]: value });
    };
  
    const handleSignupChange = (e) => {
      const { name, value } = e.target;
      setSignupData({ ...signupData, [name]: value });
    };
  
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      console.log("Login Data: ", loginData);
    };
  
    const handleSignupSubmit = (e) => {
      e.preventDefault();
      if (signupData.password !== signupData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Signup Data: ", signupData);
    };
  
    return (
      <Container fluid className="p-5">
        <Row className="justify-content-center ms-auto me-auto">
          <Col sm={12} md={6} lg={6} className="border p-5">
            <Tab.Container defaultActiveKey="login">
              <Nav variant="tabs" className="justify-content-center mb-4">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Signup</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="login">
                  <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3" controlId="loginEmail">
                      <Form.Label>Username : </Form.Label>
                      <Form.Control type="email" name="email" value={loginData.email} onChange={handleLoginChange} placeholder="example123@gmail.com"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="loginPassword">
                      <Form.Label>Password : </Form.Label>
                      <Form.Control type="password" name="password" value={loginData.password} onChange={handleLoginChange} placeholder="********"/>
                    </Form.Group> 
                    <Button variant="outline-primary" type="submit">
                      Login
                    </Button>
                  </Form>
                </Tab.Pane>
  
                <Tab.Pane eventKey="signup">
                  <Form onSubmit={handleSignupSubmit}>
                    <Form.Group className="mb-3" controlId="userName">
                      <Form.Label>Name : </Form.Label>
                      <Form.Control type="text" name="name" value={signupData.name} onChange={handleSignupChange} placeholder="Enter Your Name"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signupEmail">
                      <Form.Label>Email ID : </Form.Label>
                      <Form.Control type="email" name="email" value={signupData.email} onChange={handleSignupChange} placeholder="Enter Your Email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phoneNumber">
                      <Form.Label>Phone Number : </Form.Label>
                      <Form.Control type="number" name="number" value={signupData.number} onChange={handleSignupChange} placeholder="Enter Your Phone Number"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signupPassword">
                      <Form.Label>Create Password : </Form.Label>
                      <Form.Control type="password" name="password" value={signupData.password} onChange={handleSignupChange} placeholder="Create Password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="signupConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" name="confirmPassword" value={signupData.confirmPassword} onChange={handleSignupChange} placeholder="Confirm Password"/>
                    </Form.Group>
                    <Button variant="outline-primary" type="submit">
                      Signup
                    </Button>
                  </Form>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    );
  };

const Login = () =>
    {
        return(
            <main>
                <AuthPage/>
            </main>
        )
    }
    export default Login;