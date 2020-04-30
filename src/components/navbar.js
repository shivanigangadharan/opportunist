import React from 'react';
import styled from 'styled-components';
import flowers from '../assets/background/flowers.jpg';

const Main = styled.div`
`
const Nav = styled.nav`
    background-image: url('https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
    border-radius: 0px;
    background-size: cover;
    background-position: center;
    `
function Navbar() {
    return (
        <Main>
            <Nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Opportunist</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Search</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Send Feedback</a></li>
                    </ul>
                </div>
            </Nav>
        </Main>
    )
}

export default Navbar;