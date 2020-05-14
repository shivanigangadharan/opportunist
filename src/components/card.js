import React from 'react';
import styled from 'styled-components';
import { stringLiteralTypeAnnotation } from '@babel/types';

const Main = styled.div`
    background: white;
    box-shadow: 1px 1px 1px 1px white;
    padding: 2%;
    width: 90%;
    border-radius: 3px;
    display: flex;
    margin-bottom: 3%;
    @media screen and (max-width: 700px){
        flex-direction: column;
        width: 95%;
        margin-bottom: 5%;
        margin-top: 9%;
        padding-top: 5%;
    }
`
const Content = styled.div`
    border: 1px solid skyblue;
    border-radius: 3px;
    padding: 1.3%;
    margin-left: 2%;
    text-align: left;
    @media screen and (max-width: 700px){
        margin:0;
        padding: 2%;
    }
`
const Img = styled.img`
    width: 15%;
    @media screen and (max-width: 700px){
        width: 50%;
        margin-bottom: 3%;
    }
`
const Title = styled.text`
    font-weight: bold;
`
const Summary = styled.p`
    margin-top: 0.5%;
    @media screen and (max-width: 700px){
        margin-top: 2%;
    }
`
const Type = styled.div`
    border: 1px solid magenta;
    color: magenta;
    float: right;
    font-size: 60%;
    border-radius: 100px;
    padding: 0.4%;
`

function Card(props) {
    var type = props.type;
    return (
        <Main>
            <Img src="https://pbs.twimg.com/profile_images/561419803202568194/Pjk5iqNn_400x400.png" />
            <Content>
                <Title> OUTREACHY Open source program </Title>
                <Type> {type} </Type>
                <Summary>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Summary>
                <p><b> Target audience: </b> Females, Transgender, other under-represented groups</p>
                <p><b> Stipend: </b> $5500 </p>
                <p><b> Application period: </b> 03-03-2020 to 07-04-2020 </p>
                <p><b> Link: </b> <a target="_blank" href="https://www.outreachy.org/"> https://www.outreachy.org/ </a></p>
            </Content>

        </Main>
    )
}

export default Card;
