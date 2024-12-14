import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


const RegisterPage = () =>
{
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        gender: '',
        course: '',
        street: '',
        city: '',
        state: '',
        postalCode: '',
        agreeToTerms: false,
      });
    
      const handleDateOfBirthChange = (e) => {
        let value = e.target.value.replace(/[^\d]/g, ''); // Remove non-numeric characters
    
        if (value.length > 8) {
          value = value.slice(0, 8); // Limit to 8 digits
        }
    
        const day = value.slice(0, 2);
        const month = value.slice(2, 4);
        const year = value.slice(4);
    
        let isValidDay = parseInt(day, 10) >= 1 && parseInt(day, 10) <= 31;
        let isValidMonth = parseInt(month, 10) >= 1 && parseInt(month, 10) <= 12;
        let isValidYear = year.length === 4 && parseInt(year, 10) >= 1 && parseInt(year, 10) <= 9999;
    
        let formattedDate = value;
    
        if (value.length >= 5) {
          if (isValidDay && isValidMonth && (year === '' || isValidYear)) {
            formattedDate = `${day}/${month}/${year}`;
          }
        } else if (value.length >= 3) {
          if (isValidDay && isValidMonth) {
            formattedDate = `${day}/${month}`;
          }
        }
    
        setFormData({
          ...formData,
          dateOfBirth: formattedDate,
        });
      };
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'dateOfBirth') {
          handleDateOfBirthChange(e);
        } else {
          setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
          });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Registration successful!');
      };
    
      return (
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={6}>
              <h2 className="text-center mb-4">Online Education Registration</h2>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formFirstName" className="mb-3">
                      <Form.Label>First Name : </Form.Label>
                      <Form.Control type="text" name="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} required/>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formLastName" className="mb-3">
                      <Form.Label>Last Name : </Form.Label>
                      <Form.Control type="text" name="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} required/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formEmail" className="mb-3">
                      <Form.Label>Email : </Form.Label>
                      <Form.Control type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required/>
                    </Form.Group> 
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formPhone" className="mb-3">
                      <Form.Label>Phone Number : </Form.Label>
                      <Form.Control type="number" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formDateOfBirth" className="mb-3">
                      <Form.Label>Date of Birth : </Form.Label>
                      <Form.Control type="text" name="dateOfBirth" placeholder="DD/MM/YYYY" value={formData.dateOfBirth} onChange={handleChange} required/>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formGender" className="mb-3">
                      <Form.Label>Gender : </Form.Label>
                      <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="course" className="mt-3">
                  <Form.Label>Select Course</Form.Label>
                    <Form.Control as="select" name="course" value={formData.course} onChange={handleChange} required>
                      <option value="">Choose a course</option>
                      <option value="Full Stack Development">Full Stack Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Business Analytics">Business Analytics</option>
                      <option value="PHP">PHP</option>
                      <option value="Data Science">Data Science</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="Python">Python</option>
                    </Form.Control>
                </Form.Group>
                <>
                 <h6 className="mt-4">Address Details : </h6>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="street">
                          <Form.Label>Street Address</Form.Label>
                          <Form.Control type="text" placeholder="Enter your street address" name="street" value={formData.street} onChange={handleChange} required/>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="city">
                          <Form.Label>City</Form.Label>
                          <Form.Control type="text" placeholder="Enter your city" name="city" value={formData.city} onChange={handleChange} required/>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="state">
                          <Form.Label>State</Form.Label>
                          <Form.Control type="text" placeholder="Enter your state" name="state" value={formData.state} onChange={handleChange} required/>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="postalCode">
                          <Form.Label>Postal Code</Form.Label>
                          <Form.Control type="text" placeholder="Enter your postal code" name="postalCode" value={formData.postalCode} onChange={handleChange} required/>
                        </Form.Group>
                      </Col>
                    </Row>
                </>
                <br/>
                <Form.Group controlId="formTerms" className="mb-3">
                  <Form.Check type="checkbox" name="agreeToTerms" label="I agree to the terms and conditions" checked={formData.agreeToTerms} onChange={handleChange} required/>
                </Form.Group>
    
                <Button variant="primary" type="submit" className="w-100" disabled={!formData.agreeToTerms}>
                  Register
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      );
}

const Register = () =>
{
    return(
        <main>
            <RegisterPage/>
        </main>
    )
}
export default Register;