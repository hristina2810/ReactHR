import React from "react";


export class ClassComponentRegistration extends React.Component () {
        constructor(props){
            super(props)
            console.log('Constructor');
              this.state = {firstName:""};
        }
       UserReg = (event) => {
            this.setState({ [event.target.name] : event.target.value });
        };

        changeState(event) {
          const visible = document.getElementById("class-comp-table")
          if (visible.style.visibility === "visible"){
            visible.style.visibility = "hidden";
          } else{
            visible.style.visibility = "visible";
          }
        
        }

        render() {
         return(     
           <div id="class-component-registration">
          <label>First Name:</label>
          <input
          type="text"
          placeholder="Enter your firstname"
          name="firstName"
          onChange={this.UserReg}
          />
          <label>Last Name:</label>
           <input
           type="text"
           placeholder="Enter your lastname"
           name="lastName"
           onChange={this.UserReg}
           />
           <label>Country:</label>
           <input
           type="text"
           placeoholder = "Enter your country"
           name="country"
           onChange={this.UserReg}
           />
           <label>Password:</label>
           <input
           type="text"
           placeholder="Enter your password"
           name="password"
           onChange={this.UserReg}
           />
           <label>Email:</label>
           <input
           type="text"
           placeholder="Enter your email"
           name="email"
           onChange={this.UserReg}
           />
           <button onClick={this.changeState}>Hi</button>
          <hr/>
          <div id="class-comp-table">
           <p>First Name: {this.state.firstname}</p>
           <p>Last Name: {this.state.lastname}</p>
           <p>Country: {this.state.firstname}</p>
           <p>Password: {this.state.password}</p>
           <p>Email: {this.state.email}</p>
         </div>
           </div>         
         );
         }
        }
