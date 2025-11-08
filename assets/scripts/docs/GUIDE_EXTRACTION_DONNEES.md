# 📖 Guide d'extraction des données officielles de Slime Rancher

## 🎯 Objectif
Extraire les vraies traductions, prix, recettes et données du jeu pour remplacer les données approximatives actuelles.

---

## Méthode 1 : AssetStudio (RECOMMANDÉE - Simple et Visuelle)

### Étape 1 : Préparation
Vous avez déjà AssetStudio v0.16.47 installé ✅

### Étape 2 : Ouverture des assets
1. Lancez AssetStudio
2. **File** → **Load folder**
3. Sélectionnez : `F:\SteamLibrary\steamapps\common\Slime Rancher\SlimeRancher_Data\`
4. Attendez le chargement (peut prendre 1-2 minutes)

### Étape 3 : Recherche des traductions
1. Dans la liste, **filtrez par type** : `TextAsset`
2. Cherchez les fichiers contenant :
   - "Localization"
   - "French" ou "English" ou "Spanish"
   - "UI"
   - "Text"
3. Pour chaque fichier intéressant :
   - Clic droit → **Export Dump**
   - Sauvegardez dans un dossier temporaire

### Étape 4 : Fichiers à chercher spécifiquement

Recherchez ces noms (utilisez Ctrl+F dans AssetStudio) :

#### Traductions
- `LocalizationDirector`
- `ui_french` ou `ui_fr`
- `translations`
- `localization.json` ou `.txt`

#### Données de gadgets
- `GadgetDefinition`
- `GadgetDirectory`
- `gadget_prices`
- `recipes`

#### Données Vacpack
- `PersonalUpgrade`
- `UpgradeDefinition`
- `player_upgrades`

### Étape 5 : Export
Pour chaque fichier trouvé :
1. Sélectionnez-le
2. Clic droit → **Export Dump** (ou **Export Raw**)
3. Enregistrez-le avec un nom descriptif

---

## Méthode 2 : dnSpy (PRÉCISE - Pour les données hardcodées)

### Étape 1 : Installation
1. Téléchargez dnSpy : https://github.com/dnSpy/dnSpy/releases
2. Téléchargez `dnSpy-net-win64.zip`
3. Extrayez et lancez `dnSpy.exe`

### Étape 2 : Ouverture de l'assembly
1. **File** → **Open**
2. Naviguez vers : `F:\SteamLibrary\steamapps\common\Slime Rancher\SlimeRancher_Data\Managed\Assembly-CSharp.dll`
3. Attendez le chargement

### Étape 3 : Navigation dans le code

Dans l'arborescence de gauche, développez :
- **Assembly-CSharp**
  - **{} -** (namespace vide)
  - Cherchez ces classes :

#### 📋 Classes importantes à explorer :

**1. Identifiable** (enum de tous les objets)
```
Cherchez : class Identifiable
```
Contient TOUS les IDs d'objets du jeu (plorts, resources, gadgets, etc.)

**2. GadgetDefinition** (définition des gadgets)
```
Cherchez : class GadgetDefinition
```
Contient les coûts en newbucks de chaque gadget

**3. PersonalUpgradeDefinition** (améliorations Vacpack)
```
Cherchez : class PersonalUpgradeDefinition
```
Contient les coûts et définitions des upgrades

**4. LocalizationDirector** (système de traduction)
```
Cherchez : class LocalizationDirector
```
Méthodes de traduction et clés de localisation

**5. EconomyDirector** (prix du marché)
```
Cherchez : class EconomyDirector
```
Prix de base des plorts

**6. PlayerState** (données du joueur)
```
Cherchez : class PlayerState
```
Définitions des upgrades et progression

### Étape 4 : Export du code
Pour chaque classe intéressante :
1. Clic droit sur la classe
2. **Export to Project**
3. Sauvegardez dans un dossier

---

## Méthode 3 : Exploration manuelle des fichiers

### Fichiers texte potentiels
Cherchez dans : `F:\SteamLibrary\steamapps\common\Slime Rancher\`

```
SlimeRancher_Data\
├── StreamingAssets\          ← Peut contenir des fichiers de config
├── resources.assets           ← Assets principaux
├── sharedassets0.assets       ← Assets partagés
├── sharedassets1.assets
└── level*                     ← Assets de niveaux
```

Ouvrez ces dossiers et cherchez :
- Fichiers `.txt`
- Fichiers `.json`
- Fichiers `.xml`
- Fichiers `.bytes` (peuvent être du texte encodé)

---

## 📤 Comment me transmettre les données

### Option A : Copier-coller direct
Si vous trouvez des fichiers texte lisibles :
1. Ouvrez-les avec Notepad++
2. Copiez le contenu
3. Partagez-moi le texte (surtout les sections French/Français)

### Option B : Screenshots
Pour les données dans dnSpy :
1. Faites des captures d'écran des classes
2. Partagez-les moi
3. Je transcrirai les données

### Option C : Export de fichiers
Exportez les fichiers texte et partagez-leur contenu.

---

## 🎯 Données prioritaires à chercher

### 1. Traductions FR/EN/ES (PRIORITÉ HAUTE)
Format recherché :
```
jellystone.name.french = "Pierre de gelée"
jellystone.name.english = "Jellystone"
```

Ou :
```json
{
  "jellystone": {
    "fr": "Pierre de gelée",
    "en": "Jellystone",
    "es": "Piedra de gelatina"
  }
}
```

### 2. Prix des gadgets (PRIORITÉ HAUTE)
Format recherché :
```
Novice Drill: 250 newbucks
Advanced Drill: 450 newbucks
Master Drill: 500 newbucks
```

### 3. Ingrédients des recettes (PRIORITÉ MOYENNE)
Format recherché :
```
Advanced Drill:
  - Lava Dust x10
  - Primordy Oil x10
