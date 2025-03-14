let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre !== "") {
        let lista = document.getElementById("listaAmigos");
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        lista.appendChild(nuevoElemento);
        
        listaAmigos.push(nombre); // Agregar el nombre a la lista de amigos
        
        input.value = ""; // Limpiar el input
        
        // Guardar en localStorage
        localStorage.setItem("amigos", JSON.stringify(listaAmigos));
    } else {
        alert("Por favor, escribe un nombre antes de agregar.");
    }
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debes agregar al menos 2 amigos para hacer el sorteo.");
        return;
    }

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar resultados previos
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = 
    `<p>🎉 El amigo seleccionado es: <strong>${amigoSeleccionado}</strong></p>`;
    
}
