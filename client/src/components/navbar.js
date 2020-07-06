import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SearchOutlined, InfoCircleOutlined, BulbOutlined, ReadOutlined } from '@ant-design/icons';
import '../assets/logo.PNG';

const Nav = styled.div`
    background: white;
    color: white;
    display: flex;
    padding: 1%;
    position: fixed;
    width: 100%;
    font-size: 120%;
    transition: top 0.5s;
    box-shadow: 0 8px 6px -6px lightgrey;
`
const Brand = styled.div`
font-size: 150%;
font-weight: bold;
margin-left: 10px;
color: black;
text-decoration: none !important;
:hover{
    text-decoration: none !important;
}
@media (max-width: 768px) {
    display: none;
}
`

const Menu1 = styled.div`
display: flex;
margin-top: 0.5%;
text-align: center;
margin-left: auto;
transition-duration: 0.5s;
@media (max-width: 768px) {
    display: none;
    transition-duration: 0.5s;

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
color: black !important;
text-decoration: none !important;
:hover{
    color: grey !important;
    cursor: pointer;
}
`
const Icons = styled(Link)`
    margin-right: 25px;
    font-size: 120%;
    color: black !important;
    :hover{
        color: grey !important;
        cursor: pointer;
    }
`
const Option = styled.div`
margin-right: 20px;

`
const Img = styled.img`
    width: 40px;
    margin-left: 10px;

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
            <Link to="/"><Img src={require('../assets/logo.PNG')} /></Link>
            <Link to="/"><Brand>
                OPPORTUNIST
                </Brand></Link>
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
                    <Links to="/blogs"> Blogs</Links>
                </Option>

            </Menu1>
            <Menu2>
                <Icons to="/">  <InfoCircleOutlined /> </Icons>
                <Icons to="/search-results">   <SearchOutlined /> </Icons>
                <Icons to="/suggest">  <BulbOutlined /></Icons>
                <Icons to="/blogs">  <ReadOutlined /></Icons>
            </Menu2>


        </Nav>




    )
}
export default MyNavbar;

















