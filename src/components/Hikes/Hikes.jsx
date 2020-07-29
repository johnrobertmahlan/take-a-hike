import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hikes.module.css';

const Hikes = (props) => {
    if(props.trail.imgSmallMed !== '') {
        return(
            <div>
                <div className={styles.trails}>
                    <img src={props.trail.imgSmallMed} alt="Trail"></img>
                    <h3>{props.trail.name}</h3>
                    <h5>{props.trail.location}</h5>
                    <Link to={{pathname: `/hikes/${props.idx}`, state: {idx: props.idx}}}>Learn More!</Link>
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <div className={styles.trails} style={{backgroundColor: 'green'}}>
                    <h3>{props.trail.name}</h3>
                    <h5>{props.trail.location}</h5>
                    <Link to={{pathname: `/hikes/${props.idx}`, state: {idx: props.idx}}}>Learn More!</Link>
                </div>
            </div>
        )
    }
}

export default Hikes;