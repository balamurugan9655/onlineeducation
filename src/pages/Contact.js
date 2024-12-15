import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Form,Button } from "react-bootstrap";

function ContactPage1()
{
    return(
        <Container fluid className="text-center w-100 d-flex bg-scroll contact-parallex" style={{height:'400px'}}>
            <Container className="mt-auto mb-auto text-primary">
                <h1>Contact</h1>
                <p className="fw-bold text-light bg-dark bg-opacity-25">Let us give you more details about the special offer website you want us. Please fill out the form below.
                We have million of website owners who happy to work with us!</p>
            </Container>
        </Container>
    )
}

function SendMessage()
{
    return(
        <Container fluid className="p-0 p-md-5 p-lg-5">        
            <h1 className="text-center p-3">Get in <span className="text-primary">Touch</span></h1>
            <Container>
            <Row className="row row-cols-1 row-cols-md-2 d-flex justify-contant-center row-cols-lg-2">
                <Col className="border mb-2">
                    <Form className="bg-dark p-5 text-white rounder">
                        <Form.Group className="mb-3">
                            <Form.Label>Name : </Form.Label>
                            <Form.Control type="text" placeholder="Enter The Name" required className="w-100"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email : </Form.Label>
                            <Form.Control type="email" placeholder="example123@gmail.com" required className="w-100"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number : </Form.Label>
                            <Form.Control type="number" placeholder="9876543210" required className="w-100"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Send Message  </Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Send Feedback" required className="w-100"/>
                        </Form.Group>
                        <Button variant="outline-primary" type="submit">Send Message</Button>
                    </Form>
                </Col>
                <Col className="border mb-2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.566269589264!2d78.16096537378138!3d11.219692250863764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcfb5accea083%3A0x1b04eea5333f5daa!2sSDLC%20NAMAKKAL(Skill%20Development%20Learning%20Centre)!5e0!3m2!1sen!2sin!4v1734005306588!5m2!1sen!2sin" width="600" height="550" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Map">
                </iframe>
                </Col>
            </Row>
            </Container>
        </Container>
    )
}

const Contact = () => {
    return(
        <main>
            <ContactPage1/>
            <SendMessage/>
        </main>
    )
}
export default Contact;
