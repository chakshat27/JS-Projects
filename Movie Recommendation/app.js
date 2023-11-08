
let api = " http://www.omdbapi.com/?i=tt3896198&apikey=9d5d455e&t="

let title = document.getElementById('title')
let desc = document.getElementById('desc')
let year = document.getElementById('year')
let genre = document.getElementById('genre')
let actors = document.getElementById('Actors')
let directors = document.getElementById('Director')
let collection = document.getElementById('boxOffice')
let awards = document.getElementById('Awards')
let writer = document.getElementById('Writer')
let ratings = document.getElementById('Ratings')
let poster = document.getElementById('poster');


let container = document.getElementById('container')


function searchmovie() {

    let name = document.getElementById('movie-name')
    let query = api+name.value;
    console.log(query);

    fetch(query).then((data)=>{
        return data.json();
    }).then((data)=>{


genre.innerText = data.Genre;
title.innerText = data.Title
actors.innerText = data.Actors
directors.innerText = data.Director
awards.innerText = data.Awards
collection.innerText = data.BoxOffice;
writer.innerText = data.Writer;
ratings.innerText = data.imdbRating;
desc.innerText = data.Plot;
genre.innerText = data.Genre;
boxOffice.innerText = data.BoxOffice;
poster.src = data.Poster;

    }  )

}
