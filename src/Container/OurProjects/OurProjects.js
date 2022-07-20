import React, { useState, useEffect } from 'react'
import BannerHeader from '../../Components/BannerHeader/BannerHeader'
import './OurProjects.scss'
import Footer from '../../Components/Footer/Footer'
import { Container, Col, Row } from 'react-bootstrap'
import OurProject1 from '../../assets/images/priority.png'
import OurProject2 from '../../assets/images/XHouse.jpg'

const OurProjects = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    if (!loading) {
        return (
            <React.Fragment>
                <BannerHeader title={'Our Projects'} />
                <div className='our_projects_main'>
                    <Container>
                        <Row className='justify-content-center align-items-center'>
                            <Col md={6}>
                                <div className='Nft_community_image'>
                                    <img src={OurProject1} loading='lazy' alt='project1' />
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className='Nft_community_text'>
                                    <h3><span>XFunds</span> Priority Card Information:</h3>
                                    <p>XFunds Priority Card is the first NFT collection produced in-house by the XFunds Production Group. In XFunds, we are all about real-life applications, thus Priority Cards come with their utilities for you from the moment you buy them. While XFunds Priority Card is special for being our first NFT project, it is also unique for the utilities it has to offer. The price of the 25-piece collection makes the community very selective. That being said the Priority Card offers 1% of net income of XFunds to each and every holder, also if you are a client and a XFunds Priority Card holder than we forego our monthly operating fee as well as our commission. XFunds Priority Card is the first NFT collection that offers payments almost as dividend over crypto and NFT world, making it a pioneer.</p>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className='nft_fund_text_container'>
                                    <h3><span>XHouse</span> Information:</h3>
                                    <p>XHouse project is the first public mint NFT project by XFunds. The 1111-piece project allows its holders access to the closed Xhouse Discord group, where artists, collectors, and enthusiasts can meet, interact, and learn from one another. Nevertheless, the utilities are not limited to only creating a selective community for the NFT space, but also XFunds Production Group is constantly working with new artists to find projects that can deliver and help bridge the digital and physical world. Collaborations with new artists will only be sold to the XHouse holders from XFunds, after all XFunds aim is to generate value for its community. XFunds is a dynamic organization, so,  XHouse will carry the XFunds energy through its projects, get togethers, seminars, and unprecedented events.</p>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className='nft_fund_image_container'>
                                    <img src={OurProject2} loading='lazy' alt='project2' />
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

export default OurProjects
