import React from 'react';
import styled from 'styled-components';

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
    var otype = props.otype;
    var name = props.name;
    var link = props.link;
    var description = props.description;
    var gender = props.gender;
    var startdate = props.application_start;
    var enddate = props.application_end;
    var stipend = props.stipend;
    var education = props.education;
    var location = props.location;
    return (
        <Main>
            {/* <Img src="https://pbs.twimg.com/profile_images/561419803202568194/Pjk5iqNn_400x400.png" /> */}
            <Content>
                <Title> {name} </Title>
                <Type> {otype} </Type>
                <Summary>
                    {description}                </Summary>
                <p><b> Target gender: </b> {gender} </p>
                <p><b> Eligibility: </b> {education} </p>
                <p><b> Location: </b> {location} </p>
                <p><b> Stipend: </b> {stipend} </p>
                <p><b> Application starts: </b> {startdate} </p>
                <p><b> Application ends: </b> {enddate} </p>
                <p><b> Link: </b> <a target="_blank" rel="noopener noreferrer" href={link}> {link} </a></p>
            </Content>

        </Main>
    )
}

export default Card;
