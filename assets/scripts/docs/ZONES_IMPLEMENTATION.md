# Système des Terres/Zones - Documentation

## Vue d'ensemble
Un système de gestion des terres/zones a été ajouté au tracker Slime Rancher, permettant de suivre les achats de terrains et de contrôler l'accès à certaines fonctionnalités du jeu.

## Fonctionnalités clés

### 1. **Terres disponibles**
- **Laboratoire (Lab)** 🔬 - 10 000 $ - **REQUIS**
  - Débloque la raffinerie
  - Débloque les extracteurs
  - Débloque Slime Science
  - Ne peut pas être retiré s'il y a des ressources dans la raffinerie

- **Jardin Foisonnant (Overgrowth)** 🌿 - 7 500 $
  - Plus de parcelles de ranch

- **Grotte Antique (Grotto)** 🌊 - 7 500 $
  - Nouvelles parcelles de ranch

- **Docks Vieux (Docks)** ⚓ - 7 500 $
  - Extension du ranch

### 2. **Contrôle d'accès**
- L'accès à la raffinerie est **bloqué** sans l'achat du Laboratoire
- Un message d'avertissement s'affiche dans la section raffinerie si le labo n'est pas acheté
- Bouton direct pour aller à la section Terres depuis le message de verrouillage

### 3. **Interface utilisateur**

#### **Section Zones**
- Grille responsive de cartes de zones
- Badge "Requis" pour le Laboratoire
- Indicateurs visuels :
  - Bordure jaune pour les zones requises
  - Bordure verte pour les zones possédées
  - Icônes distinctives pour chaque zone
- Liste des débloquages pour chaque zone
- Prix affiché en Newbucks

#### **Message de verrouillage**
Affiché dans la raffinerie quand le labo n'est pas acheté :
```
🔒 Laboratoire requis
Vous devez acheter le Laboratoire pour accéder à la raffinerie 
et aux recettes de Slime Science.
[Bouton: Aller aux Terres]
```

## Modifications des fichiers

### **app.js**
- Ajout de `ownedZones: []` dans `userData`
- Nouvelle fonction `hasLabAccess()` - vérifie si le labo est acheté
- Nouvelle fonction `toggleZone(zoneId)` - gère l'achat/retrait de zones
- Nouvelle fonction `displayZones()` - affiche les cartes de zones
- Modification de `displayRefineryDeposits()` - ajoute le contrôle d'accès au labo
- Initialisation de `ownedZones` dans `loadUserData()`
- Ajout de `displayZones()` dans le chargement initial
- Ajout de 'zones' dans les sections valides

### **data.js**
- Nouveau tableau `ZONES_DATA` avec 4 zones
- Structure de zone :
  ```javascript
  {
    id: 'lab',
    nameKey: 'zoneLab',
    price: 10000,
    icon: '🔬',
    unlocks: ['Raffinerie', 'Extracteurs', 'Slime Science'],
    required: true
  }
  ```

### **translations.js**
Ajout de traductions pour FR/EN/ES :
- `zonesTitle` - "Terres Achetées"/"Purchased Lands"/"Tierras Compradas"
- `zoneOwned` - "✓ Possédée"/"✓ Owned"/"✓ Poseída"
- `zoneBuy` - "Acheter"/"Purchase"/"Comprar"
- `zonePrice`, `zoneUnlock`, `zoneRequired`
- `zoneAdded`, `zoneRemoved` - messages de confirmation
- `cannotRemoveLab` - message d'erreur
- `labRequired`, `labRequiredDesc` - message de verrouillage
- `goToZones` - bouton de navigation
- 8 noms de zones traduits (lab, overgrowth, grotto, docks, moss, desert, reef, ruins)

### **index.html**
- Nouveau bouton de navigation "Terres" dans le menu
- Nouvelle section `zones-section` avec :
  - Notice d'avertissement
  - Conteneur `zones-list` pour les cartes

