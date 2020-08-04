import React, { Component } from 'react';
//import hikeService from '../../services/hikeService';

const Comments = (props) => {
    if(props.comments) {
        console.log(props.comments);
        console.log(props.comments[2]);
        console.log(props.comments[2].content);
        return(
            <div>
                {/* {props.comments[2].content} */}
                {props.comments.map((comment) => (
                <li>{comment.content}</li>
            ))}
            {/*<h1>YAY AGAIN</h1>  SO THIS WORKS BUT THE ABOVE MAP FUNCTION IS UNDEFINED AND LINES 45-6 IN INDIVIDUALHIKE.JSX DON'T EVEN RUN */}
            {/* PRETTY SURE IT'S UNDEFINED BECAUSE OF THE LENGTH DISCREPANCY WHEN ADDING A NEW COMMENT */}
            </div>
        )
    } else {
        return(
            <h1>BOO</h1>
        )
    }
}

export default Comments;