import React from 'react';

const HikePage = (props) => {
    if(props.trails.length) return(
        <div>
            {props.trails.map((trail) => <li>{trail.name}</li>)} {/* Instead of <li>, I  will want a component for each trail*/}
        </div>
    ); else return <div>BOO</div>
};

export default HikePage;