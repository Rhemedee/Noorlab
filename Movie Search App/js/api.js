const API_KEY = "f0d20274";

export async function fetchMovies(query, page = 1) {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`
    );

    const data = await res.json();

    if (data.Response === "False") {
      return [];
    }

    return data.Search;

  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchMovieDetails(id) {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}