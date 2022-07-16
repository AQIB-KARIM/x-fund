import React from 'react'
import './Header.scss';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import NFtImage from '../../assets/images/NFT-img.png';
import Logo from '../../assets/images/xfunds-logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {

   const goToWeb = () => {
    window.location.href = "https://app.xfunds.trade/"
   }

    return (
        <div className='bg_container'>

            <Navbar expand="lg">
                <Container style={{ maxWidth: "90%" }}>
                    <Navbar.Brand href="/">
                        <img src={Logo} alt='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="ml-auto">
                            <NavLink className={'nav-link'} to={"/"}>Home</NavLink>
                            <NavLink className={'nav-link'} to={"/features"}>Features</NavLink>
                            <NavLink className={'nav-link'} to={"/projects"}>Our Projects</NavLink>
                            <NavLink className={'nav-link'} to={"/teams"}>Team</NavLink>
                            <NavLink className={'nav-link'} to={"/contact"}>Contact</NavLink>
                            <button onClick={goToWeb} className='sign_up'>Sign up/Login</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Container style={{ maxWidth: "90%" }}>
                <Row className='justify-content-center align-items-center'>
                    <Col md={6}>
                        <div className='legal_fund_container'>
                            <h3>World's First Legal NFT Fund</h3>
                            <p>Non-Fungible Tokens (NFT) Are Non-interchangeable Tokens issued On A Blockchain Network That May Be Accquired And Disposed Of Through A Virtual NFT Marketplace.</p>
                            <button>Learn More</button>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className='Nft_image_container'>
                            <img src={NFtImage} alt='nft-logo' loading='lazy' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
