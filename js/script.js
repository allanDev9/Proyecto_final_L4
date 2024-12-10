document.addEventListener("keyup", (e) => { 
    if (e.target.matches('#search-movies')) {
        const searchValue = e.target.value.toLowerCase();
        let found = false;

        document.querySelectorAll(".card-image").forEach(movies => {
            if (movies.textContent.toLowerCase().includes(searchValue)) {
                movies.classList.remove('filtro');
                found = true;
            } else {
                movies.classList.add('filtro');
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
                document.querySelector(".container-image").appendChild(message);
            }
        } else if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }
});
