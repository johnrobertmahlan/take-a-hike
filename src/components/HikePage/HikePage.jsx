import React from 'react';
import Hikes from '../Hikes/Hikes';
import styles from './HikePage.module.css';

const HikePage = (props) => {
    console.log(props.trails);
    if(props.trails.length) return(
        <div className={styles.trailDisplay}>
            {props.trails.map((trail, idx) => <Hikes trail={ trail } idx={ idx } />)}
        </div>
    ); else return <div>BOO</div>
};

export default HikePage;