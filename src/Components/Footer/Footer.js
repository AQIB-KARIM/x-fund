import React from 'react';
import { Container, Row, Col,NavLink } from "react-bootstrap";
import FooterLogo from "../../assets/images/logo.webp";
import EmailIcon from "../../assets/images/email.webp";
import LocationIcon from "../../assets/images/location.webp";
import FbIcon from "../../assets/images/fb.webp";
import LinkedinIcon from "../../assets/images/linkedin.webp";
import InstaIcon from "../../assets/images/insta.webp";
import MessagenerIcon from '../../assets/images/messanger.webp'
// import { NavLink } from 'react-router-dom';
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <Container fluid style={{maxWidth:"1400px"}}>
        <Row className="justify-content-center">
          <Col md={4}>
            <div className={'footer_desc'}>
              <img src={FooterLogo} alt="logo" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.</p>
            </div>
            <div className='connect_with_us_container'>
              <span>Connect With Us</span>
              <div className='image_container'>
                <img src={FbIcon} alt={'fb_icon'} />
                <img src={LinkedinIcon} alt={'linkedin_icon'} />
                <img src={InstaIcon} alt={'insta_icon'} />
                <img src={MessagenerIcon} alt={'messagner_icon'} />
              </div>
            </div>


          </Col>
          <Col md={2}>
            <div className='quick_links'>
              <h6>Quick Links</h6>
              <ul>
                <NavLink href='/'><li>Home</li></NavLink>
                <NavLink href='/features'><li>Features</li></NavLink>
                <NavLink href='/projects'><li>Our Projects</li></NavLink>
                <NavLink href='/teams'><li>Team</li></NavLink>
                <NavLink href='/contact'><li>Contact Us</li></NavLink>
              </ul>
            </div>
          </Col>
          <Col md={2}>
            <div className='address_container'>
              <h6>Address</h6>
              <ul>
                <li>
                  <img src={LocationIcon} alt="phone_icon" />
                  41 Halifax St.<br />Gallatin,TN 37066
                </li>
                <li>
                  <img src={EmailIcon} alt="phone_icon" />
                  abc@example.com
                </li>

              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className='subscribe_container'>
              <h6>Subscribe to get the updates</h6>
              <div className='input_container'>
                <input type='email' placeholder='Email address' />
                <button>Subscribe</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className='x_funds_group'>
        <span>&copy; 2022 XFunds Group.All rights reserved</span>

      </div>
    </footer>
  );
};

export default Footer;
