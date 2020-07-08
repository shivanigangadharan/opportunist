import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
`

const H4 = styled.h4`
    line-height: 28px;
    margin-top: 6%;
    font-size: 120%;
`
const Img = styled.img`
    width: 40vw;
    @media (max-width: 761px){
        width: 90%;
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
                        <H4> The purpose behind building this project was to not let any student miss out on opportunities just because they weren't aware of it. </H4>
                        <H4> Now, the goal is to make this website a complete one stop location for all students in technology to find and participate in programs that can kick start their careers. </H4>
                        <H4> If this website helps or inspires you in any way, please do your part by suggesting any top quality opportunity or program that you are aware of, so that we can grow together! </H4>
                        <br /> <br /> <br /> <br />
                    </div>

                </div>


            </div>
        </Main >
    )
}

export default About;