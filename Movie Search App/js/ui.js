import { fetchMovieDetails } from "./api.js";

export function renderMovieDetails(movie) {
  const container = document.getElementById("movieDetails");

  const query = `${movie.Title} ${movie.Year} official trailer`;

  container.innerHTML = `
    <button class="close-btn" id="closeModal">x</button>
    <h2>${movie.Title}</h2>
    <img src="${movie.Poster !== "N/A" ? movie.Poster : "assets/images/placeholder.png"}" />
    <p><strong>Genre:</strong> ${movie.Genre}</p>
    <p><strong>Plot:</strong> ${movie.Plot}</p>

    <button id="trailerBtn">▶ Watch Trailer</button>
  `;

  container.classList.add("active");

  document.getElementById("closeModal").addEventListener("click", () => {
    container.classList.remove("active");
  });

  document.getElementById("trailerBtn").addEventListener("click", () => {
    openTrailer(query);
  });
}

function openTrailer(query) {
  const youtubeURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  window.open(youtubeURL, "_blank");
}

export function renderMovies(movies, searchTerm = "") {
  const container = document.getElementById("results");

  if (!movies || movies.length === 0) {
    const modal = document.getElementById("movieDetails");
    
    modal.innerHTML = `
      <button class="close-btn" id="closeModal">x</button>
      <h2 style="color: rgb(23, 172, 231); text-align: center; margin-top: 20px;">Oops!</h2>
      <p style="text-align: center; margin-top: 10px; font-size: 16px;">We could not find any movies matching your search for "${searchTerm}".</p>
    `;
    
    modal.classList.add("active");

    document.getElementById("closeModal").addEventListener("click", () => {
      modal.classList.remove("active");
    });
    
    return;
  }

  container.innerHTML = "";

  movies.forEach(movie => {
    const div = document.createElement("div");

    const poster = movie.Poster !== "N/A"
      ? movie.Poster
      : "assets/images/placeholder.png";

    div.innerHTML = `
      <img src="${poster}" width="150" />
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    `;

    div.addEventListener("click", async () => {
       const fullDetails = await fetchMovieDetails(movie.imdbID);
       if(fullDetails) {
           renderMovieDetails(fullDetails);
       }
    });

    container.appendChild(div);
  });
}