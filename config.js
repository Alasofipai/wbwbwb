// archivos/config.js
const firebaseConfig = { databaseURL: "https://copendndsn-default-rtdb.firebaseio.com/" };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

window.db = firebase.database();

// Mantener el mismo ID de sesión en todo el sitio
window.sessionId = localStorage.getItem('session_id');
if (!window.sessionId) {
    window.sessionId = 'USER-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    localStorage.setItem('session_id', window.sessionId);
}