import React from 'react';
import Comment from '../Comment/Comment.jsx';
import styles from './Comments.module.css';

const Comments = (props) => {

        if(props.comments) {
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
                </div>
                )
        } else {
            return(
                <div className={styles.comment}>
                    <h3>It looks like nobody has said anything about this hike yet. You could be the first!</h3>
                </div>
            )
        }
    }


export default Comments;