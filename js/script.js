/**
 * Soul La Academia — interacciones del sitio
 * 1) Tema claro / oscuro
 * 2) Menú móvil
 * 3) Formulario de inscripción -> WhatsApp
 */

/* ---------- 1. Tema claro / oscuro ----------
   El sitio arranca en claro. La elección del visitante se guarda en
   localStorage y se aplica en el <head> de cada página, antes de
   pintar, para que no haya parpadeo.

   Nota: a propósito NO seguimos la preferencia del sistema
   operativo. La mayoría de los celulares vienen en modo oscuro, y
   el sitio debe abrir en claro salvo que la persona pida lo
   contrario. */
(function () {
  var STORAGE_KEY = "soul-theme";
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");
  var themeColor = document.getElementById("themeColor");

  var COLORS = { light: "#ffffff", dark: "#05040a" };

  function temaActual() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function aplicar(tema) {
    if (tema === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }

    if (themeColor) themeColor.setAttribute("content", COLORS[tema]);

    if (toggle) {
      var siguiente = tema === "dark" ? "claro" : "oscuro";
      toggle.setAttribute("aria-label", "Cambiar a tema " + siguiente);
      toggle.setAttribute("title", "Cambiar a tema " + siguiente);
    }

    try {
      localStorage.setItem(STORAGE_KEY, tema);
    } catch (e) {
      // Navegación privada o almacenamiento bloqueado: el tema
      // funciona igual, solo que no se recuerda entre páginas.
    }
  }

  aplicar(temaActual());

  if (toggle) {
    toggle.addEventListener("click", function () {
      aplicar(temaActual() === "dark" ? "light" : "dark");
    });
  }
})();

/* ---------- 2. Menú móvil ---------- */
(function () {
  var nav = document.getElementById("nav");
  var menuToggle = document.getElementById("menuToggle");

  if (!nav || !menuToggle) return;

  function cerrar() {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  }

  menuToggle.addEventListener("click", function () {
    var abierto = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", abierto ? "true" : "false");
    menuToggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  });

  document.querySelectorAll("nav.links a").forEach(function (link) {
    link.addEventListener("click", cerrar);
  });

  // Cerrar con Escape: si se abre el menú con el teclado, hay que
  // poder salir con el teclado.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      cerrar();
      menuToggle.focus();
    }
  });
})();

/* ---------- 3. Formulario de inscripción ---------- */
(function () {
  var form = document.getElementById("contacto-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // El form tiene novalidate para que el navegador no envíe solo,
    // pero seguimos usando su validación nativa (required) antes de
    // armar el mensaje. Sin esto se podía "enviar" un WhatsApp con
    // campos vacíos.
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var mensaje = form.mensaje.value.trim();

    var lineas = [
      "¡Hola Soul La Academia! Me interesa tomar clases 🎶",
      "",
      "Nombre: " + form.nombre.value.trim(),
      "Instrumento/curso: " + form.instrumento.value,
      "Modalidad: " + form.modalidad.value,
      "Teléfono: " + form.telefono.value.trim()
    ];

    if (mensaje) lineas.push("Mensaje: " + mensaje);

    var url = "https://api.whatsapp.com/send?phone=573218951750&text=" +
              encodeURIComponent(lineas.join("\n"));

    window.open(url, "_blank", "noopener");
  });
})();
