/* ════════════════════════════════════════════════════════════
FIREBASE — CONFIGURACIÓN DEL PROYECTO
 ════════════════════════════════════════════════════════════ */
const firebaseConfig = {
apiKey:            "AIzaSyCGuhLS_JwR0dCcIGmPQOERprT9cpNPsNc",
authDomain:        "menu-restaurante-ctp.firebaseapp.com",
databaseURL:       "https://menu-restaurante-ctp-6d03b-default-rtdb.firebaseio.com/",
projectId:         "menu-restaurante-ctp",
storageBucket:     "menu-restaurante-ctp.firebasestorage.app",
messagingSenderId: "96866323208",
appId:             "1:96866323208:web:79aecfafc2def5c7e4fabd"
};


/* ════════════════════════════════════════════════════════════
   CATEGORÍAS — edita aquí para agregar o cambiar categorías
   ════════════════════════════════════════════════════════════ */
const CATS = [
{ id: 'entrada', name: 'Entradas',       icon: '🥗', color: '#7F77DD', bg: '#EEEDFE' },
{ id: 'sopa',    name: 'Sopas',          icon: '🍲', color: '#B85C2A', bg: '#FAECE7' },
{ id: 'plato',   name: 'Platos fuertes', icon: '🍖', color: '#2A6648', bg: '#E1F5EE' },
{ id: 'postre',  name: 'Postres',        icon: '🍮', color: '#C2567A', bg: '#FBEAF0' },
{ id: 'bebida',  name: 'Bebidas',        icon: '🥤', color: '#2A5E8A', bg: '#E6F1FB' },
{ id: 'otro',    name: 'Otros',          icon: '✨', color: '#6B6057', bg: '#F1EFE8' },
];

