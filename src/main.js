let query = document.querySelector.bind(document);
let queryAll = document.querySelectorAll.bind(document);
let currentPage = 1;
let currentGenre;
query("#btn-romantic").addEventListener("click", () => {
  currentPage = 1;
  currentGenre = 10749;
  showGenreMovies(currentGenre, currentPage);
});
let btnNext = query("#btn-next");
btnNext.addEventListener("click", () => showGenreMovies(currentGenre, currentPage + 1));

function showGenreMovies(genre, page) {
  window.data.getGenreMovies(genre, page).then(function(movieData) {
    currentPage = movieData.page;

    let movieCards = movieData.results
      .map(m => window.cardMovieTemplate(m))
      .join(" ");
    let moviesShow = document.getElementById("content");
    moviesShow.innerHTML = movieCards;
    btnNext.hidden = false;
  });
}
