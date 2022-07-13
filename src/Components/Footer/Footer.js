import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import FooterLogo from "../../assets/images/logo.png";
import EmailIcon from "../../assets/images/email.png";
import LocationIcon from "../../assets/images/location.png";
import FbIcon from "../../assets/images/fb.png";
import LinkedinIcon from "../../assets/images/linkedin.png";
import InstaIcon from "../../assets/images/insta.png";
import MessagenerIcon from '../../assets/images/messanger.png'
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
                <li>Home</li>
                <li>About Us</li>
                <li>Terms and Condition</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
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
