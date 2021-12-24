import React from "react";
import { ComponentRegistration } from './Component/ComponentRegistration.js';
import { ClassComponentRegistration } from './Component/ClassComponentRegistration.js';

   export function App () {
       return(
       <div id="App">
           <h2>Component State</h2>
           <ComponentRegistration/>
           <hr/>
           <h2>Class Component State</h2>
           <ClassComponentRegistration/>
       </div>
       );
};
