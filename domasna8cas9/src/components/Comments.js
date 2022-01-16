import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommentfetchCommentsRequest } from "../actions/CommentsActions";
import {Link} from 'react-router-dom';


export const Comments = () => {
    const dispatch = useDispatch();
    const comments = useSelector(state=> state.CommentsReducer.comments);
    const error = useSelector(state=> state.CommentsReducer.error)

    useEffect(()=>{
        dispatch(fetchCommentsRequest())
    },[dispatch])

    return(
        <div id="commnets">
    
        <label>Remove your comment by id</label>
    <input 
    type="number" 
    id="brisi-komentar"
    onChange={(event) => {
        if(event.target.value <1) {
            document.getElementById("button-delete").disabled = true
        }
        else{
            document.getElementById("button-delete").disabled = false
        }
    }}
/>
<button
id="button-delete"
onClick={(event) => {   //koga ke se klikne da se izgubi
    dispatch(
        deleteComment(document.getElementById("brisi-komentar"))
    )
}}
>
Delete
</button>
{error !== undefined && <p>{error}</p>}
        <ul>
        {comments.map(comment=>{
            return(
                <li key={comment.id}>
                    <span>{comment.id}</span> &nbsp;
                  <span>{comment.name}</span> &nbsp;
                  <span><Link to={`/comments/${comment.id}`}> Details... </Link></span>
                </li>
            )
        })}
        </ul>
        </div>
    )
}
