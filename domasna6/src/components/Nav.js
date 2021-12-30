import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
    return(
        <ul id="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/albums">Albums</Link></li>
            <li><Link to="/posts">Posts</Link></li>
        </ul>
    )
}