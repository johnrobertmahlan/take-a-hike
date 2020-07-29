import React from 'react';
import Hike from '../Hike/Hike';

const HikePage = (props) => {
    console.log(props.trails);
    if(props.trails.length) return(
        <div>
            {props.trails.map((trail) => <Hike trail={ trail } />)}
        </div>
    ); else return <div>BOO</div>
};

export default HikePage;