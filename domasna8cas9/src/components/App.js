import React from 'react';
import { Cake } from './Cake';
import { Route,Routes } from 'react-router-dom';
import { Nav } from "./Nav";
import { Comments } from './Comments';
import { SingleComment } from './SingleComment';

export const App = () => {
    return(
        <div id="app">
            <Nav/>
            <Routes>
                <Route path="/cake" element={<Cake />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/comment/:idComment" element={<SingleComment />} />
            </Routes>
        </div>
    )
}