### **styles.css**
Ajout de 200+ lignes de styles pour :
- `.zone-notice` - bannière d'avertissement jaune
- `.zones-grid` - grille responsive (auto-fit, minmax(280px, 1fr))
- `.zone-card` - cartes de zones avec gradient
  - `.zone-card.owned` - bordure verte pour zones possédées
  - `.zone-card.required` - bordure jaune pour zone obligatoire
- `.zone-header` - en-tête avec icône et nom
- `.zone-icon` - grande icône de zone (3rem)
- `.zone-required-badge` - badge "Requis" rouge
- `.zone-info` - informations de prix et débloquages
- `.zone-locked-message` - message de verrouillage centré
- `.btn-zone` - bouton d'achat/possession
- Effets de survol et animations
- Responsive design pour mobile

## Intégration Firebase

### **Structure de données**
```javascript
userData = {
  refineryDeposits: {},
  purchasedRecipes: [],
  favoriteRecipes: [],
  currentMoney: 0,
  currentTier: 0,
  purchasedClubTiers: [],
  ownedDlcs: [],
  purchasedVacpackUpgrades: [],
  ownedZones: []  // NOUVEAU
}
```

### **Synchronisation**
- Sauvegarde automatique lors de l'achat/retrait de zones
- Chargement au démarrage avec initialisation par défaut
- Rafraîchissement des sections dépendantes (raffinerie, recettes)

## Logique de sécurité

### **Protection contre la suppression du labo**
```javascript
if (zoneId === 'lab') {
    const hasDeposits = Object.keys(userData.refineryDeposits).length > 0;
    if (hasDeposits) {
        showError('Impossible de retirer le labo avec des ressources dans la raffinerie');
        return;
    }
}
```

### **Vérification d'accès**
```javascript
function hasLabAccess() {
    return userData.ownedZones && userData.ownedZones.includes('lab');
}
```

## Design Pattern

Le système suit le même modèle que les DLCs :
1. Données dans un tableau constant (ZONES_DATA)
2. État stocké dans userData
3. Fonctions toggle pour gérer l'achat/retrait
4. Fonction display pour le rendu
5. Sauvegarde Firebase asynchrone
6. Messages de notification (succès/erreur)

## Utilisation de la police officielle

Toutes les zones utilisent la police **FLOPDesignFont.ttf** du jeu Slime Rancher, déjà intégrée dans `styles.css` :
```css
@font-face {
    font-family: 'FLOPDesign';
    src: url('assets/fonts/FLOPDesignFont.ttf') format('truetype');
}
```

## Points d'amélioration possibles

1. **Traductions des débloquages** - Actuellement en français fixe dans data.js
2. **Filtrage des recettes** - Ajouter un indicateur pour les recettes nécessitant le labo
3. **Animations** - Transitions lors de l'achat de zones
4. **Statistiques** - Afficher le total dépensé en terres
5. **Ordre des zones** - Possibilité de trier par prix, nom, ou statut
6. **Zones supplémentaires** - Ajouter Moss Blanket, Glass Desert, etc.

## Compatibilité

- ✅ Multi-langue (FR/EN/ES)
- ✅ Responsive (mobile/tablette/desktop)
- ✅ Firebase (sauvegarde cloud)
- ✅ Offline-first (données en mémoire)
- ✅ Thème Slime Rancher (polices officielles)
- ✅ Messages d'erreur traduits

## Tests recommandés

1. ✅ Acheter le labo → la raffinerie devient accessible
2. ✅ Retirer le labo sans ressources → fonctionne
3. ✅ Essayer de retirer le labo avec ressources → erreur
4. ✅ Accéder à la raffinerie sans labo → message de verrouillage
5. ✅ Changer de langue → tout est traduit
6. ✅ Recharger la page → zones sauvegardées
7. ✅ Acheter/retirer d'autres zones → pas d'impact sur la raffinerie

## Conclusion

Le système des zones ajoute une couche de progression fidèle au jeu original, en empêchant l'accès à la raffinerie tant que le Laboratoire n'est pas acheté. L'interface est cohérente avec le reste du tracker et utilise les polices officielles du jeu.
