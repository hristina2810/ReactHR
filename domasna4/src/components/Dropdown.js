import React from "react";
import propTypes from "prop-types";


export const Dropdowm = ({elements,changeOptions}) => {

    return(
        <p>
            <label htmlFor="app-select"> Choose an app</label>
            <select onChange={changeOptions} name="app-select" id="app-select">
            {
            elements.map((element,i) =>{
                return(
                <option key={i} value={element.value}>
                    {element.name}
                </option>
                )
            })
        }
        </select>
        </p>
        
    )
}


Dropdown.propTypes = {
    elements: propTypes.arrayOf(propTypes.object),
    changeOptions: propTypes.func
}
      