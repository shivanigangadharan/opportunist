import React from 'react';
import axios from 'axios';


function getData() {
    axios.get('/api/items').then(res => {
        const data = res.data;
        console.log("data = ", data);
    });
}



function Fetch() {

    return (
        <div><br /><br /><br /><br /><br /><br />
            hi
            <button onClick={getData}> GET </button>

        </div>
    )
}

export default Fetch;