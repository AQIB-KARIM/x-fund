import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './Projects.scss'
import { projectsData } from './ProjectsData'
import Slider from "react-slick";

const Projects = () => {

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    return (
        <div className='projects_bg_image'>
            <h3>Our Projects</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <Container>
                <Row className='justify-content-center align-items-center'>
                    <Col md={12}>
                        <Slider {...settings}>
                            {
                                projectsData.map((projectData, index) => (
                                    <div className='our_projects_container' key={index}>
                                        <img src={projectData.Avatar} alt='project_img' />
                                        <p>{projectData.text}</p>
                                    </div>
                                ))
                            }
                        </Slider>
                        <div className='projects_btn_container'>
                            <button className='learn_more'>Learn More</button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Projects
