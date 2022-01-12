import React from "react";


export class ClassComponentRegistration extends React.Component {
        constructor(props){
            super(props)
            console.log('Constructor');
              this.state = {showTable:false};
        }
       UserReg = (event) => {
            this.setState({ [event.target.name] : event.target.value });
        };

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
           <button onClick={this.VisibleWhenClick}>Show</button>
          <hr/>

          {this.state.showTable && 

       <table>
    <thead>
         <tr>
           <td>Firstname</td>
           <td>Lastname</td>
           <td>Country</td>
           <td>Email</td>
           <td>Password</td>
           </tr>
           </thead>
       
          <tbody>
         <tr>
           <td>{this.state.firstname}</td>
           <td>{this.state.lastname}</td>
           <td>{this.state.country}</td>
           <td>{this.state.email}</td>
           <td>{this.state.password}</td>
           </tr>
           </tbody>
       </table>
       }
         </div>
              
         )
         }
        }
