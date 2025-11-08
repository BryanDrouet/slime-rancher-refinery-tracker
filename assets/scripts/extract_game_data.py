#!/usr/bin/env python3
"""
Script d'extraction des données officielles de Slime Rancher
Utilise UnityPy pour parser les assets Unity
"""

import os
import json
import sys

try:
    import UnityPy
except ImportError:
    print("❌ UnityPy n'est pas installé")
    print("📦 Installez-le avec : pip install UnityPy")
    sys.exit(1)

# Chemin de votre installation Steam
SLIME_RANCHER_PATH = "F:/SteamLibrary/steamapps/common/Slime Rancher/SlimeRancher_Data"

def extract_localizations(env):
    """Extrait les fichiers de localisation"""
    localizations = {}
    
    for obj in env.objects:
        if obj.type.name == "TextAsset":
            data = obj.read()
            if "local" in data.name.lower() or "french" in data.name.lower() or "translation" in data.name.lower():
                print(f"✅ Trouvé: {data.name}")
                try:
                    text = data.script.decode('utf-8', errors='ignore')
                    localizations[data.name] = text
                except:
                    localizations[data.name] = str(data.script)
    
    return localizations

def extract_monobehaviours(env):
    """Extrait les MonoBehaviour qui contiennent les définitions de gadgets/upgrades"""
    behaviours = {}
    
    for obj in env.objects:
        if obj.type.name == "MonoBehaviour":
            data = obj.read()
            name = data.name if hasattr(data, 'name') else "unknown"
            
            # Cherche les objets intéressants
            if any(keyword in name.lower() for keyword in ['gadget', 'upgrade', 'recipe', 'definition', 'club']):
                print(f"✅ Trouvé MonoBehaviour: {name}")
                try:
                    behaviours[name] = data.read_typetree()
                except:
                    behaviours[name] = str(data)
    
    return behaviours

def main():
    print("🎮 Extraction des données Slime Rancher")
    print("=" * 50)
    
    if not os.path.exists(SLIME_RANCHER_PATH):
        print(f"❌ Chemin introuvable: {SLIME_RANCHER_PATH}")
        print("📝 Modifiez la variable SLIME_RANCHER_PATH dans le script")
        return
    
    output_dir = "./extracted_data"
    os.makedirs(output_dir, exist_ok=True)
    
    # Liste des fichiers à analyser
    asset_files = [
        "resources.assets",
        "sharedassets0.assets",
        "sharedassets1.assets",
        "sharedassets2.assets",
    ]
    
    all_localizations = {}
    all_behaviours = {}
    
    for asset_file in asset_files:
        asset_path = os.path.join(SLIME_RANCHER_PATH, asset_file)
        
        if not os.path.exists(asset_path):
            print(f"⏭️  Fichier ignoré (non trouvé): {asset_file}")
            continue
        
        print(f"\n📂 Analyse de {asset_file}...")
        
        try:
            env = UnityPy.load(asset_path)
            
            # Extrait les localisations
            locs = extract_localizations(env)
            all_localizations.update(locs)
            
            # Extrait les MonoBehaviours
            behaviours = extract_monobehaviours(env)
            all_behaviours.update(behaviours)
            
        except Exception as e:
            print(f"❌ Erreur lors de l'analyse de {asset_file}: {e}")
    
    # Sauvegarde les résultats
    print("\n💾 Sauvegarde des données...")
    
    # Localizations
    if all_localizations:
        with open(f"{output_dir}/localizations.json", "w", encoding="utf-8") as f:
            json.dump(all_localizations, f, indent=2, ensure_ascii=False)
        print(f"✅ {len(all_localizations)} fichiers de localisation sauvegardés")
    
    # MonoBehaviours (en JSON si possible, sinon en texte)
    if all_behaviours:
        with open(f"{output_dir}/game_objects.json", "w", encoding="utf-8") as f:
            # Convertit en JSON serializable
            serializable = {}
            for key, value in all_behaviours.items():
                try:
                    serializable[key] = value if isinstance(value, (dict, list, str, int, float)) else str(value)
                except:
                    serializable[key] = str(value)
            
            json.dump(serializable, f, indent=2, ensure_ascii=False)
        print(f"✅ {len(all_behaviours)} objets de jeu sauvegardés")
    
    print(f"\n🎉 Extraction terminée! Fichiers dans: {output_dir}/")
    print("\n📋 Prochaine étape:")
    print("   1. Consultez les fichiers JSON générés")
    print("   2. Cherchez les clés de traduction et les prix")
    print("   3. Si les données sont encodées, essayez dnSpy sur Assembly-CSharp.dll")

if __name__ == "__main__":
    main()
