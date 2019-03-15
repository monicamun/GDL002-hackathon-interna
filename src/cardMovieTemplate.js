window.cardMovieTemplate = movie => {
  return ` <div id="styleTemplate">
    <div><img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="" class="img-thumbnail"></div>
    <h5 class="title">${movie.title}</h5>
    <p><span class="">País:</span> ${movie.Country}</p>
    <p><span class="">Año:</span> ${movie.release_date}</p>
    <p><span class="">Género:</span> ${movie.genre}</p>
    <p><span class="">Duración:</span> ${movie.Runtime}</p>
    <p><span class="">Sinopsis:</span> ${movie.overview}</p>
    </div>
    `;
};

window.showSliderMovies = slider => {
  return `
  <div><img src="https://www.omdbapi.com/?apikey=e36c9912&i=${slider.Poster}"></div>
  <h5 class="title">${slider.Title}</h5>
`;
};


