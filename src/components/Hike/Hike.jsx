import React from 'react';

const Hike = (props) => {
    return(
        <div>
            <div>
                <h3>{props.trail.name}</h3>
                <h5>{props.trail.location}</h5>
                <p>{props.trail.summary}</p>
                Length: <span>{props.trail.length}</span><br />
                Ascent: <span>{props.trail.ascent}</span><br />
                Descent: <span>{props.trail.descent}</span><br />
                Difficulty: <span>{props.trail.difficulty}</span>
                <img src={props.trail.imgSmallMed} alt="Trail"></img>
            </div>
        </div>
    )
}

export default Hike;