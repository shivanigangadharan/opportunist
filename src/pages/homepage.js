import React from 'react';
import Search from '../components/search';
import { Link } from 'react-router-dom';
// import { } from './assets/background/clouds.jpg'

function Homepage() {
    return (
        <div><br /><br /><br /><br /><br /><br /><br />
            <h1> Welcome </h1>
            Click below to search for opportunites :-

            <Link to="/search"> <button> Search </button> </Link>
        </div>
    )
}

export default Homepage;