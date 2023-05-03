import React from 'react'
import Navbar from './navbar/navbar'
export default function layout({ children, isMobile }) {
    return (
        <div>
            <Navbar isMobile={isMobile} />
                {children}
                
        </div>
    )
}
