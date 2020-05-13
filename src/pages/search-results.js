import React from 'react';
import Card from '../components/card';
import styled from 'styled-components';

const Main = styled.div`
    background: ghostwhite;
    padding-top: 5%;
    padding-bottom: 5%;
`

function SearchResults() {
    return (
        <Main>
            <center>
                <Card />
                <Card />
                <Card />
            </center>
        </Main>
    )
}

export default SearchResults;