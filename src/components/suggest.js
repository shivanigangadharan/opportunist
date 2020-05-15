import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    border-left: 2px solid lightgrey;
    padding-left: 3%;
    margin-top: 22vh;
    margin-left: 5%;
    margin-right: 5%;
    `
const Select = styled.select`
    border: 1px solid lightgray;
    border-radius: 4px;
    padding: 0.5%;
    width: 35%;
    margin: 1%;
    @media screen and (max-width: 830px){
        width: 70%;
    }
`
const Input = styled.input`
    border: none;
    border-bottom: 2px solid grey;
    padding-bottom: 1%;
    font-size: 120%;
    width: 35%;
    margin: 1%;
    outline: none;
    color: rgb(4, 4, 97);
    @media screen and (max-width: 830px){
        width: 70%;
    }
`
function Suggest() {
    return (
        <div>
            <Main>
                <h2> Help others by submitting more opportunities that you're aware of. </h2>
                <h5> Fill in this very small form below so that we can update and help more people avail such benefits. Please make sure that the opportunity you're submitting isn't already listed on this website. </h5>
                <form>
                    <Select>
                        <option selected>Select opportunity type</option>
                        <option value="Internship"> Internship </option>
                        <option value="Open source program"> Open source program </option>
                        <option value="Community event"> Community event </option>
                        <option value="Hackathon"> Hackathon </option>
                    </Select>
                    <Select>
                        <option selected>Select target gender</option>
                        <option value="Female"> Female </option>
                        <option value="Male"> Male </option>
                        <option value="Transgender"> Transgender </option>
                        <option value="Other"> Other </option>
                        <option value="All genders are welcome"> All genders are welcome </option>
                    </Select>
                    <Input type="text" placeholder="Enter name of the opportunity" />
                    <Input type="text" placeholder="Add link to its official site" />

                </form>

            </Main>
        </div>
    )
}

export default Suggest;