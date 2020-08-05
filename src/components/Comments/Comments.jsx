import React from 'react';
import Comment from '../Comment/Comment.jsx';

const Comments = (props) => {

        if(props.comments) {
            return(
                <div>
                    {props.comments.map((comment) => (
                    <Comment content={comment.content} />
                ))}
                    <li>{props.mostRecent}</li>
                </div>
            )
        } else {
            return(
                <div>
                    BOO
                </div>
            )
        }
    }

export default Comments;