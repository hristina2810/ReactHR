import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
    return(
        <ul id="nav">
            <li><Link to="/cake">Cake</Link></li>
            <li><Link to="/comments">Comments</Link></li>

        </ul>
    )
}