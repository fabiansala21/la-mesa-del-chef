
let db = null;
let filterCat = 'all';

/* ════════════════════════════════════════════════════════════
8	FIREBASE — INICIALIZACIÓN
9	════════════════════════════════════════════════════════════ */
function initFirebase() {
try {
firebase.initializeApp(firebaseConfig);
db = firebase.database();
db.ref('.info/connected').on('value', snap => {
	setDbStatus(snap.val() === true ? 'connected' : 'disconnected');
	});	 
	startListening();
	} catch (e) {
	showToast('Error al conectar con Firebase: ' + e.message, 'error');
	setDbStatus('error');
	}
	}	 