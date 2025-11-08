#!/bin/bash

# Script pour renommer les fichiers de langue officiels

echo "📁 Organisation des fichiers de langue..."

# Chinois (zh)
mv "ui" "ui_zh.txt" 2>/dev/null
mv "actor" "actor_zh.txt" 2>/dev/null
mv "exchange" "exchange_zh.txt" 2>/dev/null

# Portugais (pt) - #432318, #432307, #432314
mv "ui #432318" "ui_pt.txt" 2>/dev/null
mv "actor #432307" "actor_pt.txt" 2>/dev/null
mv "exchange #432314" "exchange_pt.txt" 2>/dev/null

# Allemand (de) - #432323, #432348, #432346
mv "ui #432323" "ui_de.txt" 2>/dev/null
mv "actor #432348" "actor_de.txt" 2>/dev/null
mv "exchange #432346" "exchange_de.txt" 2>/dev/null

# Anglais (en) - #432340, #432356, #432359
mv "ui #432340" "ui_en.txt" 2>/dev/null
mv "actor #432356" "actor_en.txt" 2>/dev/null
mv "exchange #432359" "exchange_en.txt" 2>/dev/null

# Coréen (ko) - #432372, #432357, #432388
mv "ui #432372" "ui_ko.txt" 2>/dev/null
mv "actor #432357" "actor_ko.txt" 2>/dev/null
mv "exchange #432388" "exchange_ko.txt" 2>/dev/null

# Espagnol (es) - #432393, #432364, #432389
mv "ui #432393" "ui_es.txt" 2>/dev/null
mv "actor #432364" "actor_es.txt" 2>/dev/null
mv "exchange #432389" "exchange_es.txt" 2>/dev/null

# Russe (ru) - #432403, #432385, #432392
mv "ui #432403" "ui_ru.txt" 2>/dev/null
mv "actor #432385" "actor_ru.txt" 2>/dev/null
mv "exchange #432392" "exchange_ru.txt" 2>/dev/null

# Suédois (sv) - #432404, #432428, #432420
mv "ui #432404" "ui_sv.txt" 2>/dev/null
mv "actor #432428" "actor_sv.txt" 2>/dev/null
mv "exchange #432420" "exchange_sv.txt" 2>/dev/null

# Français (fr) - #432449, #432433, #432431
mv "ui #432449" "ui_fr.txt" 2>/dev/null
mv "actor #432433" "actor_fr.txt" 2>/dev/null
mv "exchange #432431" "exchange_fr.txt" 2>/dev/null

# Japonais (ja) - #432461, #432448, #432438
mv "ui #432461" "ui_ja.txt" 2>/dev/null
mv "actor #432448" "actor_ja.txt" 2>/dev/null
mv "exchange #432438" "exchange_ja.txt" 2>/dev/null

# Renommer build
mv "build" "build_en.txt" 2>/dev/null

echo "✅ Fichiers renommés avec succès!"
echo ""
echo "📊 Langues disponibles:"
ls -1 *_*.txt | sed 's/_.*/.txt/' | sort -u | sed 's/.txt$//' | uniq -c
