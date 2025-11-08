# Instructions de configuration Firebase

## Étapes à suivre :

1. **Récupérer votre configuration Firebase :**
   - Allez sur https://console.firebase.google.com/u/0/project/slime-rancher-refinery-tracker/overview
   - Cliquez sur l'icône web "</>" (Ajouter une app)
   - Donnez un nom à votre app (ex: "Refinery Tracker Web")
   - Copiez le code de configuration qui ressemble à :
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "slime-rancher-refinery-tracker.firebaseapp.com",
     projectId: "slime-rancher-refinery-tracker",
     storageBucket: "slime-rancher-refinery-tracker.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abc123def456"
   };
   ```

2. **Remplacer dans firebase-config.js :**
   - Ouvrez le fichier `firebase-config.js`
   - Remplacez les valeurs "VOTRE_..." par vos vraies valeurs

3. **Activer Authentication :**
   - Dans Firebase Console, menu **Authentication**
   - Onglet **Sign-in method**
   - Activez **Google** :
     - Cliquez sur Google
     - Activez le bouton
     - Choisissez un email d'assistance
     - Sauvegardez
   - Activez **Email/Password** :
     - Cliquez sur Email/Password
     - Activez le bouton
     - Sauvegardez

4. **Configurer Firestore :**
   - Menu **Firestore Database**
   - Cliquez sur **Create database**
   - Choisissez **Production mode**
   - Sélectionnez une région (europe-west par exemple)
   - Allez dans l'onglet **Rules**
   - Remplacez le contenu par :
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId}/{document=**} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```
   - Cliquez sur **Publish**

5. **Ajouter le domaine GitHub Pages :**
   - Dans **Authentication** > **Settings**
   - Onglet **Authorized domains**
   - Ajoutez : `bryandrouet.github.io`
   - Sauvegardez

Vous êtes prêt ! 🚀
