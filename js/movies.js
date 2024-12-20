document.addEventListener("DOMContentLoaded", function () {
  fetch("movies.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const container = document.getElementById("container-movies");
      data.movies.forEach((movie) => {
        const section = document.createElement("section");
        section.classList.add("card-image");

        const img = document.createElement("img");
        img.src = movie.src;
        img.alt = movie.alt;

        const p = document.createElement("p");
        p.textContent = movie.title;

        section.appendChild(img);
        section.appendChild(p);
        container.appendChild(section);
      });
    })
    .catch((error) => console.error("Error al cargar el JSON:", error));
});
