import React from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
export default function layout({ children, screen }) {
    return (
        <div>
            <Navbar screen={screen} />
            {children}
            <Footer />
        </div>
    )
}
