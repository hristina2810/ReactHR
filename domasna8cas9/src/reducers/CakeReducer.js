import { BUY_CAKE, RESTOCK_CAKES, ADD_CAKE, REDUCE_CAKE } from "../constants/CakeConstants";

const initialState = {
    cakes: 10,
    message: undefined
}


const CakeReducer = (state=initialState, action) =>{

    switch (action.type) {
        case BUY_CAKE:
            if(state.cakes - action.payload < 0 ) {
                return{
                    ...state,
                    message: `Nema veke torti`
                }
            
            }
             else{
                 return{
                     ...state,
                     cake: state.cakes -action.payload,
                     message: undefined
                 }
             }

             case ADD_CAKE:
                 return {
                     ...state,
                     cakes: state.cakes - action.payload,
                     message: undefined

                 }

             case REDUCE_CAKE:
                 return{
                     ...state,
                     cakes: state.cakes + action.payload,
                     message: undefined
                 }    

             case RESTOCK_CAKES:
                 return{
                     ...state,
                     cakes: action.payload,
                 }
                 default: return state
    } 
}

export default CakeReducer;