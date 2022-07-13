import React, { useState, useEffect } from 'react';
import BannerHeader from '../../Components/BannerHeader/BannerHeader'
import Footer from '../../Components/Footer/Footer';
import './TeamsInner.scss';
import { Container, Col, Row } from 'react-bootstrap'
import { teamsData } from '../OurTeam/TeamsData';
import Logo from '../../assets/images/logo.png';
import LinkedInLogo from '../../assets/images/linkedin_official.png'


const TeamsInner = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    if (!loading) {
        return (
            <React.Fragment>
                <BannerHeader title={'Our Team'} />
                <div className='teams_inner_main'>
                    <Container style={{ maxWidth: "70%" }}>
                        <Row className='justify-content-center align-items-center'>
                            <Col md={4}>
                                <div className='crypto_expert'>
                                    <h4>Meet our crypto experts</h4>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='crypto_expert_text'>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        when an unknown printer took a galley of type and scrambled.
                                    </p>
                                </div>
                            </Col>

                            <Col md={12}>
                                <div className='teams_main_card'>
                                    {
                                        teamsData.map((data, index) => (
                                            <div className='teams_cards' key={index}>
                                                <img className='member_avatar' src={data.memberAvatar} alt='member_avatar' loading='lazy' />
                                                <div className='teams_card_text'>
                                                    <h3>{data.name}</h3>
                                                    <p>{data.title}</p>
                                                    <p>{data.designation}</p>
                                                    <p>{data.education}</p>
                                                </div>
                                                <div className='w-100 d-flex justify-content-center align-items-center'>
                                                    <div className='linked_in_container'>
                                                        <img src={LinkedInLogo} alt='linked_in_logo'/>
                                                    </div>
                                                </div>
                                                <img className='x_fund_Logo' src={Logo} width={50} height={50} alt='x-fund-logo' />

                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='join_x_fund_container'>
                                    <button>JOIN X FUNDS TEAM NOW </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </React.Fragment>
        )
    }

    return (
        <div className='loader-container'>
             <div className="loader" ></div>
        </div>
    )
}

export default TeamsInner