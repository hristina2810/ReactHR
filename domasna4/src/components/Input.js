import React from "react";
import propTypes from 'prop-types';

export const Input = ({type,placeholder,name,value,onChange,toggle,renderTextArea,changeInput}) =>{

    return(
        <p id="input">
        { renderTextArea ?
            <textarea rows={12} cols={24}
            value={value}
            onChange={onChange}
            />
            :
            <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            />
        }
            {name === "password" && <button type="button" className='eye-button' onClick={toggle}>
            <i className={type === "password" ?'fa fa-eye-slash' : 'fa fa-eye'}></i>
      </button>}
     
      {name === "comment" && <button type="button" className='eye-button' onClick={changeInput}>
      <i className={renderTextArea ?'fa fa-comment' : 'fa fa-comments-o'}></i>
      </button>}
    </p>
    )
    
}




Input.propTypes = {
    type:propTypes.string.isRequired,
    placeholder:propTypes.string.isRequired,
    value:propTypes.string.isRequired,
    onChange:propTypes.func.isRequired,
    name:propTypes.string,
    toggle:propTypes.func,
    renderTextArea:propTypes.bool,
    changeInput:propTypes.func
}