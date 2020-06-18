import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import styled from 'styled-components';
import Search from '../components/search';
import axios from 'axios';

const Main = styled.div`
    background: ghostwhite;
    padding-top: 10%;
    padding-bottom: 5%;
    @media screen and (max-width: 650px){
        padding-top: 15%;
    }
`

function SearchResults(props) {

    useEffect(() => {

        const req = new XMLHttpRequest();
        let API_URL = "/api/items";
        req.open("GET", API_URL);
        req.send();
        req.onload = () => {
            const data = req.responseText;
            var data_received = JSON.parse(data);
            setData(data_received);
        }
    }, []);

    const [apidata, setData] = useState('null');
    console.log("DATA = ", apidata);
    if (apidata === 'null') {
        return (
            <div> <br /><br /><br /> <h1> Loading...</h1> </div >
        )
    }
    else {
        // var oppnames = [];
        // var opptypes = [];
        // apidata.map((e) => {
        //     oppnames.push(e.name);
        //     opptypes.push(e.opp_type);
        // })
        return (

            <Main>

                <center>
                    {
                        apidata.map((e) => {
                            return <Card otype={e.opp_type} name={e.name}
                                link={e.link} description={e.description}
                                gender={e.gender} application_start={e.application_start}
                                application_end={e.application_end} stipend={e.stipend}
                                education={e.education} location={e.location}
                            />
                        })
                    }


                </center>
            </Main>
        )
    }
}
export default SearchResults;