# 🎯 Fichiers à extraire - LISTE PRIORITAIRE

Basé sur votre fichier assets.xml, voici les fichiers EXACTS à extraire :

## 📁 Fichiers de traduction UI (Interface)

### FRANÇAIS (PRIORITÉ ABSOLUE) ✅
```
Container: i18n/fr/ui
PathID: 1920
Source: resources.assets
Size: 33208 bytes
```
**👉 EXPORTEZ CE FICHIER EN PREMIER !**

### ANGLAIS (référence)
```
Container: i18n/en/ui
PathID: 1811
Source: resources.assets
Size: 30920 bytes
```

### ESPAGNOL
```
Container: i18n/es/ui
PathID: 1864
Source: resources.assets
Size: 32844 bytes
```

---

## 📁 Fichiers Actor (Noms des objets/acteurs)

### FRANÇAIS ✅
```
Container: i18n/fr/actor
PathID: 1827
Source: resources.assets
Size: 11556 bytes
```
**👉 EXPORTEZ CELUI-CI AUSSI !**

### ANGLAIS
```
Container: i18n/en/actor
PathID: 1791
Source: resources.assets
Size: 10500 bytes
```

### ESPAGNOL
```
Container: i18n/es/actor
PathID: 1835
Source: resources.assets
Size: 10896 bytes
```

---

## 📁 Fichiers Exchange (Club 7Zee)

### FRANÇAIS ✅
```
Container: i18n/fr/exchange
PathID: 1909
Source: resources.assets
Size: 36908 bytes
```
**👉 CELUI-CI CONTIENT LES DONNÉES DU CLUB 7ZEE !**

### ANGLAIS
```
Container: i18n/en/exchange
PathID: 1902
Source: resources.assets
Size: 34344 bytes
```

### ESPAGNOL
```
Container: i18n/es/exchange
PathID: 1830
Source: resources.assets
Size: 36728 bytes
```

---

## 📁 Fichiers Global

### FRANÇAIS
```
Container: i18n/fr/global
PathID: 1815
Source: resources.assets
Size: 1208 bytes
```

### ANGLAIS
```
Container: i18n/en/global
PathID: 1804
Source: resources.assets
Size: 1224 bytes
```

### ESPAGNOL
```
Container: i18n/es/global
PathID: 1877
Source: resources.assets
Size: 1224 bytes
```

---

## 🎯 INSTRUCTIONS D'EXPORT

### Dans AssetStudio :

1. **Ouvrez AssetStudio** (déjà fait ✅)
2. **Chargez** `resources.assets` (déjà fait ✅)
3. **Filtrez** par type `TextAsset` (déjà fait ✅)

4. **Pour chaque fichier ci-dessus** :
   
   **Méthode A - Par Container (RECOMMANDÉ)**
   - Tapez Ctrl+F
   - Cherchez : `i18n/fr/ui`
   - Sélectionnez le fichier
   - Clic droit → **Export Dump**
   - Enregistrez sous : `ui_fr.txt`
   
   **Méthode B - Par PathID**
   - Triez la liste par PathID
   - Trouvez PathID `1920` (pour ui français)
   - Clic droit → **Export Dump**
   - Enregistrez sous : `ui_fr.txt`

5. **Répétez pour ces 9 fichiers prioritaires** :
   - `ui_fr.txt` (PathID: 1920)
   - `ui_en.txt` (PathID: 1811)
   - `ui_es.txt` (PathID: 1864)
   - `actor_fr.txt` (PathID: 1827)
   - `actor_en.txt` (PathID: 1791)
   - `actor_es.txt` (PathID: 1835)
   - `exchange_fr.txt` (PathID: 1909)
   - `exchange_en.txt` (PathID: 1902)
   - `exchange_es.txt` (PathID: 1830)

---

## 📋 Ce que ces fichiers contiennent

### `ui` - Interface utilisateur
- Noms de menus
- Textes de boutons
- Messages système
- **Noms des ressources de raffinerie**
- **Noms des gadgets**
- **Noms des améliorations Vacpack**

### `actor` - Acteurs/Objets
- Noms des slimes
- Noms des ressources
- Noms des plorts
- Descriptions courtes

### `exchange` - Club 7Zee
- **Noms des tiers du club**
- **Prix des tiers**
- **Descriptions des récompenses**
- Offres spéciales

### `global` - Données globales
- Unités (newbucks, etc.)
- Termes généraux

---

## ✅ CHECKLIST

- [ ] Exporter `ui_fr.txt`
- [ ] Exporter `ui_en.txt`
- [ ] Exporter `ui_es.txt`
- [ ] Exporter `actor_fr.txt`
- [ ] Exporter `actor_en.txt`
- [ ] Exporter `actor_es.txt`
- [ ] Exporter `exchange_fr.txt`
- [ ] Exporter `exchange_en.txt`
- [ ] Exporter `exchange_es.txt`
- [ ] Partager les fichiers .txt ici

---

## 🚀 APRÈS L'EXPORT

Une fois les 9 fichiers exportés, vous pouvez :
1. Les ouvrir avec Notepad++
2. Me copier-coller leur contenu (ou les partager directement)
3. Je vais extraire les données et mettre à jour `data.js`

**Ces fichiers contiennent TOUTES les traductions officielles du jeu !** 🎉
