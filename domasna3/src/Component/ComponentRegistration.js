import React, { useState } from "react";

export const ComponentRegistration = () => {
 
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[country,setCountry] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[showTable, setShowTable] = useState(false);

    function showTableContent(event){
        event.preventDefault();
        setShowTable(!showTable);
    }
    return (
        <div id="component-registration">
            <form onSubmit={showTableContent}>
            <label>First Name:</label>
            <input
                type="text"
                placeholder="Enter  your First Name"
                value={firstName}
                onChange={(event) => { setFirstName(event.target.value) }}
            />
            <br />
            <br />
            <label>Last Name:</label>
            <input
                type="text"
                placeholder="Enter your Last Name"
                value={lastName}
                onChange={(event) => { setLastName(event.target.value) }}
            />
            <br />
            <br />
            <label>Country:</label>
            <input
            type="text"
            placeholder="Enter your Country"
            value={country}
            onChange={(event) => {setCountry(event.target.value) }}
            />
            <br/>
            <br/>
            <label>Email:</label>
            <input
                type="email"
                placeholder="Enter your E-Mail"
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
            />
            <br />
            <br />
            <label>Password:</label>
            <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(event) => { setPassword(event.target.value) }}
            />
            <br />
            <br />
            <button type="submit">{showTable === false ? "Show Table" : "Hide Table"}</button>
            <br />
            <br />
            <hr/>
            </form>
            {showTable && 
            <table border="1">
                
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Country</td>
                        <td>Email</td>
                        <td>Password</td>
                    </tr>
                
               
                    <tr>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{country}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                    </tr>
               
                </table>}

        </div>
    )
}

           