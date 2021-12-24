import React, { useState } from "react";

export const ComponentRegistration = () => {
 
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[country,setCountry] = useState("");
    const[password,setPassword] = useState("");
    const[email,setEmail] = useState("");
    const[showTable, setShowTable] = useState(false);

    function showTableContent(event){
        event.preventDefault();
        setShowTable(true);
    }
    return (
        <div id="component-registration">
            <form onSubmit={showTableContent}>
            <input
                type="text"
                placeholder="Enter  your First Name"
                value={firstName}
                onChange={(event) => { setFirstName(event.target.value) }}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder="Enter your Last Name"
                value={lastName}
                onChange={(event) => { setLastName(event.target.value) }}
            />
            <br />
            <br />
            <input
            type="text"
            placeholder="Enter your Country"
            value={country}
            onChange={(event) => {setCountry(event.target.value) }}
            />
            <br/>
            <br/>
            <input
                type="email"
                placeholder="Enter your E-Mail"
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
            />
            <br />
            <br />
            <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(event) => { setPassword(event.target.value) }}
            />
            <br />
            <br />
            <button type="submit">Show Table</button>
            <br />
            <br />
            </form>
            {showTable && 
            <table border="1">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                    </tr>
                </tbody>
            </table>}


        </div>
    )
}

           