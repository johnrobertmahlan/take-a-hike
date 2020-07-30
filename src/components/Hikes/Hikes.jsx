import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hikes.module.css';

const Hikes = (props) => {
    if(props.trail.imgMedium !== '') {
        return(
            <div className={`${styles.slide} slide`}>
                <h3>{props.trail.name}</h3>
                <img src={props.trail.imgMedium} alt="Trail"></img>
                <Link className={styles.individualHikeLink} to={{pathname: `/hikes/${props.idx}`, state: {idx: props.idx}}}>Learn More!</Link>
            </div>
        )
    } else {
        return(
            <div className={`${styles.slide} slide`}>
                {/* <img src={props.trail.imgSmallMed} alt="Trail"></img> MAYBE I'LL HAVE TO USE A DUMMY IMAGE HERE, LIKE MY LOGO? */}
                <h3>{props.trail.name}</h3>
                <Link className={styles.individualHikeLink} to={{pathname: `/hikes/${props.idx}`, state: {idx: props.idx}}}>Learn More!</Link>
            </div>
        )
    }
}

export default Hikes;