// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBNmOEjvXaXS3YQoHR2nBG9Q1Qz-p9dcmU",
    authDomain: "slime-rancher-refinery-tracker.firebaseapp.com",
    projectId: "slime-rancher-refinery-tracker",
    storageBucket: "slime-rancher-refinery-tracker.firebasestorage.app",
    messagingSenderId: "643189494526",
    appId: "1:643189494526:web:fd40476b2a1de5dbc14baf"
};

// INSTRUCTIONS POUR CONFIGURER FIREBASE:
// 1. Allez sur https://console.firebase.google.com/u/0/project/slime-rancher-refinery-tracker/overview
// 2. Cliquez sur l'icône web </> pour ajouter une application web
// 3. Copiez les valeurs de configuration et remplacez-les ci-dessus
// 4. Activez Authentication > Sign-in method > Google et Email/Password
// 5. Activez Firestore Database en mode production
// 6. Ajoutez ces règles de sécurité Firestore:
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
*/

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Services Firebase
const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
