import React from 'react'
import Navbar from './navbar/navbar'
export default function layout({ children, screen }) {
    return (
        <div>
            <Navbar screen={screen} />
            {children}
        </div>
    )
}
