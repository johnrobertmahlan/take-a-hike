import React from 'react';
import Comment from '../Comment/Comment.jsx';
import styles from './Comments.module.css';

const Comments = (props) => {

        if(props.comments) {
            return(
                <div className={styles.comment}>
                    {props.comments.map((comment) => ( 
                        <Comment content={comment.content} /> 
                    ))}
                    <li>{props.mostRecent}</li>
                </div>
                )
        } else {
            return(
                <div>
                    <h3>It looks like nobody has said anything about this hike yet. You could be the first!</h3>
                </div>
            )
        }
    }


export default Comments;