#!/usr/bin/env python3
"""
Script pour extraire les données officielles depuis les fichiers de langue Slime Rancher
et générer le fichier data.js avec les vraies traductions et prix
"""

import re
import json

# Langues supportées
LANGUAGES = {
    'en': 'English',
    'fr': 'Français',
    'es': 'Español',
    'de': 'Deutsch',
    'pt': 'Português',
    'ru': 'Русский',
    'zh': '中文',
    'ja': '日本語',
    'ko': '한국어',
    'sv': 'Svenska'
}

def parse_lang_file(filepath):
    """Parse un fichier de langue et retourne un dictionnaire clé=valeur"""
    data = {}
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                # Ignore les commentaires et lignes vides
                if not line or line.startswith('#') or line.startswith('//'):
                    continue
                # Parse les lignes clé = valeur
                if ' = ' in line:
                    parts = line.split(' = ', 1)
                    if len(parts) == 2:
                        key = parts[0].strip()
                        value = parts[1].strip()
                        data[key] = value
    except FileNotFoundError:
        print(f"⚠️  Fichier non trouvé: {filepath}")
    except Exception as e:
        print(f"❌ Erreur lors de la lecture de {filepath}: {e}")
    
    return data

def extract_resources(lang_data, lang_code):
    """Extrait les noms des ressources de raffinerie"""
    resources = {}
    
    # Mapping des ressources (clés du jeu → noms que nous utilisons)
    resource_mapping = {
        # Extracteur Drill (forage)
        'l.jellystone': 'Jellystone',
        'l.slime_fossil': 'Slime Fossil',
        'l.strange_diamond': 'Strange Diamond',
        'l.indigonium': 'Indigonium',
        'l.glass_shard': 'Glass Shard',
        
        # Extracteur Pump (pompage)
        'l.primordy_oil': 'Primordy Oil',
        'l.spiral_steam': 'Spiral Steam',
        'l.lava_dust': 'Lava Dust',
        'l.deep_brine': 'Deep Brine',
        'l.silky_sand': 'Silky Sand',
        
        # Extracteur Apiary (ruche)
        'l.buzz_wax': 'Buzz Wax',
        'l.hexacomb': 'Hexacomb',
        'l.royal_jelly': 'Royal Jelly',
        'l.wild_honey': 'Wild Honey',
        'l.pepper_jam': 'Pepper Jam',
        
        # Special
        'l.manifold_cube': 'Manifold Cube',
        
        # Plorts
        'l.pink_plort': 'Pink Plort',
        'l.rock_plort': 'Rock Plort',
        'l.tabby_plort': 'Tabby Plort',
        'l.phosphor_plort': 'Phosphor Plort',
        'l.honey_plort': 'Honey Plort',
        'l.boom_plort': 'Boom Plort',
        'l.crystal_plort': 'Crystal Plort',
        'l.rad_plort': 'Rad Plort',
        'l.hunter_plort': 'Hunter Plort',
        'l.quantum_plort': 'Quantum Plort',
        'l.mosaic_plort': 'Mosaic Plort',
        'l.dervish_plort': 'Dervish Plort',
        'l.tangle_plort': 'Tangle Plort',
        'l.saber_plort': 'Saber Plort',
        'l.fire_plort': 'Fire Plort',
        'l.puddle_plort': 'Puddle Plort',
    }
    
    for key, resource_name in resource_mapping.items():
        if key in lang_data:
            resources[resource_name] = lang_data[key]
        else:
            # Essayer des variantes
            alt_key = key.replace('l.', 'b.')
            if alt_key in lang_data:
                resources[resource_name] = lang_data[alt_key]
    
    return resources

