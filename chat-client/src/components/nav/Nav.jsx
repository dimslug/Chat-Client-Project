import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { useEffect, useState } from 'react';
import Logout from '../auth/logout/Logout';



function Nav() {

    const [sessionToken, setSessionToken] = useState('')

    const updateToken = newToken => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setSessionToken(localStorage.getItem('token'))
        }
    }, [])

    return (
        <>
            <Navbar
                color='dark'
                dark
            >
                <NavbarBrand>Water Enjoyers Chat</NavbarBrand>
                {
                    sessionToken !== '' ?
                        <Logout setSessionToken={setSessionToken} /> : null
                }
            </Navbar>
        </>
    )
}

export default BrandNavbar;
