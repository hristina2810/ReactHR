import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { Albums } from './Albums';
import { Posts } from './Posts';
import { Nav } from './Nav';
import { Home } from './Home';


 function App () {

  const [albums,setAlbums] = useState([]);
  const [posts,setPosts] =useState([]);

  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(json => setAlbums(json))
    .catch(error => alert(error))
 },[])
 useEffect(() => { 
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setPosts(json))
  .catch(error => alert(error))
},[])

  return(
    <div id="app">
      <h2>App</h2>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      </div>
  )
};
export default App;