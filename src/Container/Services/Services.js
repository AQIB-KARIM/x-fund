import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './Services.scss';
import NFTlogo from '../../assets/images/NFT-fund.png'
import cryptocurrencylogo from '../../assets/images/cryptocurrency.png'
import Xhouselogo from '../../assets/images/X-house.png'


const Services = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='services_container'>
                            <h3>Our Services</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className='nft_fund_container'>
                            <img src={NFTlogo} alt='nft_logo' />
                            <h3>NFT <br/> FUND</h3>
                            <p>NFT fund will focus solely on Non-Fungible Tokens (NFT).</p>
                            <button>Learn More</button>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className='crypto_currency_container'>
                            <img src={cryptocurrencylogo} alt='crypto_logo' />
                            <h3>Cryptocurrency <br/> Fund</h3>
                            <p>Our experienced analysts manage our Cryptocurrency Fund with the goal of assisting them in earning profits</p>
                            <button>Learn More</button>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className='x-house_nft_container'>
                            <img src={Xhouselogo} alt='x_house_logo'  />
                            <h3>X-House NFT Collective (Soon)</h3>
                            <p>An exclusive NFT Art Collective with only 1111 private members dedicated to NFT collectors and artists.</p>
                            <button>Learn More</button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    )
}

export default Services
