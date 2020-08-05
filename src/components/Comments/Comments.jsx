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
                <h3>If you want to see what your fellow hikers thought about this hike, please <Link to="/login" className={styles.authLinks}>LOG IN</Link></h3>    
            </div>
        )
    }
}

export default Comments;