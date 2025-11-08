# 🔍 Recherche rapide des données - Checklist

## ✅ Checklist AssetStudio

Ouvrez : `F:\SteamLibrary\steamapps\common\Slime Rancher\SlimeRancher_Data\`

### Étape 1 : Filtrer par type "TextAsset"
Cherchez ces noms (Ctrl+F dans la liste) :

- [ ] `localization`
- [ ] `french`
- [ ] `english`
- [ ] `spanish`
- [ ] `translation`
- [ ] `ui_text`
- [ ] `gadget`
- [ ] `recipe`
- [ ] `upgrade`
- [ ] `price`
- [ ] `club`
- [ ] `market`

### Étape 2 : Export
Pour chaque fichier trouvé → Clic droit → Export Dump

---

## ✅ Checklist dnSpy

Ouvrez : `F:\SteamLibrary\steamapps\common\Slime Rancher\SlimeRancher_Data\Managed\Assembly-CSharp.dll`

### Classes à chercher (Ctrl+Shift+K) :

#### Essentielles :
- [ ] `Identifiable` → enum de tous les objets
- [ ] `GadgetDefinition` → définition des gadgets
- [ ] `LookupDirector` → répertoire d'objets
- [ ] `LocalizationDirector` → traductions

#### Économie :
- [ ] `EconomyDirector` → prix du marché
- [ ] `MarketUI` → interface marché
- [ ] `ExchangeDirector` → échanges

#### Upgrades :
- [ ] `PersonalUpgradeDefinition` → upgrades Vacpack
- [ ] `PlayerState` → état du joueur
- [ ] `ProgressDirector` → progression

#### Gadgets & Recettes :
- [ ] `GadgetDirector` → gestionnaire de gadgets
- [ ] `Gadget` → classe de base
- [ ] `ExtractorGadget` → extracteurs (drill/pump/apiary)
- [ ] `GordoSnareGadget` → pièges à Gordo

#### Club 7Zee :
- [ ] `ExchangeOfferDefinition` → offres du club
- [ ] `ExchangeDirector` → gestionnaire du club
- [ ] `OfferUI` → interface du club

---

## 📋 Template pour me partager les données

### Format traduction :
```
RESSOURCE: [Nom Anglais]
  FR: [Nom Français]
  EN: [Nom Anglais]
  ES: [Nom Espagnol]
```

Exemple :
```
RESSOURCE: Jellystone
  FR: Pierre de gelée
  EN: Jellystone
  ES: Piedra de gelatina
```

### Format prix :
```
GADGET: [Nom]
  Prix: [XXX] newbucks
  Ingrédients: 
    - [Resource] x[Quantité]
    - [Resource] x[Quantité]
```

Exemple :
```
GADGET: Advanced Drill
  Prix: 450 newbucks
  Ingrédients:
    - Lava Dust x10
    - Primordy Oil x10
```

---

## 🎯 Objectif minimal

Si vous ne trouvez qu'UNE SEULE de ces données, c'est déjà super :

1. **Les traductions françaises** des 32 ressources de raffinerie
2. **Les prix** des gadgets extracteurs (drills, pumps, apiaries)
3. **Les prix** des tiers Club 7Zee

Tout le reste est bonus ! 🎉
