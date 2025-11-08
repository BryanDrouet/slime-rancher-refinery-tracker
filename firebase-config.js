
const firebaseConfig = {
    apiKey: "AIzaSyBNmOEjvXaXS3YQoHR2nBG9Q1Qz-p9dcmU",
    authDomain: "slime-rancher-refinery-tracker.firebaseapp.com",
    projectId: "slime-rancher-refinery-tracker",
    storageBucket: "slime-rancher-refinery-tracker.firebasestorage.app",
    messagingSenderId: "643189494526",
    appId: "1:643189494526:web:fd40476b2a1de5dbc14baf"
};











firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
