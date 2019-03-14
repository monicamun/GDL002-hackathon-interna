let query = document.querySelector.bind(document);
let queryAll = document.querySelectorAll.bind(document);
let currentPage = 1;

//EVENTOS QUE EJECUTAN LA BUSQUEDA AL SELECCIONAR EL BOTON
  document.getElementById("Happy").addEventListener("click", () => {
        currentGenre = 35;
        showGenreMovies(currentGenre, currentPage);
    });


document.getElementById("Angry").addEventListener("click", () => {
      currentGenre = 28;
      showGenreMovies(currentGenre, currentPage);
    });

document.getElementById("Sad").addEventListener("click", () => {
      currentGenre = 18;
      showGenreMovies(currentGenre, currentPage);
    });

document.getElementById("Inlove").addEventListener("click", () => {
      currentGenre = 10749;
      showGenreMovies(currentGenre, currentPage);
    });

document.getElementById("Brave").addEventListener("click", () => {
      currentGenre = 27;
      showGenreMovies(currentGenre, currentPage);
    });

document.getElementById("Curious").addEventListener("click", () => {
      currentGenre = 99;
    showGenreMovies(currentGenre, currentPage);
    });

document.getElementById("Childish").addEventListener("click", () => {
      currentGenre = 16;
      showGenreMovies(currentGenre, currentPage);
    });


// query("#btn-romantic").addEventListener("click", () => {
//    currentPage = 1;
//    currentGenre = 10749;
//    showGenreMovies(currentGenre, currentPage);
//  });




let btnNext = query("#btn-next");
btnNext.addEventListener("click", () => showGenreMovies(currentGenre, currentPage + 1));


function showGenreMovies(genre, page) {
  window.data.getGenreMovies(genre, page).then(function(movieData) {
    currentPage = movieData.page;

    let movieCards = movieData.results
      .map(m => cardMovieTemplate(m))
      .join(" ");
    let moviesShow = document.getElementById("content");
    moviesShow.innerHTML = movieCards;
    btnNext.hidden = false;
  });
}
