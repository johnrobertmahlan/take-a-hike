import React from 'react';
import Hikes from '../Hikes/Hikes';

const HikePage = (props) => {
    console.log(props.trails);
    if(props.trails.length) return(
        <div>
            {props.trails.map((trail, idx) => <Hikes trail={ trail } idx={ idx } />)}
        </div>
    ); else return <div>BOO</div>
};

export default HikePage;