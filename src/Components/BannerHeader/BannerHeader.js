import React from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import './BannerHeader.scss';
import Logo from '../../assets/images/xfunds-logo.png'
import { NavLink } from 'react-router-dom';

const BannerHeader = (props) => {
    const goToWeb = () => {
        window.location.href = "https://app.xfunds.trade/"
    }
    return (
        <div className='bg_banner_container'>
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
                            <button className='sign_up' onClick={goToWeb}>Sign up/Login</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container style={{ maxWidth: "90%" }}>
                <Row className='justify-content-center align-items-center'>
                    <Col md={6}>
                        <div className='legal_fund_container'>
                            <h3>{props.title}</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div >
    )
}

export default BannerHeader
