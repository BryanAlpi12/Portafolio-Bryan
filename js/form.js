// CONFIGURACIÓN
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

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  db.ref("contactos").push({
    nombre,
    correo,
    mensaje
  });

  document.getElementById("estado").innerText = "Mensaje enviado correctamente ✔️";

  this.reset();
});
