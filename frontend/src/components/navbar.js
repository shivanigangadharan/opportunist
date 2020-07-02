import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import './navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

const Nav = styled.nav`
background: #2A2829;
transition: top 0.5s;
position: fixed;
width: 100%;
padding: 1.5%;
`
const Head = styled.a`
font-size: 250%;
font-weight: 600;
color: white;
:hover{
    color: skyblue !important;
    transition-duration:0.5s;
}
`
const Links = styled(Link)`
color: white !important;
text-decoration:none !important;
:hover{
    color: skyblue !important;
    transition-duration:0.5s;
}
`
const NavRight = styled.div`
    color: white !important;
    float: right;
    font-size: 150%;
`

function MyNavbar() {
    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                //showNav
                setNavState('0px');
                prevScrollpos = currentScrollPos;

            }
            else {
                //hideNAV
                setNavState('-100px');
                prevScrollpos = currentScrollPos;

            }
        }
    })

    const [navState, setNavState] = useState('0px');

    return (
        <Nav id="navbar" style={{ 'top': navState }}>


            <Head className="navbar-brand" href="/">OPPORTUNIST</Head>

            <NavRight className="justify-content-end" id="navbarNav">
                <Links to="/">  About </Links>
                <Links to="/search-results"> Search </Links>
                <Links to="/suggest"> Suggest </Links>
                <Links to="/">Contact</Links>
            </NavRight >



        </Nav >
    )
}
export default MyNavbar;

