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

const showSliderMovies = (id) =>{
window.data.getSliderMovies(id).then(function(){
let sliderMovies = movieData.arraySlider
.map(s => showSliderMovies(s))
.join("");
let sliderShow = document.getElementById("slider");
sliderShow.innerHTML = sliderMovies;
});
};

const getSliderMovies = () =>{
  const arraySlider = [tt4477536,tt6494418,tt0118751,tt5292624,tt8451018];
  return arraySlider;
 }