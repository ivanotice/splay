
    // Obtener referencias a los elementos del DOM
const moviesContainer = document.getElementById('movies-container');
const searchCount = document.getElementById('search-count');
const yearFilter = document.getElementById('year-filter');
const categoryFilter = document.getElementById('category-filter');
const typeFilter = document.getElementById('type-filter');

// Función para realizar la búsqueda y actualizar los resultados
function searchMovies() {
  const yearValue = yearFilter.value;
  const categoryValue = categoryFilter.value;
  const typeValue = typeFilter.value;

  let count = 0;

  // Iterar sobre cada película y verificar si cumple con los filtros
  const movies = moviesContainer.getElementsByClassName('movie');
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const year = movie.getAttribute('data-year');
    const categories = movie.getAttribute('data-category').split(' ');

    // Comprobar si la película cumple con los filtros seleccionados
    const yearMatch = yearValue === 'all' || year === yearValue;
    const categoryMatch = categoryValue === 'all' || categories.includes(categoryValue);
    const typeMatch = typeValue === 'all' || typeValue === 'peliculas';

    // Mostrar u ocultar la película según los resultados de la búsqueda
    if (yearMatch && categoryMatch && typeMatch) {
      movie.style.display = 'inline-block';
      count++;
    } else {
      movie.style.display = 'none';
    }
  }

  // Actualizar el recuento de resultados
  searchCount.textContent = count;
}

// Agregar event listeners a los filtros para realizar la búsqueda cuando cambian
yearFilter.addEventListener('change', searchMovies);
categoryFilter.addEventListener('change', searchMovies);
typeFilter.addEventListener('change', searchMovies);

// Realizar la búsqueda inicialmente para mostrar todos los resultados
searchMovies();
    
