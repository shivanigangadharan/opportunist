import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Main = styled.div`
    margin-top: 5%;
`

const H4 = styled.h4`
    line-height: 28px;
    margin-top: 5%;
    font-size: 110%;
`
const Img = styled.img`
    width: 40vw;
    @media (max-width: 761px){
        display: none;
    }
`
const H3 = styled.h3`
    margin-top: 18%;
`
const Button = styled.button`
    color: black;
    font-size: 120%;
    padding: 2%;
    border: 2px solid white;
    border-radius: 50px;
    outline: none;
    margin-top: 5%;
    margin-bottom: 5%;
    box-shadow: 1px 1px 3px 1px lightgrey;
    @media (max-width: 700px){
        margin-bottom: 0px;
    }
    :hover{
        box-shadow: 3px 3px 5px 1px darkgrey;
        transition-duration: 0.5s;
        text-decoration: none !important;
    }
`

function About() {
    return (
        <Main>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-sm-12">
                        <Img src={require('../assets/images/about.png')} />
                    </div>

                    <div className="col-lg-6 col-sm-12">
                        <H3> Why this website? </H3>
                        <H4> The purpose behind building this project was to not let any student miss out on opportunities just because they weren't aware of it. </H4>
                        <H4> Now, the goal is to make this website a complete one stop location for all students in technology to find and participate in programs that can kick start their careers. </H4>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-sm-12 ">
                        <H3> How can you contribute? </H3>
                        <H4> If this website helps or inspires you in any way, please do your part by suggesting any top quality opportunity or program that you are aware of, so that we can grow together! </H4>
                        <H4> You can do so by clicking the inform us button and filling a very short form with the basic required details. </H4>
                        <H4> You're small contribution will create a big impact and help many students in technology :) </H4>
                        <center>
                            <Link to="/suggest">
                                <Button style={{ 'background': '#0B4F6C', 'color': 'white' }}> Contribute </Button>
                            </Link>
                        </center>
                    </div>

                    <br /><br />
                    <div className="col-lg-6 col-sm-12">
                        <Img src={require('../assets/images/suggest.png')} />
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-sm-12">
                        <Img src={require('../assets/images/blogs.png')} />
                    </div>

                    <div className="col-lg-6 col-sm-12">
                        <H3> More resources to help you reach your goal faster... </H3>
                        <H4> We have explored and curated some very informative blogs, written by previous participants who share their journey and also guide you on your applications. Do explore them to get some inside tips for a program.  </H4>
                        <H4> Also, if you have written a blog on your experience with a technical program, let us know and we'd be glad to add it to our collection!</H4>
                        <center> <Button> Share a blog </Button> &emsp; &emsp;
                        <Link to="/blogs">
                                <Button style={{ 'background': '#EE6352', 'color': 'white' }}> Explore blogs </Button>
                            </Link>
                        </center>
                    </div>

                </div>
            </div>

            <br /> <br /> <br /> <br />

        </Main >
    )
}

export default About;