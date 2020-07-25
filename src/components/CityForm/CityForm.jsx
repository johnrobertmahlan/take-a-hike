import React from 'react';
import { Link } from 'react-router-dom';

const CityForm = (props) => {
    return(
        <div>Enter a City: <br />
            <input value={props.city} onChange={props.handleEnterCity}/>
            <Link to="/hikes" onClick={props.updateCity}>Find Hikes</Link>
        </div>
    );
}

export default CityForm;