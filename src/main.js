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
    // console.log(movieData);
    currentPage = movieData.page;
    let movieCards = movieData.results
      .map(m => window.cardMovieTemplate(m))
      .join(" ");
      
    let moviesShow = document.getElementById("content");
    moviesShow.innerHTML = movieCards;
    btnNext.hidden = false;
  });
}

 const showSliderMovies = (id)=>{
  const arraySlider = ["tt4477536", "tt6494418", "tt0118751", "tt5292624", "tt8451018"];
  let arrayData = [];
  for(let i=0; i<arraySlider.length; i++){
    window.data.getSliderMovies(arraySlider[i]).then(function(movieData) {
      arrayData.push(movieData);
      let sliderMovies = arrayData.map(s => showSliderMoviesTemplate(s))
      .join(" ");
      let silderShow = document.getElementById("slider");
      silderShow.innerHTML = sliderMovies;
     });
  }
 }

showSliderMovies();
var myIndex = 0;

const carousel =()=> {
  var i;
  var x = document.getElementsByClassName("slider");
  console.log(x)
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2500);    
}
carousel();