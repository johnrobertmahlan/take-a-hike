import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CityForm.module.css';

const CityForm = (props) => {
    return(
        <div className={styles.cityForm}>
            <div className={styles.cityFormLayer}>
                Enter a City: <br />
                <input value={props.city} onChange={props.handleEnterCity}/>
                <Link className={styles.cityFormLink} to="/hikes" onClick={props.updateCity}>Find Hikes</Link>
            </div>
        </div>
    );
}

export default CityForm;