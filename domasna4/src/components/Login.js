import React, {useState, useEffect} from "react";
import {Input} from './Input';
import {Dropdown} from './Dropdown';

export function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [fieldType,setFieldType] = useState("text");
    const [elements,setElements] = useState(
        [
        {value:"Facebook", name:"Facebook"},
        {value:"Instagram", name:"Instagram"},
        {value:"SnapChat" , name:"SnapChat"}
    ]
    );
    const[selectedOption, setSelectedOption] = useState("Facebook")
    const[comment, setComment] =  useState("")
    const[longComment, setlongComment] = useState(false)
    
useEffect(() => {
    console.log("Username:" + username + "Password:" + password + "\nSelected option: " +selectedOption)
},[username,password,selectedOption,comment]) 

function changeFieldType() {
    setFieldType(fieldType === "password" ? 'text' : 'password'
    )
}

function changeInput(){
    setlongComment(
        
    )
}
function handleSubmit(event){
    event.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}\nSelected option: ${selectedOption}`)
}
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
          
          <p>Add your comment: </p>
              <Input
                type="text"
                placeholder="Enter Comment"
                value={comment}
                name="comment"
                onChange={(e)=>{setComment(e.target.value)}}
                renderTextArea={longComment}
                changeInput={()=>{setlongComment(!longComment)}}
                //ja zima tekovnata i ja setira na sprotivnoto
              />
              <Dropdown elements={elements} changeOption={(e)=>setSelectedOption(e.target.value)}/>

              <button className="action-button">Sign in</button>
        </form>
    </div>

)
}
