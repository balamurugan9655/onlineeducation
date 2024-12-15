import React from 'react';
import { Carousel,Container,Row,Col,Card,Button,Table } from 'react-bootstrap';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import SlideImg1 from "./image/slide-img-1.jpg";
import SlideImg2 from "./image/slide-img-2.jpg";
import SlideImg3 from "./image/slide-img-3-org.jpg";
import HP1img from "./image/learning-img-1-org.png";
import RegisterSVG from "./image/Register.svg";
import CoursesSelectSVG from "./image/Coures-Select.svg";
import LearningSVG from "./image/Online-Learning.svg";
import starSVG from "./image/star-svgrepo-com.svg";
import FSD from "./image/Full-stack-development-img.jpg";
import DM from "./image/Digital-marketing.jpg";
import CS from "./image/Cybersecurity-img.jpg";
import BA from "./image/Business-analytics-img.jpg";
import PHP from "./image/PHP-img.jpg";
import DS from "./image/Data-science-img.jpg";
import UI from "./image/UI-UX-designer-img.jpg";
import PY from "./image/Python-img-org.jpg";
import Person1 from "./image/people-img-1.png";
import Person2 from "./image/people-img-5.jpg";
import Person3 from "./image/people-img-2.png";
import Person4 from "./image/people-img-4.jpg";
import Person5 from "./image/people-img-3.png";
import { Mission, PLacement } from './About';

