import React from 'react';

const Hotel = (props)=> {
    console.log(props);
    return(
        <div id='hotel'>
            
            {props.capacity > 0 ?
             <div id="available"> 
             <p>Vacancy: {props.vacancy} 
             <br/> 
             Capacity: {props.capacity}
              <br/> 
              Availability: {String(props.availability)}</p>
              </div> : <div id="notAvailable">
                   <p>Vacancy: {props.vacancy}
                    <br/>
                    Capacity: {props.capacity}
                     <br/>
                      Availability: {String(props.availability)} </p>
                      </div> 
                      }
        </div>
    )
}
 export {Hotel}