import React  from 'react';
import { Link } from 'react-router-dom';
import styles from './Comments.module.css';

const Comments = (props) => {
    if(props.comments && props.user) {
        console.log(props.comments);
        console.log(props.comments[2]);
        console.log(props.comments[2].content);
        return(
            <div>
                {/* {props.comments[2].content} */}
                {props.comments.map((comment) => (
                <li>{comment.content}</li>
            ))}
                <li>{props.mostRecent}</li>
            </div>
        )
    } else {
        return(
            <div>
                <h4>Want to know what your fellow hikers thought about this trail? Want to share your own thoughts?</h4>
                <div>
                    <Link to="/login" className={styles.authLinks}>LOG IN</Link>
                    &nbsp;&nbsp; or &nbsp;&nbsp;
                    <Link to="/signup" className={styles.authLinks}>SIGN UP</Link>
                </div>
            </div>
        )
    }
}

export default Comments;