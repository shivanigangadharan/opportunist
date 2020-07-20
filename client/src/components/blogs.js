import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    padding: 5%;
    padding-top: 5%;
    @media (max-width: 769px){
        padding-top: 10%;
    }

    `
const CardParent = styled.div`
display : grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 762px){
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 415px){
        grid-template-columns: 1fr;
    }
    `
const Card = styled.a`
    box-shadow: 1px 2px 5px 2px darkgrey;
    border-radius: 5px;
    padding:2%;
    font-size: 120%;
    align-items: center;
    justify-content: center;
    color: white;
    background: rgb(5, 81, 122);
    display: flex;
    font-weight: 600;
    text-align: center;
    margin-right: 10%;
    margin-left: 10%;
    margin-top: 10%;
    text-decoration: none !important;
    :hover{
        box-shadow: 1px 2px 8px 3px grey;
        cursor: pointer;
        color: white;
    background: rgb(5, 81, 122);
        text-decoration: none;
        transition-duration: 0.5s;
    }
`
const H3 = styled.h4`
    margin-left: 5%;
    margin-top: 5%;
`
function Blogs() {
    return (


        <Main>
            <h4 style={{ 'lineHeight': '28px', 'textAlign': 'justify' }}> Here are some blogs that will help you know more about the programs, their application process and experiences of previous participants.</h4>
            <H3> Open source </H3>
            <CardParent>
                <Card href="https://medium.com/@austintackaberry/why-you-should-contribute-to-open-source-software-right-now-bec8bd83cfc0" target="_blank">
                    Why contribute to open source </Card>
                <Card href="https://opensource.guide/how-to-contribute/" target="_blank">
                    How to contribute </Card>
                <Card href="https://opensource.com/life/16/1/6-beginner-open-source" target="_blank">
                    Starting points for beginners
                </Card>
                <Card href="https://www.linuxfoundation.org/resources/open-source-guides/starting-open-source-project/" target="_blank">
                    Launch your own project
                </Card>
            </CardParent><br />
            <H3> Application guides for programs </H3>
            <CardParent>
                <Card href="https://medium.com/iiitv/google-summer-of-code-preparation-tips-d1d3acc21da5" target="_blank">
                    GSOC </Card>
                <Card href="https://medium.com/@nupurbaghel/outreachy-the-complete-process-ce0638384d74" target="_blank">
                    Outreachy </Card>
                <Card href="https://medium.com/@aggarwalakshita1/what-and-hows-of-rgsoc-d4ee14f29a0e" target="_blank">
                    RGSOC </Card>
                <Card href="https://medium.com/tezos-india-foundation/presenting-the-tezos-india-fellowship-%EF%B8%8F-1ad13f90b13d" target="_blank">
                    Tezos India Fellowship </Card>
            </CardParent>
            <br />
        </Main>
    )
}

export default Blogs;