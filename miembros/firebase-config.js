const firebaseConfig = {
  apiKey: "AIzaSyDAmuZBOY2ZfM130dr-Jc46XGoXyPVLBok",
  authDomain: "webareamiembros.firebaseapp.com",
  projectId: "webareamiembros",
  storageBucket: "webareamiembros.firebasestorage.app",
  messagingSenderId: "383065815815",
  appId: "1:383065815815:web:e93ffe699d2718e775e3a2",
  measurementId: "G-SFM61XMWMQ"
};

// Inicializar Firebase (NO MODIFICAR)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();  // Para autenticación
const db = firebase.firestore(); // Para base de datos (opcional)
