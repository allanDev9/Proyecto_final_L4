function cargarContenido(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el contenido');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('section-content').innerHTML = html;
        })
        .catch(error => {
            document.getElementById('section-content').innerHTML = `<p>Error al cargar el contenido: ${error.message}</p>`;
        });
}
