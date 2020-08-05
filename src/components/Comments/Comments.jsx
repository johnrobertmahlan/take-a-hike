import React from 'react';

const Comments = (props) => {

        if(props.comments) {
            return(
                <div>
                    {props.comments.map((comment) => (
                    <li>{comment.content}</li>
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