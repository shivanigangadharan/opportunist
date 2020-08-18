import React, { useState } from 'react';
import styled from 'styled-components';
import '../search/search.css';
import { Link } from 'react-router-dom';

const Box = styled.div`
    padding-top: 3vh;

`
const Select = styled.select`
    // width: 30%;
    outline: none;
    // background: white !important;
    @media screen and (max-width: 991px){
        width: 40%;
    }
    @media screen and (max-width: 700px){
        width: 80%;
    }
    `
const Img = styled.img`
    width: 40vw;
    @media (max-width: 700px){
        display:none;
    }
`

function Search(props) {
    const [gender, setGender] = useState();
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
        // else if (location === undefined) {
        //     alert("Please select the location.");
        // }
        else if (type === undefined) {
            alert("Please select the opportunity type.");
        }
    }
    return (
        <Box>
            <center>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <form>
                                <Select required onChange={e => { setEducation(e.target.value) }}>
                                    <option defaultValue> *Select current education status</option>
                                    <option value="High School"> High School </option>
                                    <option value="Undergraduate"> Undergraduate </option>
                                    <option value="Graduate"> Graduate </option>
                                    <option value="Not enrolled"> Everyone </option>
                                </Select>
                                <Select required onChange={e => { setGender(e.target.value) }}>
                                    <option defaultValue>Select gender</option>
                                    <option value="Female"> Female </option>
                                    <option value="Transgender"> Transgender </option>
                                    <option value="Male"> Male </option>
                                    <option value="Other"> Other </option>
                                </Select>
                                <Select required onChange={e => { setType(e.target.value) }}>
                                    <option defaultValue>*Select opportunity type</option>
                                    <option value="Open-source program"> Open source program </option>
                                    <option value="Mentorship program"> Mentorship program </option>
                                    <option value="Scholarship"> Scholarship </option>
                                    <option value="Community event"> Community event </option>
                                </Select>
                                <Select required onChange={e => { setLocation(e.target.value) }}>
                                    <option defaultValue>Select Location</option>
                                    <option value="Asia"> Asia </option>
                                    <option value="North America"> North America </option>
                                    <option value="South America"> South America </option>
                                    <option value="Europe"> Europe </option>
                                    <option value="Africa"> Africa </option>
                                    <option value="Oceania"> Oceania </option>
                                    <option value="Remote"> Remote </option>
                                </Select>
                                <center>
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
                                </center>
                            </form>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <Img src={require('../../assets/images/search.png')} />
                        </div>
                    </div>
                </div>
            </center>
        </Box >
    )
}

export default Search;