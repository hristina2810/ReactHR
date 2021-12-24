import React from 'react';
import { Hotel } from './Hotel';


class App extends React.Component{
  render(){

  return(
  <div id='app'>
     <h2>Hotel's available rooms</h2>
     <Hotel capacity={5} vacancy='Delux Room' availability={true}/>
     <Hotel capacity={3} vacancy= 'Standard Room'availability={true}/>
     <Hotel capacity={0} vacancy= 'Superior Room'availability={false}/>
  </div>
  )
  }
}
 export {App}
