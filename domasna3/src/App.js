import React from "react";
import { ComponentRegistration } from './Component/ComponentRegistration';
import { ClassComponentRegistration } from './Component/ClassComponentRegistration';

   export function App () {
       return(
       <div id="app">
           <h2>Component State</h2>
           <ComponentRegistration/>
           <hr/>
           <h2>Class Component State</h2>
           <ClassComponentRegistration/>
       </div>
       )
}
