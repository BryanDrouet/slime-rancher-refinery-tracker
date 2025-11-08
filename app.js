// État de l'application
let currentUser = null;
let userData = {
    refineryDeposits: [],
    purchasedRecipes: [],
    favoriteRecipes: [],
    currentMoney: 0,
    currentTier: 0
};

// Initialisation au chargement
auth.onAuthStateChanged(user => {
    if (user) {
        currentUser = user;
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
        document.getElementById('user-email').textContent = user.email;
        loadUserData();
    } else {
        currentUser = null;
        document.getElementById('auth-container').style.display = 'flex';
        document.getElementById('app-container').style.display = 'none';
    }
});

// ===== AUTHENTIFICATION =====

function showLogin() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
}

function showRegister() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
}

async function loginWithEmail() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        alert('Veuillez remplir tous les champs');
        return;
    }
    
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        alert('Erreur de connexion: ' + error.message);
    }
}

async function registerWithEmail() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    if (!email || !password) {
        alert('Veuillez remplir tous les champs');
        return;
    }
    
    if (password.length < 6) {
        alert('Le mot de passe doit contenir au moins 6 caractères');
        return;
    }
    
    try {
        await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
        alert('Erreur d\'inscription: ' + error.message);
    }
}

async function loginWithGoogle() {
    try {
        await auth.signInWithPopup(googleProvider);
    } catch (error) {
        alert('Erreur de connexion Google: ' + error.message);
    }
}

async function logout() {
    if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
        await auth.signOut();
    }
}

// ===== NAVIGATION =====

function showSection(sectionName) {
    // Masquer toutes les sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Désactiver tous les boutons de navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activer la section et le bouton correspondants
    document.getElementById(sectionName + '-section').classList.add('active');
    event.target.classList.add('active');
    
    // Recharger le contenu si nécessaire
    if (sectionName === 'recipes') {
        displayRecipes('all');
    } else if (sectionName === 'club7zee') {
        displayClubRewards();
    } else if (sectionName === 'favorites') {
        displayFavorites();
    }
}

// ===== FIREBASE DATA =====

async function loadUserData() {
    if (!currentUser) return;
    
    try {
        const doc = await db.collection('users').doc(currentUser.uid).get();
        if (doc.exists) {
            userData = doc.data();
        } else {
            // Créer un nouveau document utilisateur
            await saveUserData();
        }
        
        // Afficher les données
        displayRefineryDeposits();
        displayRecipes('all');
        displayClubRewards();
        displayFavorites();
        
        // Charger les infos du club
        if (userData.currentMoney) {
            document.getElementById('current-money').value = userData.currentMoney;
        }
        if (userData.currentTier !== undefined) {
            document.getElementById('current-tier').value = userData.currentTier;
        }
    } catch (error) {
        console.error('Erreur de chargement:', error);
    }
}

async function saveUserData() {
    if (!currentUser) return;
    
    try {
        await db.collection('users').doc(currentUser.uid).set(userData);
    } catch (error) {
        console.error('Erreur de sauvegarde:', error);
        alert('Erreur lors de la sauvegarde des données');
    }
}

// ===== RAFFINERIE =====

async function addRefineryDeposit() {
    const itemName = document.getElementById('refinery-item').value.trim();
    const quantity = parseInt(document.getElementById('refinery-quantity').value);
    
    if (!itemName) {
        alert('Veuillez entrer le nom de l\'objet');
        return;
    }
    
    if (!quantity || quantity < 1) {
        alert('Veuillez entrer une quantité valide');
        return;
    }
    
    // Vérifier si l'item existe déjà
    const existingIndex = userData.refineryDeposits.findIndex(d => d.name === itemName);
    if (existingIndex >= 0) {
        userData.refineryDeposits[existingIndex].quantity += quantity;
    } else {
        userData.refineryDeposits.push({ name: itemName, quantity });
    }
    
    await saveUserData();
    displayRefineryDeposits();
    
    // Réinitialiser le formulaire
    document.getElementById('refinery-item').value = '';
    document.getElementById('refinery-quantity').value = '1';
}

async function removeRefineryDeposit(index) {
    userData.refineryDeposits.splice(index, 1);
    await saveUserData();
    displayRefineryDeposits();
}

function displayRefineryDeposits() {
    const container = document.getElementById('refinery-list');
    
    if (userData.refineryDeposits.length === 0) {
        container.innerHTML = '<div class="empty-message">Aucun dépôt dans la raffinerie</div>';
        return;
    }
    
    container.innerHTML = userData.refineryDeposits.map((deposit, index) => `
        <div class="item-card">
            <div class="item-info">
                <div class="item-name">${deposit.name}</div>
                <div class="item-quantity">Quantité: ${deposit.quantity}</div>
            </div>
            <button class="btn-delete" onclick="removeRefineryDeposit(${index})">✕</button>
        </div>
    `).join('');
}

// ===== RECETTES =====

async function toggleRecipePurchase(recipeId) {
    const index = userData.purchasedRecipes.indexOf(recipeId);
    if (index >= 0) {
        userData.purchasedRecipes.splice(index, 1);
    } else {
        userData.purchasedRecipes.push(recipeId);
    }
    
    await saveUserData();
    displayRecipes(currentFilter);
}

async function toggleRecipeFavorite(recipeId) {
    const index = userData.favoriteRecipes.indexOf(recipeId);
    if (index >= 0) {
        userData.favoriteRecipes.splice(index, 1);
    } else {
        userData.favoriteRecipes.push(recipeId);
    }
    
    await saveUserData();
    displayRecipes(currentFilter);
    displayFavorites();
}