def extract_gadgets(ui_data, actor_data, lang_code):
    """Extrait les noms des gadgets/recettes"""
    gadgets = {}
    
    # Mapping des gadgets
    gadget_mapping = {
        # Drills
        'l.novice_drill': 'Novice Drill',
        'l.advanced_drill': 'Advanced Drill',
        'l.master_drill': 'Master Drill',
        
        # Pumps
        'l.novice_pump': 'Novice Pump',
        'l.advanced_pump': 'Advanced Pump',
        'l.master_pump': 'Master Pump',
        
        # Apiaries
        'l.novice_apiary': 'Novice Apiary',
        'l.advanced_apiary': 'Advanced Apiary',
        'l.master_apiary': 'Master Apiary',
        
        # Vacpack
        'l.dash_boots': 'Dash Boots',
        'l.jetpack': 'Jetpack',
        'l.heart_module': 'Heart Module',
        
        # Utilities
        'l.teleporter': 'Teleporter',
        'l.warp_depot': 'Warp Depot',
        'l.market_link': 'Market Link',
        'l.refinery_link': 'Refinery Link',
    }
    
    for key, gadget_name in gadget_mapping.items():
        if key in ui_data:
            gadgets[gadget_name] = ui_data[key]
        elif key in actor_data:
            gadgets[gadget_name] = actor_data[key]
    
    return gadgets

def extract_exchange_data(exchange_data, lang_code):
    """Extrait les données du Club 7Zee"""
    club_data = {}
    
    # Recherche des tiers et prix
    tier_patterns = {
        'tier1': ['m.exchange.offer.tier1', 't.tier1', 'l.tier_1'],
        'tier2': ['m.exchange.offer.tier2', 't.tier2', 'l.tier_2'],
        'tier3': ['m.exchange.offer.tier3', 't.tier3', 'l.tier_3'],
        'tier4': ['m.exchange.offer.tier4', 't.tier4', 'l.tier_4'],
        'tier5': ['m.exchange.offer.tier5', 't.tier5', 'l.tier_5'],
    }
    
    for tier_key, patterns in tier_patterns.items():
        for pattern in patterns:
            if pattern in exchange_data:
                club_data[tier_key] = exchange_data[pattern]
                break
    
    return club_data

def main():
    print("🎮 Extraction des données officielles Slime Rancher")
    print("=" * 60)
    
    base_path = "/workspaces/slime-rancher-refinery-tracker/assets/lang"
    
    all_translations = {
        'resources': {},
        'gadgets': {},
        'club': {},
        'common': {}
    }
    
    for lang_code in ['en', 'fr', 'es']:
        print(f"\n📁 Traitement de la langue: {lang_code.upper()}")
        
        # Charger les fichiers
        ui_data = parse_lang_file(f"{base_path}/ui_{lang_code}.txt")
        actor_data = parse_lang_file(f"{base_path}/actor_{lang_code}.txt")
        exchange_data = parse_lang_file(f"{base_path}/exchange_{lang_code}.txt")
        
        print(f"   ✅ UI: {len(ui_data)} entrées")
        print(f"   ✅ Actor: {len(actor_data)} entrées")
        print(f"   ✅ Exchange: {len(exchange_data)} entrées")
        
        # Extraire les ressources
        resources = extract_resources({**ui_data, **actor_data}, lang_code)
        all_translations['resources'][lang_code] = resources
        print(f"   📦 Ressources extraites: {len(resources)}")
        
        # Extraire les gadgets
        gadgets = extract_gadgets(ui_data, actor_data, lang_code)
        all_translations['gadgets'][lang_code] = gadgets
        print(f"   🔧 Gadgets extraits: {len(gadgets)}")
        
        # Extraire Club 7Zee
        club = extract_exchange_data(exchange_data, lang_code)
        all_translations['club'][lang_code] = club
        print(f"   🎫 Club 7Zee: {len(club)} tiers")
        
        # Mots communs
        common_words = {}
        common_mapping = {
            'b.ok': 'ok',
            'b.cancel': 'cancel',
            'm.day': 'day',
            'l.empty': 'empty',
        }
        for key, word in common_mapping.items():
            if key in ui_data:
                common_words[word] = ui_data[key]
        
        all_translations['common'][lang_code] = common_words
    
    # Sauvegarder en JSON
    output_file = f"{base_path}/extracted_translations.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(all_translations, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Données extraites et sauvegardées dans: {output_file}")
    print(f"\n📊 Résumé:")
    for lang in ['en', 'fr', 'es']:
        print(f"   {lang.upper()}: {len(all_translations['resources'].get(lang, {}))} ressources, "
              f"{len(all_translations['gadgets'].get(lang, {}))} gadgets")

if __name__ == "__main__":
    main()
