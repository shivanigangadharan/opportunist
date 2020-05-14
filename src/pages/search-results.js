import React from 'react';
import Card from '../components/card';
import styled from 'styled-components';
import Navbar from '../components/navbar';

const Main = styled.div`
    background: ghostwhite;
    padding-top: 15%;
    padding-bottom: 5%;
`

function SearchResults() {
    return (
        <Main>
            <Navbar />

            <center>

                <Card type="OPEN SOURCE PROGRAM" />
                <Card type="INTERNSHIP" />
                <Card type="COMMUNITY EVENT" />
            </center>
        </Main>
    )
}

export default SearchResults;