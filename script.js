function cambiarTitulo() {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "PROGRAMACIÓN WEB";
}

function cambiarLayout() {
    const contenido = document.getElementById("contenido-libro");
    contenido.classList.toggle("filas");
}

function cambiarSubtitulo() {
    const subtitulo = document.getElementById("subtitulo");
    subtitulo.style.color = subtitulo.style.color === "purple" ? "#f0077c" : "purple";

    const parrafo = subtitulo.nextElementSibling;
    parrafo.style.color = parrafo.style.color === "purple" ? "black" : "purple";
}

function agregarImagen() {
    const aside = document.querySelector("aside");
    if (!document.getElementById("img-extra")) {
        const img = document.createElement("img");
        img.src = "imagenes/perrito.jpg"; 
        img.alt = "Imagen HTML";
        img.id = "img-extra";
        aside.appendChild(img);
    }
}


