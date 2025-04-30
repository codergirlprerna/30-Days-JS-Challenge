const apiKey = '6f82188d9a521d51f2038f7f475ef185';
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchMovies(query);
  }
});

function fetchMovies(query) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('TMDb API Response:', data);
      displayMovies(data.results); 
    })
    .catch(error => {
      console.error('Error fetching TMDb data:', error);
    });
}

function displayMovies(movies) {
  const moviesList = document.getElementById('movies-list');
  moviesList.innerHTML = ''; 

  if (!movies || movies.length === 0) {
    moviesList.innerHTML = '<p>No results found.</p>';
    return;
  }

  movies.forEach(movie => {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');

    const posterPath = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : 'https://via.placeholder.com/300x450?text=No+Image';

    const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';

    movieItem.innerHTML = `
      <img src="${posterPath}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>Release Year: ${releaseYear}</p>
    `;

    moviesList.appendChild(movieItem);
  });
}
