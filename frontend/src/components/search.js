import React, { useState } from 'react';
import styled from 'styled-components';
import '../components/search.css';
import { Link } from 'react-router-dom';

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
    const [location, setLocation] = useState();
    const [city, setCity] = useState();
    const sendData = () => {
        var click;
        click = 1;
        props.parentCallback({ gender: gender, education: education, type: type, location: location, clicked: false });
        click = click + 1;
        if (education === undefined) {
            alert("Please fill in the education field.");
        }
        else if (location === undefined) {
            alert("Please select the location.");
        }
        else if (type === undefined) {
            alert("Please select the opportunity type.");
        }
    }
    return (
        <Box>
            <center>
                <form>
                    <div className="container">
                        <div className="row">
                            <Select required onChange={e => { setEducation(e.target.value) }}>
                                <option defaultValue>Select highest education</option>
                                <option value="8th pass"> 8th pass </option>
                                <option value="10th pass"> 10th pass </option>
                                <option value="12th pass"> 12th pass </option>
                                <option value="Undergraduate"> Undergraduate </option>
                                <option value="Graduate"> Graduate </option>
                                <option value="Post Graduate"> Post Graduate </option>
                                <option value="Ph. D."> Ph. D. </option>
                            </Select>
                            <Select required onChange={e => { setGender(e.target.value) }}>
                                <option defaultValue>Select gender</option>
                                <option value="Female"> Female </option>
                                <option value="Male"> Male </option>
                                <option value="Transgender"> Transgender </option>
                                <option value="Other"> Other </option>
                            </Select>
                            <Select required onChange={e => { setType(e.target.value) }}>
                                <option defaultValue>Select opportunity type</option>
                                <option value="Internship"> Internship </option>
                                <option value="Open-source prog"> Open source program </option>
                                <option value="Community event"> Community event </option>
                                <option value="Hackathon"> Hackathon </option>
                            </Select>
                            <Select required onChange={e => { setLocation(e.target.value) }}>
                                <option defaultValue>Select Location</option>
                                <option value="India"> Asia </option>
                                <option value="USA"> North America </option>
                                <option value="India"> South America </option>
                                <option value="UK"> Europe </option>
                                <option value="Singapore"> Africa </option>
                                <option value="Remote"> Remote </option>
                            </Select>
                            {/* <Select required onChange={e => { setCity(e.target.value) }}>
                                <option defaultValue>Select city</option>
                                <option value="Delhi"> Delhi </option>
                                <option value="London"> London </option>
                                <option value="Los Angeles"> Los Angeles </option>
                                <option value="All"> All </option>
                            </Select> */}
                        </div>
                    </div>
                    <Link onClick={sendData} to={
                        {
                            pathname: '/search-results',
                            params: {
                                type: { type },
                                gender: { gender },
                                education: { education },
                                location: { location },
                                city: { city }
                            }
                        }
                    }>
                        <input id="findopp" type="submit" value="Find opportunities" />
                    </Link>
                </form>
            </center>
        </Box >
    )
}

export default Search;