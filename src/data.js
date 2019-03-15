window.data = {
    getGenreMovies: function(genre, page) {
      if(!page) {
        page = 1
      }
      let promise = fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=d2cf49e2e038f9b38a8a6cdf31a95dd6&language=en-US&region=US&sort_by=popularity.desc&include_video=false&page=${page}&primary_release_year=2018&with_genres=${genre}`
      ).then(function(response) {
        let data = response.json();
        return data;
      });
      return promise;
    },

    getSliderMovies: function(id){
      let promise = fetch(
      `https://www.omdbapi.com/?apikey=e36c9912&i=${id}`
      ).then(function(response){
        let data = response.json();
        return data;
      });
      return promise;
    }
  };
  
