import Collapse from 'react-bootstrap/Collapse';
import React, { useState } from 'react';
import Search from '../components/search/search';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import About from '../components/about';


const Main = styled.div`
    color: black;
    margin-top: 10%;
    padding-right: 5vw;
    @media screen and (max-width: 1400px){
        padding-right: 5%;
        padding-left: 5vw;
    }
    @media screen and (max-width: 700px){
        padding-left: 5%;
        padding-right: 5%;
    }
`
const Welcome = styled.div`
`
const Go = styled.button`
    color: black;
    font-size: 120%;
    padding: 2%;
    border: 2px solid white;
    border-radius: 50px;
    outline: none;
    margin-top: 15%;
    box-shadow: 1px 1px 3px 1px lightgrey;
    :hover{
        box-shadow: 3px 3px 5px 1px darkgrey;
        transition-duration: 0.5s;
    }
    @media screen and (max-width: 761px){
        margin-top: 5%;
    }
`
const H4 = styled.h4`
    line-height: 30px;
    margin-top: 6%;
`
const Img = styled.img`
    width: 50vw;
    @media (max-width: 761px){
        display: none;
    }
`
function Homepage() {

    return (
        <Main>
            <Welcome className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2> Missing out on amazing opportunities? Look no further. </h2>
                        <H4> Find upcoming top-notch opportunities curated according to your eligibility, using this search tool. </H4>
                        <H4> The opportunities are currently meant for students/graduates in any computer science related field. They include scholarships, open source programs, mentorship programs, internships and community events. </H4>
                        <center>
                            <a href="#about">
                                <Go> Know more </Go>
                            </a> &emsp; &emsp;
                                <Link to="search-results">
                                <Go style={{ 'background': 'rgb(16, 134, 173)', 'color': 'white' }}> Get started </Go>
                            </Link>
                        </center>
                    </div>
                    <div className="col-lg-6">
                        <Img src={require('../assets/images/welcome.png')} />
                    </div>
                </div>
            </Welcome>
            <About id="about" />
        </Main>

    )
}

export default Homepage;