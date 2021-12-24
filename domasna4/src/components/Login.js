import React, {useState, useEffect} from "react";
import {Input} from './Input';
export function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [comment,setComment] = useState("");
    const [fieldType,setFieldType] = useState("password","comment");
    
}
useEffect(() => {
    console.log("Username:" + username + "Password:" + password + "Comment:" + comment )
},[username,password,comment]) 

function changeFieldType() {
    setFieldType(fieldType === "password" ? 'text' : 'password'
    )
    setFieldType(fieldType === "comment" ? 'comment' : 'comments')
}
function handleSubmit(event){
    event.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}\nComment: ${comment}`)

return(
    <div id="login">
        <form onSubmit={handleSubmit}>
           <Input 
           type="text"
           placeholder="Enter Username"
           value={username}
           onChange={(event)=>{setPassword(event.target.value)}}/>
           <Input
           type={fieldType}
           placeholder="Enter Password"
           value={password}
           name="password"
           onChange={(event)=>{setPassword(event.target.value)}}
           toggle={changeFieldType}
           />
           <button className="action-button">Sign In</button>
           <input
            type={fieldType}
            placeholder="Enter Text Message"
            value={comment}
            name="comment"
            onChange={(event)=>{setComment(event.target.value)}}
            toggle={changeFieldType}
            />
        </form>
    </div>

)

}