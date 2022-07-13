import React from 'react'
import './Partners.scss'
import { Container} from 'react-bootstrap'
import Slider from "react-slick";
import { partnersData } from './PartnersData';

const Partners = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ]
    };
    return (
        <div className='partners_bg_image'>
            <h3>Our Partners</h3>
            <Container>
                <div>
                    <Slider {...settings}>
                        {
                            partnersData.map((partner, index) => (
                                <div className='partners_container' key={index}>
                                    <img src={partner.partnerAvatar} alt='avatar' />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default Partners
