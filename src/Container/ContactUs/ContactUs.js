import React, { useState, useEffect } from 'react'
import './ContactUs.scss';
import BannerHeader from '../../Components/BannerHeader/BannerHeader';
import Footer from '../../Components/Footer/Footer';
import { Container, Col, Row } from 'react-bootstrap'
import ContactUsLogo from '../../assets/images/contact_us.webp'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ContactUs = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])


  if (!loading) {
    return (
      <React.Fragment>

        <HelmetProvider>
          <Helmet>
            <title>Contact</title>
            <meta name='description' content='Contact X-Funds by email. Reach out if you have any questions.' />
          </Helmet>
        </HelmetProvider>

        <BannerHeader title={"Contact Us"} />
        <div className='contact_bg_img'>

          <Container>
            <div className='contact_form_container'>
              <Row>

                <Col md={4}>
                  <div className='contact_img'>
                    <img src={ContactUsLogo} alt='contact_img' />
                  </div>
                </Col>

                <Col md={8}>
                  <form>
                    <Row>
                      <Col md={6}>
                        <p>Name</p>
                        <input type='text' placeholder="Enter your name" />
                      </Col>

                      <Col md={6}>
                        <p>Email</p>
                        <input type='email' placeholder="Enter email address" />
                      </Col>

                      <Col md={6}>
                        <p>Phone</p>
                        <input type='tel' placeholder="Enter phone number" />
                      </Col>

                      <Col md={6}>
                        <p>Subject</p>
                        <input type='text' placeholder="Enter subject" />
                      </Col>

                      <Col md={12}>
                        <p>Message</p>
                        <textarea cols={5} rows={5} placeholder='Message'></textarea>
                      </Col>

                      <Col md={12}>
                        <div className='contact_btn'>
                          <button>Submit</button>
                        </div>
                      </Col>

                    </Row>
                  </form>
                </Col>
              </Row>
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

export default ContactUs
