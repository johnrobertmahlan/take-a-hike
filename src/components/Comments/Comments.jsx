import React from 'react';
import { Link } from 'react-router-dom';
import Comment from '../Comment/Comment.jsx';
import styles from './Comments.module.css';

const Comments = (props) => {

        if(props.comments && props.mostRecent) {
            return(
                <div className={styles.comment}>
                    <h2>Comments</h2>
                        {props.comments.map((comment) => ( 
                        <div className={styles.individualComment}>
                            <Comment content={comment.content} />
                        </div>
                        ))}
                    <div className={styles.individualComment}>
                        <p>{props.mostRecent}</p>
                    </div>
                    <Link className={styles.authLinks} to="/">Return Home</Link>
                </div>
                )
        } else if (props.comments && !props.mostRecent) {
            return(
                    <div className={styles.comment}>
                        <h2>Comments</h2>
                            {props.comments.map((comment) => ( 
                            <div className={styles.individualComment}>
                                <Comment content={comment.content} />
                            </div>
                            ))}
                            <Link className={styles.authLinks} to="/">Return Home</Link>
                </div>
            )
        } else {
            return(
                <div className={styles.comment}>
                    <h3>It looks like nobody has said anything about this hike yet. You could be the first!</h3>
                    <div className={styles.comment}>
                        <h4>Or you could just</h4>
                        <Link className={styles.authLinks} to="/">Return Home</Link>
                    </div>
                </div>
            )

        }
    }


export default Comments;