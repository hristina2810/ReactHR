const initialState = {
    driving_car : "Initial Value",
    driving_bus : "Initial Value"
}

export const DriveReducer = (state = initialState, action) => {
    switch (action.type){
    case "DRICE_CAR" :
        return {
            ...state,
            driving_car: action.car
        };
    case "DRIVE_BUS" :
        return {
            ...state,
            driving_bus: action.bus
        };
        
}
}