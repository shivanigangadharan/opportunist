import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SearchOutlined, InfoCircleOutlined, BulbOutlined, ReadOutlined } from '@ant-design/icons';

const Nav = styled.div`
    background: #2A2829;
    color: white;
    display: flex;
    padding: 1.5%;
    position: fixed;
    width: 100%;
    font-size: 120%;
    transition: top 0.5s;

`
const Brand = styled.div`
font-size: 150%;
font-weight: bold;
margin-left: 20px;
`
const Expand = styled.div`
display: none;
@media (max-width: 768px){
    margin-left: auto;
    cursor: pointer;
    display: initial;
}
`
const Menu1 = styled.div`
display: flex;
text-align: center;
margin-left: auto;
@media (max-width: 768px) {
    display: none;
}
`
const Menu2 = styled.div`
display : none;
color: white !important;
@media (max-width: 768px) {
    display: flex;
    margin-left: auto;
    margin-top: 1%;
}
`

const Links = styled(Link)`
color: white !important;
text-decoration: none !important;
:hover{
    color: lightgrey !important;
    cursor: pointer;
}
`
const Icons = styled(Link)`
    margin-right: 25px;
    font-size: 120%;
    color: white !important;
    :hover{
        color: lightgrey !important;
        cursor: pointer;
    }
`
const Option = styled.div`
margin-right: 20px;

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
        // <Nav id="navbar" style={{ 'top': navState }}>


        //     <Head className="navbar-brand" href="/">OPPORTUNIST</Head>

        //     <NavRight className="justify-content-end" id="navbarNav">
        //         <Links to="/">  About </Links>
        //         <Links to="/search-results"> Search </Links>
        //         <Links to="/suggest"> Suggest </Links>
        //         <Links to="/">Contact</Links>
        //     </NavRight >



        // </Nav >


        <Nav className="nav" id="navbar" style={{ 'top': navState }}>
            <Brand>
                OPPORTUNIST
                </Brand>
            <Menu1>
                <Option>
                    <Links to="/">  About </Links>
                </Option>
                <Option>
                    <Links to="/search-results"> Search </Links>
                </Option>
                <Option>
                    <Links to="/suggest">Suggest</Links>
                </Option>
                <Option>
                    <Links to="/"> Blogs</Links>
                </Option>

            </Menu1>
            <Menu2>
                <Icons to="/">  <InfoCircleOutlined /> </Icons>
                <Icons to="/search-results">   <SearchOutlined /> </Icons>
                <Icons to="/suggest">  <BulbOutlined /></Icons>
                <Icons to="/">  <ReadOutlined /></Icons>
            </Menu2>


        </Nav>




    )
}
export default MyNavbar;

