/**
 * Soul La Academia — interacciones del sitio
 * 1) Menú móvil
 * 2) Formulario de inscripción -> WhatsApp
 */

/* ---------- 1. Menú móvil ---------- */
var nav = document.getElementById("nav");
var menuToggle = document.getElementById("menuToggle");

// Guarda de seguridad: si algún día una página no tiene menú, el script
// no se rompe y el resto sigue funcionando.
if (nav && menuToggle) {
  menuToggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  // Al tocar un enlace en móvil, cerramos el menú.
  document.querySelectorAll("nav.links a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
    });
  });
}

/* ---------- 2. Formulario de inscripción ---------- */
var signupForm = document.getElementById("inscripcion");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // El form tiene novalidate para que el navegador no envíe solo,
    // pero seguimos usando su validación nativa (required) antes de armar
    // el mensaje. Sin esto se podía "enviar" un WhatsApp con campos vacíos.
    if (!signupForm.checkValidity()) {
      signupForm.reportValidity();
      return;
    }

    var nombre = signupForm.nombre.value.trim();
    var telefono = signupForm.telefono.value.trim();
    var instrumento = signupForm.instrumento.value;
    var modalidad = signupForm.modalidad.value;
    var mensaje = signupForm.mensaje.value.trim();

    var lines = [
      "¡Hola Soul La Academia! Quiero inscribirme 🎶",
      "",
      "Nombre: " + nombre,
      "Instrumento/curso: " + instrumento,
      "Modalidad: " + modalidad,
      "Teléfono: " + telefono
    ];

    if (mensaje) {
      lines.push("Mensaje: " + mensaje);
    }

    var text = encodeURIComponent(lines.join("\n"));
    var url = "https://api.whatsapp.com/send?phone=573218951750&text=" + text;

    window.open(url, "_blank", "noopener");
  });
}
