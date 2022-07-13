import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './OurTeam.scss'
import { teamsData } from './TeamsData'

const OurTeam = () => {
    return (
        <div className='team_bg_color'>
            <h3>Our Team</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

            <Container>
                <Row>
                    <Col md={12}>
                        <div className='teams_main'>
                            {
                                teamsData.map((data, index) => (
                                    <div className='teams_container' key={index}>
                                        <img src={data.memberAvatar} alt='member_avatar' loading='lazy' />
                                        <h3>{data.name}</h3>
                                        <p>{data.title}</p>
                                        <p>{data.designation}</p>
                                        <p>{data.education}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='teams_learn_more_cotnainer'>
                            <button>Learn More</button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default OurTeam
