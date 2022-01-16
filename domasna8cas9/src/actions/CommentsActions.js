import {FETCH_COMMENTS_FAIL,FETCH_COMMENTS_SUCCESS,DELETE_COMMENT} from './../constants/CommentsConstants';

export const fetchCommentsSuccess = (comments) => { 
    return{
        type:FETCH_COMMENTS_SUCCESS,
        payload: comments 
    }
}

export const fetchCommentsFail = (error) => { 
    return{
        type: FETCH_COMMENTS_FAIL,
        payload: error 
    }
}

export const deleteComment = (id) => {
    return dispatch => {
        fetch("https://jsonplaceholder.typicode.com/comments/" + id, {
            method: "DELETE",
    })
    .then(res => res.json())
    .then(json => dispatch(deleteComment(json)))
    .catch((error) => dispatch(fetchCommentsFail(error)))

    dispatch({
        type: DELETE_COMMENT,
        payload: id
    })
    }
}

export const fetchCommentsRequest = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res=> res.json()) 
            .then(json=> dispatch(fetchCommentsSuccess(json))) 
            .catch(err=> dispatch(fetchCommentsFail(err))) 
    }
}