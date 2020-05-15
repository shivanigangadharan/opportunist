import React from 'react';
import Card from '../components/card';
import styled from 'styled-components';

const Main = styled.div`
    background: ghostwhite;
    padding-top: 10%;
    padding-bottom: 5%;
    @media screen and (max-width: 650px){
        padding-top: 15%;
    }
`

function SearchResults() {
    return (
        <Main>

            <center>

                <Card type="OPEN SOURCE PROGRAM" />
                <Card type="INTERNSHIP" />
                <Card type="COMMUNITY EVENT" />
            </center>
        </Main>
    )
}

export default SearchResults;