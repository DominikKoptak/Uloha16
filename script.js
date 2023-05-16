const movieList = [];

function makeMovieObject(){
    const movie = {name:document.getElementById("movieTitle").value, 
        year:document.getElementById("year").value,
        actors:document.getElementById("actors").value};

    movieList.push(movie);

    console.log("***********Current List***********\n",movieList);
}

function deleteLastInput(){
    movieList.pop();
    console.log("***********Current List***********\n",movieList);
}

function clearList(){
    movieList.length = 0;
    console.log("***********Current List***********\n",movieList);
}





