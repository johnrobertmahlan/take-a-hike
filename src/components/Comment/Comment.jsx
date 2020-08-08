import React from 'react';

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