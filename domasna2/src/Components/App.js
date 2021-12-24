import React  from "react";
import ReactDOM from 'react-dom';
import { Movies } from '../Components/Movies';


export function  App(){

    const movies = [

    { 
    title: 'Eternal Sunshine of the Spotless Mind',
    genre: 'Drama, Romance, Sci-Fi',
    releaseDate: 2004,
    plot: 'When their relationship turns sour, a young couple undergoes a medical procedure to have each other erased from their memories.',
    imdbLink: "https://www.imdb.com/video/vi2292515097?playlistId=tt0338013" ,
    imgUrl: "https://image.tmdb.org/t/p/w1280/612scqPyLecLmsMNk7Wyi09bWRQ.jpg" ,
    },
    
    { 
    title: "Don't Look Up",
    genre: 'Drama, Romance, Sci-Fi',
    releaseDate: 2021,
    plot: 'Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth.',
    imdbLink: "https://www.imdb.com/video/vi15057689?playlistId=tt11286314" ,
    imgUrl: "https://cdn.statically.io/img/static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/dont-look-up.jpg"
    },
    
    {
    
    title: 'Fight Club',
    genre: 'Drama',
    releaseDate: 1999,
    plot: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    imdbLink: "https://www.imdb.com/video/vi781228825?playlistId=tt0137523" ,
    imgUrl: "https://www.themoviedb.org/t/p/original/iqR0M1ln7Kobjp9liUj2Q7mtQZG.jpg"
    
    },
    
    {
    
    title: 'Bruised',
    genre : 'Drama, Sport',
    releaseDate: 2020,
    plot: 'A disgraced MMA fighter finds redemption in the cage and the courage to face her demons when the son she had given up as an infant unexpectedly reenters her life.',
    imdbLink: "https://www.imdb.com/video/vi1100989209?playlistId=tt8310474",
    imgUrl: "https://i.dailymail.co.uk/1s/2020/07/30/19/31382748-8577609-Fists_up_Halle_Berry_vanishes_into_her_character_in_a_new_still_-m-21_1596132921159.jpg"
    },
    
    {
    
    title: "Ghostbusters: Afterlife",
    genre: 'Adventure, Comedy, Fantasy',
    releaseDate: 2021,
    plot: 'When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.',
    imdbLink: "https://www.imdb.com/video/vi637322009?playlistId=tt4513678" ,
    imgUrl: "https://picfiles.alphacoders.com/335/thumb-1920-335080.jpg"
    }
    
      ]
   
      return(
        <div id="app">
            <h2>Movie List</h2>
            <Movies listOfMovies={movies}/>
        </div>

    )

    }
  
