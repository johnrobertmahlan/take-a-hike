import React from 'react';

const IndividualHike = (props) => {
    return(
        <div>
            <div>
                <img src={props.trails[props.location.state.idx].imgMedium} alt="Trail" />
                <h2>{props.trails[props.location.state.idx].name}</h2>
                <h3>{props.trails[props.location.state.idx].location}</h3>
                <h4>{props.trails[props.location.state.idx].summary}</h4>
                <p>The {props.trails[props.location.state.idx].name} is {props.trails[props.location.state.idx].length} miles long, reaching a height of {props.trails[props.location.state.idx].high} feet.</p><br />
                <p>The hike has an ascent of {props.trails[props.location.state.idx].ascent} feet and a descent of {Math.abs(props.trails[props.location.state.idx].descent)} feet.</p>
                {/* DO SOMETHING WITH LEVEL OF DIFFICULTY */}
            </div>
        </div>
    )
}

export default IndividualHike;