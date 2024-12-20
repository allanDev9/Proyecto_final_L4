document.addEventListener("keyup", (e) => { 
    if (e.target.matches('#search-movies')) {
        const searchValue = e.target.value.toLowerCase();
        let found = false;

        document.querySelectorAll(".card-image").forEach(movie => {
            if (movie.textContent.toLowerCase().includes(searchValue)) {
                movie.classList.remove('filtro');
                found = true;
            } else {
                movie.classList.add('filtro');
            }
        });

        const noResultsMessage = document.querySelector("#message");
        if (!found) {
            if (!noResultsMessage) {
                const message = document.createElement("p");
                message.id = "message";
                message.textContent = "No se encontraron resultados";
                message.style.textAlign = "center";
                message.style.fontWeight = "bold";
                message.style.color = "red";
                document.querySelector("#container-image").appendChild(message);
            }
        } else if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }
});
