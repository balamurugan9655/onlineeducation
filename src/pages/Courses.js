import React, { useState } from "react";
import { Container,Row,Col,Card,Button,Table,Pagination,Modal } from "react-bootstrap";
import { PLacement } from "./About"; 
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import starSVG from "./image/star-svgrepo-com.svg";
import FSD from "./image/Full-stack-development-img.jpg";
import DM from "./image/Digital-marketing.jpg";
import CS from "./image/Cybersecurity-img.jpg";
import BA from "./image/Business-analytics-img.jpg";
import PHP from "./image/PHP-img.jpg";
import DS from "./image/Data-science-img.jpg";
import UI from "./image/UI-UX-designer-img.jpg";
import PY from "./image/Python-img-org.jpg";

function CoursesPage1()
{
    return(
        <Container fluid className="text-center w-100 d-flex bg-scroll courses-parallex" style={{height:'400px'}}>
            <Container className="mt-auto mb-auto text-primary">
                <h1>Our Courses</h1>
                <p className="fw-bold text-light">Our courses are designed to empower learners with practical skills and deep knowledge in their chosen fields. Explore a range of expert-led programs tailored to your goals and interests.</p>
            </Container>
        </Container>
    )
}

const CourseList = [
    { id: 1, title: 'Full Stack Development', text: 'Simplilearn is a comprehensive curriculum that prepares students to flourish in the fast-paced world of full-stack development. ', image: FSD, StarNum: 9, price: '55000', Month: 6, Num : Math.floor(Math.random()*100) },
  { id: 2, title: 'Digital Marketing', text: 'Digital marketing is one of the top courses in India to pursue. This course deals with strategies for promoting products and services online.', image: DM, StarNum: Math.floor(Math.random()*10 ), price: '25000', Month: 3, Num : Math.floor(Math.random()*100) },
  { id: 3, title: 'Cybersecurity', text: 'Cybersecurity. With the increasing incidents of cyberattacks, Cybersecurity has become significantly important for all organisations.', image: CS, StarNum: Math.floor(Math.random()*10 ), price: '45000', Month: 6, Num : Math.floor(Math.random()*100) },
  { id: 4, title: 'Business Analytics', text: 'Business analytics refers to the skills, technologies, and practices for iterative exploration and investigation of past business performance to gain insight and drive business planning.', image: BA, StarNum: Math.floor(Math.random()*10 ), price: '48000', Month: 5, Num : Math.floor(Math.random()*100) },
  { id: 5, title: 'PHP', text: 'PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995.', image: PHP, StarNum: Math.floor(Math.random()*10 ), price: '15000', Month: 3, Num : Math.floor(Math.random()*100) },
  { id: 6, title: 'Data Science', text: 'Data science courses prepare candidates to compile, analyse and manipulate large amounts of data and derive valuable insights from them.', image: DS, StarNum: Math.floor(Math.random()*10 ), price: '40500', Month: 6, Num : Math.floor(Math.random()*100) },
  { id: 7, title: 'UI/UX Designer', text: 'This course covers color theory, typography, layouts, patterns, and the design process. It also includes a usability evaluation and UX intensive phase, where students learn how to conduct and analyze usability tests.', image: UI, StarNum: Math.floor(Math.random()*10 ), price: '38000', Month: 4, Num : Math.floor(Math.random()*100) },
  { id: 8, title: 'Python', text: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.', image: PY, StarNum: Math.floor(Math.random()*10 ), price: '30500', Month: 3, Num : Math.floor(Math.random()*100) },
];


const CourseCard = () =>
{
  const [show, setShow] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleShow = (course) => {
        setSelectedCourse(course);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedCourse(null);
    };

    return(
        <Container className="mt-3">
          <h1 className='text-center p-5'>Most <span className='text-primary'>popular</span> Courses </h1>
          <Row className='row-cols-2 row-cols-md-4 row-cols-lg-4'>
            {CourseList.map((card) => (
              <Col key={card.id} sm={12} md={6} lg={3} className="mb-4">
                <Card className='h-100 hb-shadow' style={{ width: '100%' }}>
                  <Card.Img variant="top" src={card.image} alt={card.title} style={{ height: '200px' ,objectFit: 'cover'}}/>
                  <Card.Body className='lh-base  d-flex flex-column'>
                    <Card.Title className='text-center'>{card.title}</Card.Title>
                    <Card.Text className='d-none d-md-block d-lg-block'>{card.text}</Card.Text>
                    <Table className='table mt-auto table-borderless'>
                      <tbody>
                        <tr>
                          <td>
                            <img src={starSVG} alt='star-img' className='m-0 p-0'/>
                            <img src={starSVG} alt='star-img' className='m-0 p-0'/>
                            <img src={starSVG} alt='star-img' className='m-0 p-0'/>
                            <img src={starSVG} alt='star-img' className='m-0 p-0'/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffea00" className="bi bi-star-half m-0 p-0" viewBox="0 0 16 16">
                              <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
                            </svg>
                          </td>
                          <td rowSpan={2}> ₹{card.price} </td>
                        </tr>
                        <tr>
                          <td> (<span className='text-warning bg-transparent'>4.{card.StarNum}</span>) </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Button variant="outline-primary" className='w-100' onClick={() => handleShow(card)}>Join Now</Button>
                  </Card.Body>
                  <Card.Footer className="m-0 p-0">
                    <Table className="table m-0 p-0 text-center table-borderless">
                        <tbody>
                          <tr>
                              <td><i className="bi bi-calendar3"></i> {card.Month} Month</td>
                              <td><i className="bi bi-people-fill"></i> {card.Num} Students</td>
                          </tr>
                        </tbody>
                    </Table>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
          {selectedCourse && (
                <Modal size="lg" show={show} onHide={handleClose} centered>
                    <Modal.Body>
                        <Row>
                            <Col md={5}>
                                <img src={selectedCourse.image} alt={selectedCourse.title} style={{ width: '100%', height: 'auto' }} className="h-100 mt-auto mb-auto"/>
                            </Col>
                            <Col md={7}>
                                <h2>{selectedCourse.title}</h2>
                                <p>{selectedCourse.text}</p>
                                <p><strong>Price:</strong> ₹{selectedCourse.price}</p>
                                <p><strong>Duration:</strong> {selectedCourse.Month} months</p>
                                <p><strong>Students Enrolled:</strong> {selectedCourse.Num}</p>
                                <p><strong>Rating:</strong> 4.{selectedCourse.StarNum} / 5</p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" as={Link} to="/register" onClick={handleClose}>Register</Button>
                        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
          )}
          <div className="d-flex justify-content-center">
            <Pagination>
                 <Pagination.First disabled/>
                 <Pagination.Item variant="outline-primary" active>{1}</Pagination.Item>
                 <Pagination.Item variant="outline-primary">{2}</Pagination.Item>
                 <Pagination.Item variant="outline-primary">{3}</Pagination.Item>
                 <Pagination.Last/>
            </Pagination>
          </div>
        </Container>
      )
}


const Courses = () => {
    return(
        <main>
            <CoursesPage1/>
            <CourseCard/>
            {/* <JoinNowModal/> */}
            <PLacement/>
        </main>
    )
}
export default Courses;