```

### 4. Club 7Zee (PRIORITÉ MOYENNE)
- Prix par tier (actuellement j'ai : 750, 2500, 5000, 7500, 10000)
- Nom exact des tiers en FR/EN/ES

### 5. Vacpack Upgrades (PRIORITÉ MOYENNE)
- Prix exacts par niveau
- Noms complets des améliorations

---

## 💡 Conseils

### AssetStudio
- Utilisez le filtre de recherche (Ctrl+F)
- Triez par type pour trouver les TextAsset
- Exportez en "Dump" pour du texte lisible

### dnSpy
- Utilisez la recherche (Ctrl+Shift+K) pour chercher des classes
- Regardez les constructeurs et les méthodes `Initialize()`
- Les tableaux/arrays contiennent souvent les données

### Si vous ne trouvez rien
Les données peuvent être :
- Encodées en binaire (dans les .assets)
- Générées dynamiquement dans le code C#
- Dans des ScriptableObjects Unity

Dans ce cas, dnSpy sera la meilleure option pour voir le code source.

---

## ❓ Questions fréquentes

**Q : Je ne trouve pas de fichiers de localisation dans AssetStudio**
R : Essayez dnSpy, les traductions sont peut-être hardcodées dans le code C#

**Q : Les fichiers .assets sont illisibles**
R : C'est normal, utilisez AssetStudio ou dnSpy uniquement

**Q : Il y a trop de fichiers dans AssetStudio**
R : Utilisez les filtres par type et la recherche textuelle

**Q : Je ne comprends pas le code C# dans dnSpy**
R : Pas grave ! Cherchez juste les arrays, les strings et les nombres (prix)

---

## 🚀 Prochaines étapes

1. Essayez d'abord AssetStudio pour les traductions
2. Si vous ne trouvez rien, passez à dnSpy
3. Partagez-moi ce que vous trouvez (même partiellement)
4. Je mettrai à jour le fichier `data.js` avec les vraies données

Bonne chance ! 🎮
