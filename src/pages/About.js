import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Card } from "react-bootstrap";

import { FeedBack } from "./Home";

import MissionPNG from "./image/about-mission-img1.png";
import VisionPNG from "./image/about-Vision-png.png";
import HistoryPNG from "./image/about-History-png.png";

function Apage1()
{
    return(
        <Container fluid className="text-center w-100 d-flex bg-scroll about-parallex" style={{height:'400px'}}>
            <Container className="mt-auto mb-auto text-primary">
                <h1>About</h1>
                <p className="fw-bold text-light bg-dark bg-opacity-25">Online education provides flexible learning opportunities, enabling students to access courses and resources from anywhere. It empowers learners with self-paced options, bridging gaps in traditional education systems.</p>
            </Container>
        </Container>
    )
}

function PLacement()
{
    return(
        <Container fluid className="p-5 d-none d-md-block d-lg-block">
            <h1 className="text-center p-3">Our <span className="text-primary">Learners</span> Work at</h1>
            <Row className="row row-cols-5 text-center ">
                <Col className="border Abg-img Abg-img1">
                    <h3 className="p-4 text-center">Full Stack Development</h3>
                </Col>
                <Col className="border Abg-img Abg-img2">
                    <h3 className="p-4 text-center">Cybersecurity</h3>
                </Col>
                <Col className="border Abg-img Abg-img3">
                    <h3 className="p-4 text-center">UI/UX Designer</h3>
                </Col>
                <Col className="border Abg-img Abg-img4">
                    <h3 className="p-4 text-center">Business Analytics</h3>
                </Col>
                <Col className="border Abg-img Abg-img5">
                    <h3 className="p-4 text-center">Data Science</h3>
                </Col>
            </Row>
        </Container>
    )
}
export {PLacement};

const Mission = () =>
{
    return(
        <Container className="p-3 mb-3">
            <h1 className='text-center p-4'>Our <span className="text-primary">Goals</span></h1>
            <Row className='row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4'>
                <Col>
                    <Card className='ms-auto me-auto p-3 border' style={{ width: '25rem' }}>
                      <Card.Img variant="top" src={MissionPNG} className="ms-auto me-auto" style={{ width: '25%'}}/>
                      <Card.Body>
                        <Card.Title className="text-center">Mission</Card.Title>
                        <Card.Text>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eligendi expedita, provident cupiditate in excepturi.
                        </Card.Text>
                      </Card.Body>
                    </Card> 
                </Col>
                <Col>
                    <Card className='ms-auto me-auto p-3 border' style={{ width: '25rem' }}>
                      <Card.Img variant="top" src={VisionPNG} className="ms-auto me-auto" style={{ width: '25%'}}/>
                      <Card.Body>
                        <Card.Title className="text-center">Vision</Card.Title>
                        <Card.Text>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eligendi expedita, provident cupiditate in excepturi.
                        </Card.Text>
                      </Card.Body>
                    </Card> 
                </Col>
                <Col>
                    <Card className='ms-auto me-auto p-3 border' style={{ width: '25rem' }}>
                      <Card.Img variant="top" src={HistoryPNG} className="ms-auto me-auto" style={{ width: '25%'}}/>
                      <Card.Body>
                        <Card.Title className="text-center">History</Card.Title>
                        <Card.Text>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eligendi expedita, provident cupiditate in excepturi.
                        </Card.Text>
                      </Card.Body>
                    </Card> 
                </Col>
            </Row>
        </Container>
    )
}
export {Mission};

const About = () => {
    return(
        <main>
            <Apage1/>
            <PLacement/>
            <Mission/>
            <FeedBack/>
        </main>
    )
}
export default About;