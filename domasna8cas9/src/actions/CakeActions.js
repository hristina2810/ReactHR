import { BUY_CAKE, RESTOCK_CAKES, ADD_CAKE, REDUCE_CAKE } from './../constants/CakeConstants';

export const buyCake = (numberOfCakes) => {
    return{
        type: BUY_CAKE,
        payload: numberOfCakes,
        message: undefined //ne mi davaj nisto 
    }
}

export const restockCakes = () => {
    return{
        type: RESTOCK_CAKES,
        payload: 10,
        message: undefined //ne mi davaj nisto
    }
}

 export const addCakes = (numberOfCakes) => { 
      return{
          type: ADD_CAKE,
          payload: numberOfCakes,
          message: undefined
      }
    }
 export const reduceCakes = (numberOfCakes) => { 
        return{
            type: REDUCE_CAKE,
            payload: numberOfCakes,
            message: undefined
        }

 }     
 