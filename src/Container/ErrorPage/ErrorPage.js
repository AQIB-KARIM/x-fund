import React from 'react';
import './ErrorPage.scss';
import BannerHeader from '../../Components/BannerHeader/BannerHeader';
import Footer from "../../Components/Footer/Footer"

const ErrorPage = () => {

    const goToHome = () => {
        window.location.href = '/'
    }

    return (
        <React.Fragment>
            <BannerHeader />
            <div className='error_main'>
                <div>
                    <h1>Oops!</h1>
                    <h5>404 PAGE NOT FOUND</h5>
                    <p>This page you are looking for might have been removed <br /> or its name changed or its temporarily unavailable.</p>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default ErrorPage