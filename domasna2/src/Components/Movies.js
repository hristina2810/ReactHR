import React from 'react';
import { App } from '../Components/App';


export const Movies = ({listOfMovies}) => {
    console.log(listOfMovies)
    return(
        <div id ="movies">
            <h2>Movie List</h2>
            {listOfMovies.map((film,i) => {
               return(
                   <div key={i}>
                   <p><span>Movie Title:</span>{film.title}</p>
                   <p><span>Release Date:</span>{film.releaseDate}</p>
                   <p><span>Genre:</span>{film.genre}</p> 
                   <p><span>Plot:</span>{film.plot}</p>
                   <a target="_blank" href={film.imdbLink}> whach the movie</a>
                   <br/>
                   <a target="_blank" href={film.imdbLink}>
                   <img width={"260"} height={"230"} src={film.imgUrl} alt={film.title}/>
                   </a>
                   </div>
               )
               })}
        </div>  
    )
}
