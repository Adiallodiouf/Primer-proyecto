document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const cesta = document.getElementById("cesta");
  
  sections.forEach(section => {
    // Crear botón para añadir el plato a la cesta
    const btnAgregar = document.createElement("button");
    btnAgregar.innerText = "Añadir a la cesta";
    section.appendChild(btnAgregar);
    
    // Añadir evento al botón para añadir el plato a la cesta
    btnAgregar.addEventListener("click", function() {
      const plato = section.querySelector("h2").innerText;
      const li = document.createElement("li");
      li.innerText = plato;
      cesta.appendChild(li);
    });
  });
});