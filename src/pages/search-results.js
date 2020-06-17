import React, { useState } from 'react';
import Card from '../components/card';
import styled from 'styled-components';
import Search from '../components/search';

const Main = styled.div`
    background: ghostwhite;
    padding-top: 10%;
    padding-bottom: 5%;
    @media screen and (max-width: 650px){
        padding-top: 15%;
    }
`

function SearchResults(props) {
    console.log('props = ', props.location.params);
    const oppType = props.location.params.type.type;
    const oppEducation = props.location.params.type.education;
    const oppGender = props.location.params.type.gender;
    const oppCountry = props.location.params.type.country;
    const oppCity = props.location.params.type.city;
    console.log("Gender = ", oppGender);


    return (
        <Main>

            <center>

                <h1> hello </h1>
                <Card type={oppType} />
                {/* <Card type="INTERNSHIP" />
                <Card type="COMMUNITY EVENT" /> */}


            </center>
        </Main>
    )
}

export default SearchResults;