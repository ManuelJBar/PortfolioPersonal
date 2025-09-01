// Menú móvil
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("hidden");
});

// Validación de formulario
document.getElementById("formulario").addEventListener("submit", function (e) {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nombre || !email.includes("@")) {
    alert("Por favor, completa los campos correctamente.");
    e.preventDefault();
  }
});

// Animación al hacer scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".proyecto").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
