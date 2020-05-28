import Collapse from 'react-bootstrap/Collapse';
import React, { useState } from 'react';
import Search from '../components/search';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import clouds from '../assets/background/clouds.jpg';

const Main = styled.div`
    background-image: url(${clouds});
    height: 101vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(0.5);

`

const Start = styled.div`
    color: black;
    margin-top: 5vh;
    padding-top: 70px;
    padding-left: 5vw;
    padding-right: 5vw;
    @media screen and (max-width: 700px){
        padding-left: 5%;
        padding-right: 5%;
    }
`
const Go = styled.button`
    background: white;
    color: black;
    font-weight: bold;
    font-size: 120%;
    padding: 1%;
    border: 2px solid white;
    outline: none;
    :hover{
        background: black;
        color: white;
        transition-duration: 0.5s;
        border: 2px solid black;

    }
`
const SearchDiv = styled.div`
    transition-duration: 0.5s;
`
function Homepage() {
    // const [showSearch, setShowSearch] = useState(false);
    // const [boxText, setBoxText] = useState('TRY IT');
    // function Display() {
    //     setShowSearch(!showSearch);
    //     if (boxText == "TRY IT") {
    //         setBoxText("CLOSE");
    //     }
    //     else {
    //         setBoxText("TRY IT");
    //     }
    // }
    return (
        <Main>
            <Start>
                <h1> Missing out on amazing opportunities? Look no further. </h1>
                <h3> Find high quality and well curated set of all the opportunities awaiting you using this search tool. </h3>
                <br />

                {/* <Go onClick={Display}
                    aria-controls="example-collapse-text"
                    aria-expanded={showSearch}> {boxText} </Go> */}

            </Start>
            {/* <Collapse in={showSearch}>
                <div id="example-collapse-text">
                    <br /> */}
            <Search />
            {/* </div>
            </Collapse> */}
        </Main >
    )
}

export default Homepage;