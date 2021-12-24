import React from "react";
import PropTypes from 'prop-types';

export const Input = ({tip,placeholder,name,value,onChange,toggle}) =>{

    return(
        <p>
            <input
            type={tip}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            />
            {name === "password" && <button type="button" className='eye-button' onClick={toggle}>
            <i className={tip === "password" ?'fa fa-eye-slash' : 'fa fa-eye'}></i>
      </button>}
       </p>,
       <p>
           <input
             type={tip}
             placeholder={placeholder}
             name={name}
             value={value}
             onChange={onChange}
             />
            {name === "text message" && <button type="button" className='comment' onClick={toggle}>
            <i className={tip === "text message" ? 'fa-comment-o' :'fa-comments-o'}></i>
    </button>}
       </p>
    )
    
}




Input.propTypes = {
    tip:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    name:PropTypes.string,
    toggle:PropTypes.func
}