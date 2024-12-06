document.addEventListener("keyup", (e) => { 
    if (e.target.matches('#search-movies')) {
        document.querySelectorAll(".card-image").forEach(movies => {
            movies.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? movies.classList.remove('filtro')
                : movies.classList.add('filtro');
        });
    }
})