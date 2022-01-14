const initialState = {
    cleaning_house: "Initial Value",
    cleaning_yard: "Initial Value"
}

export const CleanReducer = ( state = initialState, action) => {
    switch (action.type) {
        case "CLEAN_HOUSE":
            return {
                ...state,
                cleaning_house: action.house
            };
        case "CLEAN_YARD":
            return {
                ...state,
                cleaning_yard: action.yard
            };
           
    }
}