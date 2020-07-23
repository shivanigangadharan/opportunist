import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    box-shadow: 1px 1px 1px 1px white;
    padding: 2%;
    width: 98%;
    border-radius: 3px;
    display: flex;
    margin-bottom: 2%;
    @media screen and (max-width: 700px){
        flex-direction: column;
        width: 95%;
        margin-bottom: 5%;
        margin-top: 9%;
        padding: 5%;
        padding-top: 5%;

    }
`
const Content = styled.div`
    border: 2px solid white;
    width: 100%;
    background: ghostwhite;
    border-radius: 3px;
    box-shadow: 1px 1px 3px 1px lightgrey;
    padding: 1.3%;
    margin-left: 2%;
    text-align: left;
    :hover{
        box-shadow: 3px 3px 5px 1px darkgrey;
        transition-duration: 0.5s;
    }
    @media screen and (max-width: 700px){
        margin:0;
        padding: 2%;
    }
`

const Name = styled.text`
    font-weight: bold;
`
const Summary = styled.p`
    margin-top: 0.5%;
    @media screen and (max-width: 700px){
        margin-top: 2%;
    }
`
const Type = styled.div`
    border: 1px solid #2c0182;
    color: #2c0182;
    float: right;
    font-size: 60%;
    border-radius: 100px;
    padding: 0.4%;
    margin-left: 2%;
    margin-bottom: 2%;
    @media (max-width: 700px){
        margin-top: 2%;
    }
`
const P = styled.p`
    display: flex;
    flex-direction: row;
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
    if (education == 'Everyone') {
        education = 'Anyone can apply, check the site for more details.';
    }
    var location = props.location;
    var one = '';
    var two = '';
    var three = '';
    if (gender.length == 1) {
        var one = gender[0]
    }
    else if (gender.length == 3) {
        var one = gender[0];
        var two = gender[1];
        var three = gender[2];
    }
    function showGender() {
        if (gender.length == 1) {
            return (<div>{one} </div>);
        }
        else {
            return (
                <div>
                    {one}, {two} and {three}
                </div>
            )
        }

    }
    return (
        <Main>
            {/* <Img src="https://pbs.twimg.com/profile_images/561419803202568194/Pjk5iqNn_400x400.png" /> */}
            <Content>
                <Name> {name} </Name>
                <Type> {otype.toUpperCase()} </Type>
                <Summary>
                    {description}                </Summary>
                <P><b> Target gender : &nbsp; </b>
                    {showGender()}
                </P>
                <p><b> Eligibility : </b> {education} </p>
                <p><b> Location : </b> {location} </p>
                <p><b> Stipend : </b> {stipend} </p>
                <p><b> Application starts : </b> {startdate} </p>
                <p><b> Application ends : </b> {enddate} </p>
                <p style={{ 'display': 'inline' }}><b> Link: </b> <a target="_blank" rel="noopener noreferrer" href={link}> {name} </a></p>
            </Content>

        </Main>
    )
}

export default Card;
