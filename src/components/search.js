import React, { useState } from 'react';
import styled from 'styled-components';
import '../components/search.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Box = styled.div`
    border-radius: 4px;
    padding-top: 5vh;
    text-align: center;
    @media screen and (max-width: 991px){
        padding-bottom: 4%;
    }
    @media screen and (max-width: 700px){
        padding-bottom: 6%;
    }
`
const Select = styled.select`
    width: 30%;
    outline: none;
    background: white !important;
    @media screen and (max-width: 991px){
        width: 40%;
    }
    @media screen and (max-width: 700px){
        width: 80%;
    }
    `


function Search(props) {
    const [gender, setGender] = useState('Select');
    const [education, setEducation] = useState();
    const [type, setType] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState();

    const [apidata, setData] = useState();
    function getData() {
        axios.get('/api/items').then(res => {
            const data = res.data;
            setData(data);
            console.log("data = ", apidata);
        });

        // console.log("gender = ", gender);
        // console.log("education = ", education);
        // console.log("type = ", type);
        // console.log("country = ", country);
        // console.log("city = ", city);

    }

    return (
        <Box>
            <center>
                <form>
                    <div className="container">
                        <div className="row">
                            <Select required onChange={e => { setEducation(e.target.value) }}>
                                <option selected>Select highest education</option>
                                <option value="8th pass"> 8th pass </option>
                                <option value="10th pass"> 10th pass </option>
                                <option value="12th pass"> 12th pass </option>
                                <option value="Graduate"> Graduate </option>
                                <option value="Post Graduate"> Post Graduate </option>
                                <option value="Ph. D."> Ph. D. </option>
                            </Select>
                            <Select onChange={e => { setGender(e.target.value) }}>
                                <option selected>Select gender</option>
                                <option value="Female"> Female </option>
                                <option value="Male"> Male </option>
                                <option value="Transgender"> Transgender </option>
                                <option value="Other"> Other </option>
                            </Select>
                            <Select onChange={e => { setType(e.target.value) }}>
                                <option selected>Select opportunity type</option>
                                <option value="Internship"> Internship </option>
                                <option value="Open source program"> Open source program </option>
                                <option value="Community event"> Community event </option>
                                <option value="Hackathon"> Hackathon </option>
                            </Select>
                            <Select onChange={e => { setCountry(e.target.value) }}>
                                <option selected>Select Country</option>
                                <option value="India"> India </option>
                                <option value="USA"> USA </option>
                                <option value="UK"> UK </option>
                                <option value="Singapore"> All </option>
                            </Select>
                            <Select onChange={e => { setCity(e.target.value) }}>
                                <option selected>Select city</option>
                                <option value="Delhi"> Delhi </option>
                                <option value="London"> London </option>
                                <option value="Los Angeles"> Los Angeles </option>
                                <option value="All"> All </option>
                            </Select>
                        </div>
                    </div>
                    <Link to={
                        {
                            pathname: '/search-results',
                            params: {
                                type: { type },
                                gender: { gender },
                                education: { education },
                                country: { country },
                                city: { city }
                            }
                        }
                    } onClick={getData}>
                        <input id="findopp" type="submit" value="Find opportunities" />
                    </Link>
                </form>
            </center>
        </Box >
    )
}

export default Search;