let currentFilter = 'all';

function filterRecipes(filter) {
    currentFilter = filter;
    
    // Mettre à jour les boutons de filtre
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    displayRecipes(filter);
}

function displayRecipes(filter) {
    const container = document.getElementById('recipes-list');
    
    let filteredRecipes = RECIPES_DATA;
    if (filter === 'purchased') {
        filteredRecipes = RECIPES_DATA.filter(r => userData.purchasedRecipes.includes(r.id));
    } else if (filter === 'not-purchased') {
        filteredRecipes = RECIPES_DATA.filter(r => !userData.purchasedRecipes.includes(r.id));
    }
    
    container.innerHTML = filteredRecipes.map(recipe => {
        const isPurchased = userData.purchasedRecipes.includes(recipe.id);
        const isFavorite = userData.favoriteRecipes.includes(recipe.id);
        
        return `
            <div class="recipe-card">
                <div class="recipe-image">${recipe.icon}</div>
                <div class="recipe-content">
                    <div class="recipe-name">${recipe.name}</div>
                    <div class="recipe-price">${recipe.price.toLocaleString()} Newbucks</div>
                    <div class="recipe-ingredients">
                        ${recipe.ingredients.join(', ')}
                    </div>
                    <div class="recipe-actions">
                        <button class="btn-purchase ${isPurchased ? 'purchased' : ''}" 
                                onclick="toggleRecipePurchase(${recipe.id})">
                            ${isPurchased ? '✓ Acheté' : 'Acheter'}
                        </button>
                        <button class="btn-favorite ${isFavorite ? 'active' : ''}" 
                                onclick="toggleRecipeFavorite(${recipe.id})"
                                title="Ajouter aux favoris">
                            ${isFavorite ? '★' : '☆'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Calculer le prix total des recettes non achetées
    const totalPrice = RECIPES_DATA
        .filter(r => !userData.purchasedRecipes.includes(r.id))
        .reduce((sum, r) => sum + r.price, 0);
    
    document.getElementById('total-unpurchased-price').textContent = totalPrice.toLocaleString();
}

// ===== CLUB 7ZEE =====

async function saveClubInfo() {
    const money = parseInt(document.getElementById('current-money').value) || 0;
    const tier = parseInt(document.getElementById('current-tier').value) || 0;
    
    userData.currentMoney = money;
    userData.currentTier = tier;
    
    await saveUserData();
    displayClubRewards();
    alert('Informations sauvegardées !');
}

function displayClubRewards() {
    const container = document.getElementById('club-rewards');
    const currentTier = userData.currentTier || 0;
    
    container.innerHTML = CLUB_7ZEE_REWARDS.map(reward => {
        const isUnlocked = currentTier >= reward.tier;
        
        return `
            <div class="reward-card ${isUnlocked ? 'unlocked' : ''}">
                <div class="reward-tier">Niveau ${reward.tier}</div>
                <div class="reward-name">${reward.name}</div>
                ${!isUnlocked ? `<div style="font-size: 12px; color: #666; margin-top: 5px;">
                    Requis: ${reward.required.toLocaleString()} Newbucks
                </div>` : '<div style="margin-top: 5px; color: #51cf66; font-weight: bold;">✓ Débloqué</div>'}
            </div>
        `;
    }).join('');
}

// ===== FAVORIS & CRAFTING =====

function displayFavorites() {
    const favoritesContainer = document.getElementById('favorites-list');
    const requirementsContainer = document.getElementById('total-requirements');
    
    const favoriteRecipes = RECIPES_DATA.filter(r => userData.favoriteRecipes.includes(r.id));
    
    if (favoriteRecipes.length === 0) {
        favoritesContainer.innerHTML = '<div class="empty-message">Aucune recette favorite. Cliquez sur ☆ pour en ajouter.</div>';
        requirementsContainer.innerHTML = '<div class="empty-message">Ajoutez des recettes aux favoris pour voir les ressources nécessaires.</div>';
        return;
    }
    
    // Afficher les recettes favorites
    favoritesContainer.innerHTML = `
        <div class="recipes-grid">
            ${favoriteRecipes.map(recipe => `
                <div class="recipe-card">
                    <div class="recipe-image">${recipe.icon}</div>
                    <div class="recipe-content">
                        <div class="recipe-name">${recipe.name}</div>
                        <div class="recipe-price">${recipe.price.toLocaleString()} Newbucks</div>
                        <div class="recipe-ingredients">
                            ${recipe.ingredients.join(', ')}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Calculer les ressources totales nécessaires
    const totalRequirements = {};
    
    favoriteRecipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            // Parser l'ingrédient (format: "Item x10")
            const match = ingredient.match(/(.+?)\s*x(\d+)/);
            if (match) {
                const itemName = match[1].trim();
                const quantity = parseInt(match[2]);
                
                if (totalRequirements[itemName]) {
                    totalRequirements[itemName] += quantity;
                } else {
                    totalRequirements[itemName] = quantity;
                }
            }
        });
    });
    
    // Afficher les ressources nécessaires
    if (Object.keys(totalRequirements).length === 0) {
        requirementsContainer.innerHTML = '<div class="empty-message">Aucune ressource requise</div>';
    } else {
        requirementsContainer.innerHTML = Object.entries(totalRequirements)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([item, quantity]) => `
                <div class="requirement-item">
                    <span class="requirement-name">${item}</span>
                    <span class="requirement-quantity">x${quantity}</span>
                </div>
            `).join('');
    }
}

// Initialiser l'affichage au chargement
window.addEventListener('load', () => {
    displayRecipes('all');
});
