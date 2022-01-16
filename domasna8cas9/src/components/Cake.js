import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake,addCakes,reduceCakes,restockCakes } from './../actions/CakeActions';

export const Cake = () => {
     
    const dispatch = useDispatch();
    const cakes = useSelector(state=> state.CakeReducer.cakes);
    const message = useSelector(state=> state.CakeReducer.message);

return(
    <div id="cake">
        <h2>Cakes: {cakes}</h2>
        {message !== undefined && <p>{message}</p>}
        <button disabled={cakes <1} onClick={()=>{dispatch(buyCake(1))}}>Buy 1 Cake</button>
<br/>
<br/>
<input
type="number"
id="potroseni-torti"
placeholder='Preostanati torti'
onChange={(event)=>{
   if (cakes - event.target.value < 0 ) { 
        return(event.target.value = cakes)
   }
   if(event.target.value <0 ) {
       document.getElementById("potroseni-torti").disabled=true
   }else {
    document.getElementById("potroseni-torti").disabled=false

   }
}}
/>
<button id="prodadeni-torti" disabled={cakes < 1} onClick={()=>{
    if(document.getElementById("potroseni-torti".value === "")){
        document.getElementById("potroseni-torti").value = 0
    }
     dispatch(addCakes(+document.getElementById("potroseni-torti").value)) // da ni dade brojka stavame +
}}
>
  Potroseni torti  
</button>
    <br/>
    <br/>
    <input 
    type="number"
    id="dodavanje-torti"
    placeholder='Imame na zaliha'
    onChange={(event) => {
        if (event.target.value <0) {
            document.getElementById("dodadi").disabled=true
        }
        else{
            document.getElementById("dodadi").disabled=false
        }
    }}
    />
    <button id="dodadi" onClick={() =>{dispatch(restockCakes())}}>
        Restock
    </button>
    </div>
)
}
