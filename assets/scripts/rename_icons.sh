#!/bin/bash

# Créer des copies avec les noms attendus par le code (sans supprimer les originaux)

# Drill resources
cp iconCraftJellyStone.png jellystone.png 2>/dev/null
cp iconCraftSlimeFossil.png slime_fossil.png 2>/dev/null
cp iconCraftStrangeDiamond.png strange_diamond.png 2>/dev/null
cp iconCraftIndigonium.png indigonium.png 2>/dev/null
cp iconCraftGlassShard.png glass_shard.png 2>/dev/null

# Pump resources
cp iconCraftPrimordyOil.png primordy_oil.png 2>/dev/null
cp iconCraftSpiralSteam.png spiral_steam.png 2>/dev/null
cp iconCraftLavaDust.png lava_dust.png 2>/dev/null
cp iconCraftDeepBrine.png deep_brine.png 2>/dev/null
cp iconCraftSilkySand.png silky_sand.png 2>/dev/null

# Apiary resources
cp iconCraftBuzzWax.png buzz_wax.png 2>/dev/null
cp iconCraftHexacomb.png hexacomb.png 2>/dev/null
cp iconCraftRoyalJelly.png royal_jelly.png 2>/dev/null
cp iconCraftWildHoney.png wild_honey.png 2>/dev/null
cp iconCraftPepperJam.png pepper_jam.png 2>/dev/null

# Special
cp iconCraftManifoldCubepng.png manifold_cube.png 2>/dev/null

# Plorts
cp iconPlortPink.png pink_plort.png 2>/dev/null
cp iconPlortRock.png rock_plort.png 2>/dev/null
cp iconPlortTabby.png tabby_plort.png 2>/dev/null
cp iconPlortPhosphor.png phosphor_plort.png 2>/dev/null
cp iconPlortHoney.png honey_plort.png 2>/dev/null
cp iconPlortBoom.png boom_plort.png 2>/dev/null
cp iconPlortCrystal.png crystal_plort.png 2>/dev/null
cp iconPlortRad.png rad_plort.png 2>/dev/null
cp iconPlortHunter.png hunter_plort.png 2>/dev/null
cp iconPlortQuantum.png quantum_plort.png 2>/dev/null
cp iconPlortMosaic.png mosaic_plort.png 2>/dev/null
cp iconPlortDervish.png dervish_plort.png 2>/dev/null
cp iconPlortTangle.png tangle_plort.png 2>/dev/null
cp iconPlortSaber.png saber_plort.png 2>/dev/null
cp iconPlortFire.png fire_plort.png 2>/dev/null
cp iconPlortPuddle.png puddle_plort.png 2>/dev/null

echo "✅ Toutes les icônes ont été copiées avec les bons noms!"
echo "📊 Nombre d'icônes créées:"
ls -1 *.png 2>/dev/null | grep -v "^icon" | wc -l
