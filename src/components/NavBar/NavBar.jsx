import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = (props) => {
    return(
        <div className='NavBar'>
            {props.user ?
                <div>
                    <Link to="" onClick={props.handleLogOut} className={styles.authLinks}>LOG  OUT</Link>
                    &nbsp;&nbsp; | &nbsp;&nbsp;
                    <span  className="NavBar-welcome">Welcome, {props.user.name}!</span>
                </div>
                    :
                <div>
                    <Link to="/login" className={styles.authLinks}>LOG IN</Link>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to="/signup" className={styles.authLinks}>SIGN UP</Link>
                </div>
            }
        </div>
    )
}

export default NavBar;