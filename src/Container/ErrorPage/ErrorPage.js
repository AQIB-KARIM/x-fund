import React from 'react';
import './ErrorPage.scss'

const ErrorPage = () => {

    const goToHome = () => {
        window.location.href = '/'
    }

    return (
        <div className='error_main'>
            <div>
                <h1>Oops!</h1>
                <h5>404 PAGE NOT FOUND</h5>
                <p>This page you are looking for might have been removed <br /> or its name changed or its temporarily unavailable.</p>
                <div className='text-center'>
                    <button onClick={goToHome}>Go To HomePage</button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage