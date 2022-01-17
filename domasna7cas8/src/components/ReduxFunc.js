import React, { useEffect } from 'react';
import { cleanHouse,cleanYard } from './../actions/CleanAction';
import { useDispatch, useSelector } from 'react-redux';


 export const ReduxFunc = () => {
    const dispatch = useDispatch();
    const house = useSelector(state => state.CleanReducer.cleaning_house);
    const yard = useSelector(state => state.CleanReducer.cleaning_yard);

useEffect(()=>{
    dispatch(cleanHouse());
    dispatch(cleanYard());
},[dispatch])

return(
    <div id="redux-func">
        <h2>Redux Functional Component:</h2>
        <p>{house}</p>
        <p>{yard}</p>
    </div>
)
}


