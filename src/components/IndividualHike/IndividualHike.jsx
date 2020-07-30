import React from 'react';
import styles from './IndividualHike.module.css';

const IndividualHike = (props) => {
    return(
        <div className={styles.individualHike}>
            <div className={styles.individualHikeImage} style={{backgroundImage: `url(${props.trails[props.location.state.idx].imgMedium})`, backgroundSize: 'cover'}}>
                <div className={styles.individualHikeImageLayer}>
                    <h1>{props.trails[props.location.state.idx].name}</h1>
                </div>
            </div>
            <div className={styles.individualHikeInfo}>
                <h3>{props.trails[props.location.state.idx].location}</h3>
                <h4>{props.trails[props.location.state.idx].summary}</h4>
                <p>The {props.trails[props.location.state.idx].name} is {props.trails[props.location.state.idx].length} miles long, reaching a height of {props.trails[props.location.state.idx].high} feet.</p>
                <p>The hike has an ascent of {props.trails[props.location.state.idx].ascent} feet and a descent of {Math.abs(props.trails[props.location.state.idx].descent)} feet.</p>
            </div>
                {/* DO SOMETHING WITH LEVEL OF DIFFICULTY */}
            </div>
        // </div>
    )
}

export default IndividualHike;