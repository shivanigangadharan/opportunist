import React from 'react';
import Card from '../components/card';
import styled from 'styled-components';
import Navbar from '../components/navbar';

const Main = styled.div`
    background: ghostwhite;
    padding-top: 10%;
    padding-bottom: 5%;
`

function SearchResults() {
    return (
        <Main>
            <Navbar />

            <center>

                <Card />
                <Card />
                <Card />
            </center>
        </Main>
    )
}

export default SearchResults;