const HomeCarousel = () => {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={SlideImg1}
            alt="First slide"
          />
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={SlideImg2}
            alt="Second slide"
          />        
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={SlideImg3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  };

const HomePage1 = () => {
    return(
    <Container className="p-3">
      <Row className="align-items-center">
        <Col md={8} className="text-left text-center p-5">
          <h1>Take Your <span className="text-primary">Learning</span> </h1>
          <h1>To The Next Level</h1>
          <br/>
          <h5 className='text-body-secondary'>Boost Your Skills Through Online Education Platform For Digital Skills</h5>
          <br/>
          <Button type='button' variant='outline-primary' as={Link} to="/register">Get Started</Button>
        </Col>

        <Col md={4} className="text-center">
          <img
            src={HP1img}
            alt="Placeholder"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
    )
}

const Homepage2 = () => {
    return(
       <Container fluid>
          <Container>
            <h1 className='text-center p-3'>How To <span className="text-primary">Work</span></h1>
            <Row className='row row-cols-1 row-cols-md-3 row-cols-lg-3 g-5'>
                <Col>
                    <Card className='text-center ms-auto me-auto p-3 border-0' style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={RegisterSVG} />
                      <Card.Body>
                        <Card.Title>Register</Card.Title>
                        <Card.Text>
                          Create your Account By Clicking The Register Button
                        </Card.Text>
                      </Card.Body>
                    </Card> 
                </Col>
                <Col>
                    <Card className='text-center ms-auto me-auto p-3 border-0' style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={CoursesSelectSVG} />
                      <Card.Body>
                        <Card.Title>Course Select</Card.Title>
                        <Card.Text>
                          Explore Various Courses And Select Your Desirable Courses
                        </Card.Text>
                      </Card.Body>
                    </Card> 
                </Col>
                <Col>
                    <Card className='text-center ms-auto me-auto p-3 border-0' style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={LearningSVG} />
                      <Card.Body>
                        <Card.Title>Start Learning</Card.Title>
                        <Card.Text>
                          Congratulations You Can Start Learning Now
                        </Card.Text>
                      </Card.Body>
                    </Card> 
                </Col>
            </Row>
          </Container>
        </Container>
    )
}

const HomeCardDate = [
  { id: 1, title: 'Full Stack Development', text: 'Simplilearn is a comprehensive curriculum that prepares students to flourish in the fast-paced world of full-stack development. ', image: FSD , price: '55000' },
  { id: 2, title: 'Digital Marketing', text: 'Digital marketing is one of the top courses in India to pursue. This course deals with strategies for promoting products and services online.', image: DM, price: '25000' },
  { id: 3, title: 'Cybersecurity', text: 'Cybersecurity. With the increasing incidents of cyberattacks, Cybersecurity has become significantly important for all organisations.', image: CS, price: '45000' },
  { id: 4, title: 'Business Analytics', text: 'Business analytics refers to the skills, technologies, and practices for iterative exploration and investigation of past business performance to gain insight and drive business planning.', image: BA, price: '48000' },
  { id: 5, title: 'PHP', text: 'PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995.', image: PHP, price: '15000' },
  { id: 6, title: 'Data Science', text: 'Data science courses prepare candidates to compile, analyse and manipulate large amounts of data and derive valuable insights from them.', image: DS, price: '40500' },
  { id: 7, title: 'UI/UX Designer', text: 'This course covers color theory, typography, layouts, patterns, and the design process. It also includes a usability evaluation and UX intensive phase, where students learn how to conduct and analyze usability tests.', image: UI, price: '38000' },
  { id: 8, title: 'Python', text: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.', image: PY, price: '30500' },
];
const HomeCard = () => {
  return(
    <Container className="mt-3">
      <h1 className='text-center p-5'>Most <span className='text-primary'>popular</span> Courses </h1>
      <Row className='row-cols-2 row-cols-md-4 row-cols-lg-4'>
        {HomeCardDate.map((card) => (
          <Col key={card.id} sm={12} md={6} lg={3} className="mb-4">
            <Card className='h-100 hb-shadow' style={{ width: '100%' }}>
              <Card.Img variant="top" src={card.image} alt={card.title} style={{ height: '200px' ,objectFit: 'cover'}}/>
              <Card.Body className='lh-base  d-flex flex-column'>
                <Card.Title className='text-center'>{card.title}</Card.Title>
                <Card.Text className='d-none d-md-block d-lg-block'>{card.text}</Card.Text>
                <Table className='table  mt-auto table-borderless'>
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
                      <td> (<span className='text-warning bg-transparent'>4.5</span>) </td>
                    </tr>
                  </tbody>
                </Table>
                <Button variant="outline-primary" className='w-100' as={Link} to="/courses">Join Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button type='button' variant="outline-primary" className='ms-auto me-auto d-flex justify-contant-center'>More Courses</Button>
    </Container>
  )
}

const initialCards = [
  { id: 1, img: Person1, name: "Mr. Karthi", description: "The automated process all your website tasks." },
  { id: 2, img: Person2, name: "Ms. Dhanushya", description: "The automated process all your website tasks." },
  { id: 3, img: Person3, name: "Mr. Bala", description: "The automated process all your website tasks." },
  { id: 4, img: Person4, name: "Ms. Maya", description: "The automated process all your website tasks." },
  { id: 5, img: Person5, name: "Mr. Dhanush", description: "The automated process all your website tasks." },
];

function Homepage4()
{
    const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const [first, ...rest] = prevCards;
        return [...rest, first];
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className='p-3 mb-3'>
    <h1 className='text-center p-4'>Community <span className="text-primary">Experts</span></h1>
      <div style={{ display: 'flex', gap: '50px', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
      {cards.map((card, index) => (
        <div key={card.id} style={{ textAlign: 'center', width: '150px' }}>
          <img
            src={card.img}
            alt={card.name}
            style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
          />
          <h5 style={{ margin: '5px 0' }}>{card.name}</h5>
          <p style={{ fontSize: '12px', color: '#666' }}>{card.description}</p>
        </div>
        ))}
      </div>
    </Container>
  );
}


function FeedBack()
{
  const feedbackData = [
    { id: 1, text: "It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable MERN Developer", author: "Student 1" },
    { id: 2, text: "It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable Business Analytics", author: "Student 2" },
    { id: 3, text: "It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable UI/UX Designer", author: "Student 3" },
    { id: 4, text: "It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable Python", author: "Student 4" },
    { id: 5, text: "It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable Data Science", author: "Student 5" },
    { id: 6, text: "It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable Cybersecurity", author: "Student 6" },
  ];

  const groupedFeedback = [];
  for (let i = 0; i < feedbackData.length; i += 3) {
    groupedFeedback.push(feedbackData.slice(i, i + 3));
  }

  return(
    <Container fluid className='p-5 bg-scroll home-parallex rounded-2'>
      <h1 className='text-center text-white'>How Learning <span className="text-primary">Like</span> You Are <span className="text-primary">Achieving</span> Their Goals</h1>
      <br/>
        <Container className="my-5">
          <Carousel data-bs-theme="dark">
            {groupedFeedback.map((group, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-around flex-md-row flex-lg-row flex-column">
                  {group.map((feedback) => (
                    <Card key={feedback.id} style={{ width: '20rem' }}>
                      <Card.Body className='h-100'>
                        <Card.Text>"{feedback.text}"</Card.Text>
                        <div>
                          <img src={starSVG} alt='star-img' className='m-0 p-0'/>
                          <img src={starSVG} alt='star-img' className='m-0 p-0'/>
                          <img src={starSVG} alt='star-img' className='m-0 p-0'/>
                          <img src={starSVG} alt='star-img' className='m-0 p-0'/>
                          <img src={starSVG} alt='star-img' className='m-0 p-0'/>
                        </div>
                        <br/>
                        <Card.Subtitle className="text-muted mt-auto text-end">- {feedback.author}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
      </Container>
    </Container>
  )
}
export {FeedBack};

const Home = () => {
    return(
        <main>
            <HomeCarousel/>
            <HomePage1/>
            <Homepage2/>
            <HomeCard/>
            <PLacement/>
            <Homepage4/>
            <Mission/>
            <FeedBack/>
        </main>
    )
}
export default Home;