// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    let amigos = [];
  
    const inputNombre = document.getElementById("amigo");
    const btnAgregar = document.querySelector(".button-add");
    const btnSortear = document.querySelector(".button-draw");
    const listaNombres = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
  
    function agregarAmigo() {
      const nombre = inputNombre.value.trim();
      if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
      }
      amigos.push(nombre);
      actualizarLista();
      inputNombre.value = "";
      inputNombre.focus();
    }
  
    function actualizarLista() {
      listaNombres.innerHTML = "";
      amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
      });
    }
  
    function sortearAmigo() {
      if (amigos.length === 0) {
        alert("La lista está vacía. Agregue nombres antes de sortear.");
        return;
      }
      const indiceAleatorio = Math.floor(Math.random() * amigos.length);
      resultado.innerHTML = `<li>🎉 ${amigos[indiceAleatorio]} es el amigo secreto! 🎉</li>`;
    }
  
    btnAgregar.addEventListener("click", agregarAmigo);
    btnSortear.addEventListener("click", sortearAmigo);
  });
  