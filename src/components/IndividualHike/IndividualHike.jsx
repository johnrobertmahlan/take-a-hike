import React from 'react';

const IndividualHike = (props) => {
    console.log(props);
    console.log(props.match.params.id);
    console.log(props.trails);
    console.log(props.location.state.idx);
    
    return(
        <div>
            <div>
                <img src={props.trails[props.location.state.idx].imgMedium} alt="Trail" />
                <h2>{props.trails[props.location.state.idx].name}</h2>
                <h4>{props.trails[props.location.state.idx].summary}</h4>
                <p>The {props.trails[props.location.state.idx].name} is {props.trails[props.location.state.idx].length} miles long, with an ascent of {props.trails[props.location.state.idx].ascent} feet and a descent of {Math.abs(props.trails[props.location.state.idx].descent)} feet.</p>
                <br />
                
            </div>
            {/* {props.trails[props.location.state.idx].name} */}
        </div>
    )
}

export default IndividualHike;