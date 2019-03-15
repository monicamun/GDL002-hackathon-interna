let query = document.querySelector.bind(document);
let queryAll = document.querySelectorAll.bind(document);
let currentPage = 1;
let currentYear;


function reset() {
  currentYear = "";
  currentPage = 1;
  document.getElementById("filter-year").value = "";
}

//EVENTOS QUE EJECUTAN LA BUSQUEDA AL SELECCIONAR EL BOTON
document.getElementById("Happy").addEventListener("click", () => {
  currentGenre = 35;
  reset();
  showGenreMovies(currentGenre, currentPage);
  document.getElementById("slider").style.display = "none";
});


document.getElementById("Angry").addEventListener("click", () => {
     currentGenre = 28;
     reset();
     showGenreMovies(currentGenre, currentPage);
     document.getElementById("slider").style.display = "none";
});
    });

document.getElementById("Sad").addEventListener("click", () => {
      currentGenre = 18;
      reset();
      showGenreMovies(currentGenre, currentPage);
      document.getElementById("slider").style.display = "none";
    });

document.getElementById("Inlove").addEventListener("click", () => {
      currentGenre = 10749;
      reset();
      showGenreMovies(currentGenre, currentPage);
      document.getElementById("slider").style.display = "none";
    });

document.getElementById("Brave").addEventListener("click", () => {
      currentGenre = 27;
      reset();
      showGenreMovies(currentGenre, currentPage);
      document.getElementById("slider").style.display = "none";
    });

document.getElementById("Curious").addEventListener("click", () => {
     currentGenre = 99;
     reset();
     showGenreMovies(currentGenre, currentPage);
     document.getElementById("slider").style.display = "none";
    });

document.getElementById("Childish").addEventListener("click", () => {
      currentGenre = 16;
      reset();
      showGenreMovies(currentGenre, currentPage);
      document.getElementById("slider").style.display = "none";
    });

document.getElementById("filter-year").addEventListener("change", event => {
  currentPage = 1;
  currentYear = event.target.value;
  console.log(event.target.value);
  showGenreMovies(currentGenre, currentPage, event.target.value);
});

let btnNext = query("#btn-next");
btnNext.addEventListener("click", () =>
  showGenreMovies(currentGenre, currentPage + 1, currentYear)
);
let btnPrev = query("#btn-prev");
btnPrev.addEventListener("click", () =>
  showGenreMovies(currentGenre, currentPage - 1, currentYear)
);

function showGenreMovies(genre, page, year) {
  window.data.getGenreMovies(genre, page, year).then(function(movieData) {
    currentPage = movieData.page;

    let movieCards = movieData.results.map(m => cardMovieTemplate(m)).join(" ");

    let moviesShow = document.getElementById("content");
    moviesShow.innerHTML = movieCards;
    btnNext.hidden = false;
    btnPrev.hidden = false;
    document.getElementById("filter-year").hidden = false;
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
