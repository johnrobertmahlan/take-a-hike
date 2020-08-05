import React from 'react';
import styles from './Comment.module.css';

const Comment = (props) => {
    return(
        <div>
            <div>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Comment;