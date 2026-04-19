import { fetchMovies } from "./api.js";
import { renderMovies } from "./ui.js";

const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

window.addEventListener("DOMContentLoaded", async () => {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "<p>Loading suggested movies...</p>";

  const page1 = await fetchMovies("avengers", 1);
  const page2 = await fetchMovies("avengers", 2);

  const combinedMovies = [...page1, ...page2].slice(0, 18);
  
  renderMovies(combinedMovies, "avengers");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = input.value.trim();

  if (!query) {
    alert("Enter a movie name");
    return;
  }

  const submitBtn = form.querySelector("button");
  const originalText = submitBtn.innerText;
  
  submitBtn.innerText = "Loading...";
  submitBtn.disabled = true;

  input.value = "";

  const movies = await fetchMovies(query, 1);
  
  submitBtn.innerText = originalText;
  submitBtn.disabled = false;

  renderMovies(movies, query);
});