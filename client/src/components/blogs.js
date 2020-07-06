import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    padding: 10vh;
    padding-top: 15vh;

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
    @media (max-width: 642px){
        grid-template-columns: 1fr;
    }
    `
const Card = styled.a`
    box-shadow: 1px 2px 8px 3px darkgrey;
    border-radius: 5px;
    background: rgb(37, 118, 247);
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: 120%;
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: center;
    margin-right: 10%;
    margin-left: 10%;
    margin-top: 10%;
    color: white !important;
    text-decoration: none !important;
    :hover{
        box-shadow: 1px 2px 8px 3px grey;
        cursor: pointer;
        color: white;
        text-decoration: none;
        transition-duration: 0.5s;
    }
`
function Blogs() {
    return (


        <Main>
            <h4> Here are some blogs that will help you know more about the programs, their application process and experiences of previous participants.</h4>

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
        </Main>
    )
}

export default Blogs;