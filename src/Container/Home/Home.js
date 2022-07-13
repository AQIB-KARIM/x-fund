import React, { useState, useEffect } from 'react'
import Header from '../../Components/Navbar/Header';
import Services from '../Services/Services';
import Features from '../../Components/Features/Features';
import Projects from '../../Components/Projects/Projects';
import OurTeam from '../OurTeam/OurTeam';
import Partners from '../Partners/Partners';
import Footer from '../../Components/Footer/Footer';
import './Home.scss'

const Home = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    if (!loading) {
        return (
            <div style={{ overflow: "hidden" }}>
                <Header />
                <Services />
                <Features />
                <Projects />
                <OurTeam />
                <Partners />
                <Footer />
            </div>
        )
    }

    return (
        <div className='loader-container'>
              <div className="loader" ></div>
        </div>
    )
}

export default Home
