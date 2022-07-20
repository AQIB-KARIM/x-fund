import React, { useEffect, useState } from 'react'
import BannerHeader from '../../Components/BannerHeader/BannerHeader'
import { Container, Row, Col, Card } from 'react-bootstrap'
import StrongNftImage from '../../assets/images/services1.webp'
import Footer from '../../Components/Footer/Footer'
import './OurServices.scss'
import ServiceImg1 from '../../assets/images/card1.webp';
import ServiceImg2 from '../../assets/images/card2.webp';
import ServiceImg3 from '../../assets/images/card3.webp';
import NftFundLogo from '../../assets/images/NFT-fund.webp';
import CryptoLogo from '../../assets/images/cryptocurrency.webp';
import xHouseLogo from '../../assets/images/X-house.webp';

const OurServices = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])



    if(!loading) {
        return (
            <React.Fragment>
                <BannerHeader title={"Our Services"} />
                <div className='services_main'>

                    <Container>
                        <Row className='justify-content-center align-items-center'>
                            <Col md={6}>
                                <div className='build_strong_nft_img_container'>
                                    <img src={StrongNftImage} alt='strong_nft' />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='build_strong_nft_text_container'>
                                    <h3><span>Build</span> Strong NFT Community</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </Col>
                        </Row>

                        <div className='discover_collect_container'>
                            <h3 className='text-center'>Discover collect, and sell extra ordinary <br /> Vector1NFTs</h3>
                            <div className='cards_container'>
                                <Row className='justify-content-center'>
                                    <Col md={4} className='Card'>
                                        <Card>
                                            <div className='rounded_container'>
                                                <div className='inner_round'>
                                                    <img src={NftFundLogo} width={60} height={60} alt='nft_fund_logo' />
                                                </div>
                                            </div>
                                            <Card.Img variant="top" src={ServiceImg1} alt='service_logo1' />
                                            <Card.Body>
                                                <Card.Title>NFT Fund</Card.Title>
                                                <span>NFT fund will focus solely on Non-Fungible Tokens (NFT).</span>
                                                <Card.Text>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    when an unknown printer took a galley of type and scrambled it.
                                                </Card.Text>
                                                <button className='nft_btn'>Learn More</button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4} className='Card'>
                                        <Card>
                                            <div className='rounded_container'>
                                                <div className='inner_round'>
                                                    <img src={CryptoLogo} width={60} height={60} alt='crypto_logo' />
                                                </div>
                                            </div>
                                            <Card.Img variant="top" src={ServiceImg2} alt='service_logo2' />
                                            <Card.Body>
                                                <Card.Title>Cryptocurrency Fund</Card.Title>
                                                <span>Our experienced analysts manage our Cryptocurrency Fund with the goal of assisting them in earning profits.</span>
                                                <Card.Text>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                                                </Card.Text>
                                                <button className='crypto_btn'>Learn More</button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4} className='Card'>
                                        <Card>
                                            <div className='rounded_container'>
                                                <div className='inner_round'>
                                                    <img src={xHouseLogo} width={40} height={40} alt='x_house_logo' />
                                                </div>
                                            </div>
                                            <Card.Img variant="top" src={ServiceImg3} alt='service_logo3' />
                                            <Card.Body>
                                                <Card.Title>X-House NFT Collective (Soon)</Card.Title>
                                                <span>An exclusive NFT Art Collective with only 1111 private members dedicated to NFT collectors and artists.</span>
                                                <Card.Text>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                </Card.Text>
                                                <button className='x-house_btn'>Learn More</button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </div>
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

export default OurServices
