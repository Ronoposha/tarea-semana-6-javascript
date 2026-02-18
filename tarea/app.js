// TAREA 1
const inputTexto = document.getElementById("texto");
const resultado = document.getElementById("resultado");

inputTexto.addEventListener("input", () => {
    resultado.textContent = inputTexto.value;
});

// TAREA 2
const inputNombre = document.getElementById("nombre");
const saludo = document.getElementById("saludo");

inputNombre.addEventListener("input", () => {
    saludo.textContent = "Hola, " + inputNombre.value;
});
