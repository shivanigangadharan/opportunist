import React, { useState } from 'react';

function Search() {
    const [gender, setGender] = useState('Select');
    const [education, setEducation] = useState();
    console.log(gender)
    return (
        <div>

            <form>
                Highest educational qualification: &emsp;
<select onChange={e => { setEducation(e.target.value) }}>
                    <option value="10th pass"> 10th pass </option>
                    <option value="12th pass"> 12th pass </option>
                    <option value="Graduate"> Graduate </option>
                    <option value="Post Graduate"> Post Graduate </option>
                    <option value="Ph. D."> Ph. D. </option>
                </select><br />
                Gender: &emsp;
<select onChange={e => { setGender(e.target.value) }}>
                    <option value="Female"> Female </option>
                    <option value="Male"> Male </option>
                    <option value="Transgender"> Transgender </option>
                    <option value="Other"> Other </option>
                </select>
            </form>
            <button> Find opportunities </button>
        </div>
    )
}

export default Search;