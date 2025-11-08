# Slime Rancher Refinery Tracker

Application web complète pour tracker vos dépôts de raffinerie dans Slime Rancher 1, avec toutes les recettes du jeu, le système Club 7Zee et synchronisation cloud.

## 🌟 Fonctionnalités

### 🔐 Authentification Firebase
- Connexion avec Google
- Connexion par email/mot de passe
- Sécurité complète avec Firestore

### 🌍 Multilingue
- **Sélecteur visuel avec drapeaux** : 🇫🇷 Français, 🇬🇧 English, 🇪🇸 Español
- Changement de langue instantané
- Traductions complètes de l'interface

### 🔬 Gestion de la Raffinerie
- **Liste déroulante auto-complète** avec toutes les ressources du jeu
- 36+ ressources disponibles (Drill, Pump, Apiary, Plorts)
- Suivi en temps réel de vos dépôts

### 📋 Recettes Complètes (51+ Gadgets)
- **Extractors** : Drills, Pumps, Apiaries (Novice, Advanced, Master)
- **Utilities** : Dash Boots, Jetpack, Tank Boosters, Heart Module, Turrets, Drones, Gordo Snares
- **Warp Tech** : Teleporter, Warp Depot, Refinery Link, Market Link
- **Decorations** : Slime Lamps, Statues, Echo Net
- **Curios** : Slime Toys, Fashion Pods
- **Personal Upgrades** : Slime Key, Treasure Crackers, Nimble Valley
- Prix et ingrédients exacts du jeu
- Système de favoris intelligent

### 🏆 Club 7Zee (28 Paliers)
- Tous les paliers de Initiate à Golden Owl III
- Coûts cumulatifs précis (jusqu'à 1,326,500 Newbucks)
- Récompenses détaillées (Chroma Packs, Upgrades, Gadgets)
- Suivi de votre argent et progression

### ⭐ Système de Favoris
- Ajoutez vos recettes favorites
- **Calcul automatique** des ressources totales nécessaires
- Vue d'ensemble pour planifier votre farming

### ☁️ Synchronisation Cloud
- Toutes vos données sauvegardées sur Firebase
- Accès depuis n'importe quel appareil
- Mise à jour en temps réel

## 🚀 Installation & Configuration

### 1. Configuration Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/u/0/project/slime-rancher-refinery-tracker/overview)
2. Cliquez sur l'icône web `</>` pour ajouter une application web
3. Copiez les valeurs de configuration
4. Ouvrez `firebase-config.js` et remplacez les valeurs par celles de votre projet

### 2. Activer les services Firebase

#### Authentication
1. Dans Firebase Console, allez dans **Authentication** > **Sign-in method**
2. Activez **Google** et **Email/Password**

#### Firestore Database
1. Allez dans **Firestore Database**
2. Créez une base de données en mode production
3. Ajoutez ces règles de sécurité :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 3. Déploiement sur GitHub Pages

#### Option A : Via les paramètres GitHub
1. Allez dans **Settings** > **Pages**
2. Source : sélectionnez la branche `main` et le dossier `/` (root)
3. Cliquez sur **Save**
4. Votre site sera disponible à : `https://BryanDrouet.github.io/slime-rancher-refinery-tracker/`

#### Option B : Via la ligne de commande
```bash
# Assurez-vous d'être sur la branche main
git checkout main

# Ajoutez tous les fichiers
git add .

# Commitez vos changements
git commit -m "Deploy Slime Rancher Refinery Tracker"

# Poussez sur GitHub
git push origin main
```

### 4. Configuration du domaine Firebase pour GitHub Pages

1. Dans Firebase Console, allez dans **Authentication** > **Settings**
2. Sous **Authorized domains**, ajoutez :
   - `bryandrouet.github.io`
   - Votre domaine personnalisé si vous en avez un

## 📱 Utilisation

1. **Connexion** : Créez un compte ou connectez-vous avec Google
2. **Raffinerie** : Ajoutez les objets que vous avez déposés
3. **Recettes** : 
   - Marquez les recettes achetées
   - Ajoutez vos favoris en cliquant sur ☆
4. **Club 7Zee** : Renseignez votre argent et palier actuel
5. **Favoris** : Consultez les ressources totales nécessaires pour vos recettes favorites

## 🎮 Recettes incluses

L'application contient toutes les recettes de Slime Rancher 1, notamment :
- Air Net, Dash Boots, Jetpack
- Tank Boosters (Health, Energy, Ammo)
- Turrets (Aqua, Hydro)
- Pulse Wave, Thunderclap
- Market Link, Treasure Crackers
- Et plus encore !

## 🛠️ Technologies utilisées

- **HTML5/CSS3** : Interface responsive
- **JavaScript** : Logique applicative
- **Firebase Authentication** : Gestion des utilisateurs
- **Firestore** : Base de données en temps réel
- **GitHub Pages** : Hébergement gratuit

## 📝 Structure du projet

```
slime-rancher-refinery-tracker/
├── index.html           # Page principale
├── styles.css          # Styles de l'application
├── app.js              # Logique principale
├── data.js             # Données des recettes
├── firebase-config.js  # Configuration Firebase
└── README.md           # Documentation
```

## 🔒 Sécurité

- Toutes les données sont liées à votre compte utilisateur
- Les règles Firestore empêchent l'accès non autorisé aux données
- Authentification sécurisée via Firebase

## 🌐 Accès à l'application

Une fois déployée : `https://BryanDrouet.github.io/slime-rancher-refinery-tracker/`

## 🐛 Dépannage

### L'authentification ne fonctionne pas
- Vérifiez que vous avez bien activé Google et Email/Password dans Firebase Console
- Vérifiez que votre domaine GitHub Pages est dans les domaines autorisés

### Les données ne se sauvegardent pas
- Vérifiez les règles de sécurité Firestore
- Ouvrez la console du navigateur (F12) pour voir les erreurs

### Erreur "Firebase not defined"
- Vérifiez que `firebase-config.js` contient bien vos vraies clés API

## 📄 Licence

Projet personnel pour suivre la progression dans Slime Rancher 1.

---

Bon farming ! 🌈✨
