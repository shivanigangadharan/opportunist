import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import styled from 'styled-components';
import Search from '../components/search/search';
import axios from 'axios';
import '../components/search/search.css';

const Main = styled.div`
    padding-top: 8%;
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


    const callbackFunction = (childData) => {
        setChildprops({
            education: childData.education,
            gender: childData.gender,
            type: childData.type,
            location: childData.location,
            hide: childData.clicked
        });
    }

    const [apidata, setData] = useState('null');
    const [childprops, setChildprops] = useState();
    var [queryArray, setQueryArray] = useState([]);
    const [hide, setHide] = useState(true);

    console.log("child props = ", childprops);
    console.log("hidden - ", hide);
    console.log("DATA = ", apidata);
    console.log("queryArray = ", queryArray);



    if (apidata === 'null') {
        return (
            //code cleansing required
            <div> <center> <h1 id="h1"> Loading...</h1> </center></div >
        )
    }
    else {
        if (childprops != undefined) {
            queryArray.splice(0, queryArray.length);

            {
                apidata.map((e) => {

                    // ALL FETCHING-RELATED QUERIES

                    if (e.education == childprops.education &&
                        e.opp_type == childprops.type &&
                        (e.location == childprops.location || e.location == "Remote")
                    ) {
                        if (childprops.gender == 'Male') {
                            if (e.gender == 'Male' || e.gender == 'Everyone') {
                                queryArray.push(e);
                            }
                        }
                        else {
                            queryArray.push(e);
                        }

                    }


                })
                if (queryArray.length == 0 &&
                    childprops.education != undefined &&
                    childprops.type != undefined) {
                    alert("Sorry, there are no opportunities currently available for the mentioned requirements.");
                }
            }

        }
        return (

            <Main>
                <Search parentCallback={callbackFunction} />
                {/* code cleansing required */}
                <center>
                    {
                        queryArray.map((e) => {
                            return (
                                <div hidden={childprops == undefined ? true : false}>
                                    <Card otype={e.opp_type} name={e.name}
                                        link={e.link} description={e.description}
                                        gender={e.gender} application_start={e.application_start}
                                        application_end={e.application_end} stipend={e.stipend}
                                        education={e.education} location={e.location}
                                    />
                                </div>
                            )
                        })
                    }


                </center>
            </Main>
        )
    }
}
export default SearchResults;