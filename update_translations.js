#!/usr/bin/env node


const fs = require('fs');
const path = require('path');


const OFFICIAL_TRANSLATIONS = require('./official_translations.js');


const dataPath = path.join(__dirname, 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

console.log('🔄 Mise à jour de data.js avec les traductions officielles...\n');


function updateResourceTranslations(resourceName, translations) {
    const oldPattern = new RegExp(
        `"${resourceName}":\\s*\\{[^}]+\\}`,
        'g'
    );
    
    const newTranslation = `"${resourceName}": ${JSON.stringify(translations)}`;
    
    if (dataContent.match(oldPattern)) {
        dataContent = dataContent.replace(oldPattern, newTranslation);
        return true;
    }
    return false;
}

let updatedCount = 0;
let notFoundCount = 0;


console.log('📦 Mise à jour des ressources de raffinerie...');
for (const [resourceName, translations] of Object.entries(OFFICIAL_TRANSLATIONS.resources)) {
    if (updateResourceTranslations(resourceName, translations)) {
        updatedCount++;
        console.log(`  ✅ ${resourceName}`);
    } else {
        notFoundCount++;
        console.log(`  ⚠️  ${resourceName} - non trouvé`);
    }
}

console.log(`\n✅ ${updatedCount} ressources mises à jour`);
if (notFoundCount > 0) {
    console.log(`⚠️  ${notFoundCount} ressources non trouvées`);
}


fs.writeFileSync(dataPath, dataContent, 'utf8');
console.log('\n💾 Fichier data.js sauvegardé avec succès!');
