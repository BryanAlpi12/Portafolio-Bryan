// ============================================
// CONFIGURACIÓN FIREBASE
// ============================================
const firebaseConfig = {
  apiKey: "AIzaSyCx88wj20K9-JVqlmUdfTXtvMAcYLmw_Ro",
  authDomain: "portafolio-bff40.firebaseapp.com",
  databaseURL: "https://portafolio-bff40-default-rtdb.firebaseio.com",
  projectId: "portafolio-bff40",
  storageBucket: "portafolio-bff40.firebasestorage.app",
  messagingSenderId: "79805769932",
  appId: "1:79805769932:web:5f47a409f1991888447a69",
  measurementId: "G-TEPGZQ35VC"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ============================================
// CONFIGURACIÓN EMAILJS
// ============================================
emailjs.init("NJgG86X3xkkAk3qjE");

// ============================================
// FORMULARIO
// ============================================
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre  = document.getElementById("nombre").value;
  const correo  = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;
  const estado  = document.getElementById("estado");

  estado.innerText = "Enviando...";

  // 1️⃣ Guardar en Firebase
  db.ref("contactos").push({ nombre, correo, mensaje })
    .then(() => {
      // 2️⃣ Enviar correo con EmailJS
      return emailjs.send("service_x5at8rh", "template_ufe968q", {
        name:    nombre,
        email:   correo,
        message: mensaje,
        title:   "Portafolio - Nuevo mensaje"
      });
    })
    .then(() => {
      estado.innerText = "✔️ Mensaje enviado correctamente. ¡Gracias por escribir!";
      this.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      estado.innerText = "❌ Hubo un error al enviar. Intentá de nuevo.";
    });
});