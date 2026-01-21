/* BARRA DE NAVEGACION */

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/* FINANCIACION */

document.getElementById("miFormulario").addEventListener("submit", function(event){
  event.preventDefault(); // Evita que el formulario se envíe

   // Obtener los valores de los campos del formulario
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("dni").value;

    // Validar que los campos no estén vacíos
    if(nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
      alert("Por favor, completa todos los campos del formulario.");
      return; // Detener la ejecución de la función si hay campos vacíos
    }

    // Validar el formato del correo electrónico
    var emailRegex = /^\S+@\S+\.\S+$/;
    if(!emailRegex.test(email)) {
      alert("Por favor, introduce un correo electrónico válido.");
      return; // Detener la ejecución de la función si el correo electrónico no es válido
    }

    // Si todos los campos son válidos, puedes enviar los datos a través de una petición AJAX o realizar cualquier otra acción deseada
    // Por ejemplo, aquí simplemente mostramos los datos en la consola
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Dni:", dni);
  });

/* ABRIR VENTANA EN REQUISITOS */
function abrirVentana() {
  // Abre una nueva ventana con una URL específica y algunas opciones de tamaño y posición
  window.open("requisitos.html", "_blank", "width=600, height=350");
}

/* ABRIR PAGINA DE VENTAS */
function abrirVentas() {
  // Abre una nueva ventana con una URL específica y algunas opciones de tamaño y posición
  window.open("ventas.html", "_blank");
}
