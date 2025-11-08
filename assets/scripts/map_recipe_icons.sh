#!/bin/bash

# Copier les icônes pour les gadgets/recettes

# Extractors
cp iconGadgetExtractorDrillNovice.png novice_drill.png 2>/dev/null
cp iconGadgetExtractorDrillAdvanced.png advanced_drill.png 2>/dev/null
cp iconGadgetExtractorDrillMaster.png master_drill.png 2>/dev/null
cp iconGadgetExtractorPumpNovice.png novice_pump.png 2>/dev/null
cp iconGadgetExtractorPumpAdvanced.png advanced_pump.png 2>/dev/null
cp iconGadgetExtractorPumpMaster.png master_pump.png 2>/dev/null
cp iconGadgetExtractorApiaryNovice.png novice_apiary.png 2>/dev/null
cp iconGadgetExtractorApiaryAdvanced.png advanced_apiary.png 2>/dev/null
cp iconGadgetExtractorApiaryMaster.png master_apiary.png 2>/dev/null

# Personal Upgrades
cp iconShopBoots.png dash_boots.png 2>/dev/null
cp iconShopJetpack.png jetpack.png 2>/dev/null
cp iconShopTank01.png tank_booster_health.png 2>/dev/null
cp iconShopPower01.png tank_booster_energy.png 2>/dev/null
cp iconValleyAmmo1.png tank_booster_ammo.png 2>/dev/null
cp iconShopHeart01.png heart_module.png 2>/dev/null

# Defense & Management
cp iconGadgetHydroTurret.png aqua_turret.png 2>/dev/null
cp iconGadgetHydroTurret.png hydro_turret.png 2>/dev/null
cp iconGadgetHydroTurretSuper.png super_hydro_turret.png 2>/dev/null
cp iconShopPulsewave.png pulse_wave.png 2>/dev/null
cp iconShopPulsewave.png thunderclap.png 2>/dev/null
cp iconGadgetTamingBell.png taming_bell.png 2>/dev/null
cp iconGadgetMedStation.png med_station.png 2>/dev/null
cp iconDrone.png drone.png 2>/dev/null
cp iconGadgetAdvancedDrone.png advanced_drone.png 2>/dev/null

# Gordo Snares
cp iconGadgetGordoSnareNovice.png novice_gordo_snare.png 2>/dev/null
cp iconGadgetGordoSnareAdvanced.png advanced_gordo_snare.png 2>/dev/null
cp iconGadgetGordoSnareMaster.png master_gordo_snare.png 2>/dev/null

# Portable
cp iconGadgetWaterTap.png portable_water_tap.png 2>/dev/null
cp iconGadgetChickenCloner.png chicken_cloner.png 2>/dev/null
cp iconGadgetPortableScareslime.png portable_scareslime.png 2>/dev/null
cp iconGadgetSpringPad.png spring_pad.png 2>/dev/null
cp iconGadgetDashPad.png dash_pad.png 2>/dev/null

# Slime Bait
cp iconGadgetBaitPogo.png fruit_slime_bait.png 2>/dev/null
cp iconGadgetBaitCarrot.png veggie_slime_bait.png 2>/dev/null
cp iconGadgetBaitChicken.png meat_slime_bait.png 2>/dev/null

# Warp Tech
cp iconGadgetTeleportHome.png teleporter.png 2>/dev/null
cp iconGadgetWarpDepotPink.png warp_depot.png 2>/dev/null
cp iconGadgetRefineryLink.png refinery_link.png 2>/dev/null
cp iconGadgetMarketLink.png market_link.png 2>/dev/null

# Decorations
cp iconDecorSlimeLampPink.png slime_lamp_pink.png 2>/dev/null
cp iconDecorSlimeLampRed.png slime_lamp_tabby.png 2>/dev/null
cp iconDecorWildsGlowRocks.png slime_statue_rock.png 2>/dev/null
cp iconGadgetPottedTactus.png potted_tactus.png 2>/dev/null
cp iconGadgetEchoNet.png echo_net.png 2>/dev/null

# Curios/Toys
cp iconToyBeechBall.png slime_toy_beach_ball.png 2>/dev/null
cp iconToyPuzzleBox.png slime_toy_tabletop.png 2>/dev/null
cp iconFashionParty.png fashion_pod_bow.png 2>/dev/null

# Personal/Keys
cp keys_icon.png slime_key.png 2>/dev/null
cp iconShopTreasure01.png treasure_cracker_mkii.png 2>/dev/null
cp iconShopTreasure02.png treasure_cracker_mkiii.png 2>/dev/null
cp iconZoneNimbleValley.png nimble_valley.png 2>/dev/null

echo "✅ Icônes des recettes copiées!"
ls -1 *.png 2>/dev/null | grep -v "^icon" | wc -l
