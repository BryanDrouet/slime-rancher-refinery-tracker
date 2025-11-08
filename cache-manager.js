
class CacheManager {
    constructor() {
        this.CACHE_VERSION = 'v1';
        this.TRANSLATION_CACHE_KEY = 'slime-rancher-translations-cache';
        this.IMAGE_CACHE_NAME = 'slime-rancher-images-v1';
        this.userRegion = null;
        this.userCurrency = null;
    }

    
    async detectUserRegion() {
        
        const locale = navigator.language || navigator.userLanguage || 'en-US';
        
        
        const regionMap = {
            
            'fr': { region: 'EU', currency: 'EUR', symbol: '€' },
            'de': { region: 'EU', currency: 'EUR', symbol: '€' },
            'it': { region: 'EU', currency: 'EUR', symbol: '€' },
            'es': { region: 'EU', currency: 'EUR', symbol: '€' },
            'pt': { region: 'EU', currency: 'EUR', symbol: '€' },
            'nl': { region: 'EU', currency: 'EUR', symbol: '€' },
            'be': { region: 'EU', currency: 'EUR', symbol: '€' },
            'at': { region: 'EU', currency: 'EUR', symbol: '€' },
            
            
            'en-GB': { region: 'UK', currency: 'GBP', symbol: '£' },
            
            
            'en-US': { region: 'US', currency: 'USD', symbol: '$' },
            
            
            'en-CA': { region: 'CA', currency: 'CAD', symbol: 'CAD $' },
            'fr-CA': { region: 'CA', currency: 'CAD', symbol: 'CAD $' },
            
            
            'es-AR': { region: 'AR', currency: 'ARS', symbol: 'ARS $' },
            'es-CL': { region: 'CL', currency: 'CLP', symbol: 'CLP $' },
            'pt-BR': { region: 'BR', currency: 'BRL', symbol: 'R$' },
            
            
            'ja': { region: 'JP', currency: 'JPY', symbol: '¥' },
            'ko': { region: 'KR', currency: 'KRW', symbol: '₩' },
            'zh-CN': { region: 'CN', currency: 'CNY', symbol: '¥' },
            'zh-TW': { region: 'TW', currency: 'TWD', symbol: 'NT$' },
            
            
            'ru': { region: 'RU', currency: 'RUB', symbol: '₽' },
            
            
            'en-AU': { region: 'AU', currency: 'AUD', symbol: 'A$' },
            
            
            'en-NZ': { region: 'NZ', currency: 'NZD', symbol: 'NZ$' },
            
            
            'de-CH': { region: 'CH', currency: 'CHF', symbol: 'CHF' },
            'fr-CH': { region: 'CH', currency: 'CHF', symbol: 'CHF' },
            
            
            'no': { region: 'NO', currency: 'NOK', symbol: 'kr' },
            
            
            'sv': { region: 'SE', currency: 'SEK', symbol: 'kr' },
        };

        
        const langCode = locale.split('-')[0];
        const fullLocale = locale;

        
        let regionInfo = regionMap[fullLocale] || regionMap[langCode];
        
        
        if (!regionInfo) {
            regionInfo = { region: 'US', currency: 'USD', symbol: '$' };
        }

        this.userRegion = regionInfo.region;
        this.userCurrency = regionInfo.currency;
        this.currencySymbol = regionInfo.symbol;

        
        localStorage.setItem('user-region', JSON.stringify(regionInfo));
        
        console.log(`Région détectée: ${this.userRegion}, Devise: ${this.userCurrency} (${this.currencySymbol})`);
        
        return regionInfo;
    }

    
    getOfficialPrice(priceData) {
        if (!this.userCurrency) {
            const stored = localStorage.getItem('user-region');
            if (stored) {
                const info = JSON.parse(stored);
                this.userCurrency = info.currency;
                this.currencySymbol = info.symbol;
            } else {
                this.userCurrency = 'USD';
                this.currencySymbol = '$';
            }
        }

        
        if (typeof priceData === 'number') {
            if (priceData === 0) {
                
                const lang = document.documentElement.lang || 'fr';
                return lang === 'en' ? 'Free' : lang === 'es' ? 'Gratis' : 'Gratuit';
            }
            
            return `${priceData.toLocaleString()} <img src="assets/resources/iconNewBuck.png" alt="Newbucks" class="currency-icon">`;
        }

        
        if (typeof priceData === 'object' && priceData[this.userCurrency] !== undefined) {
            const price = priceData[this.userCurrency];
            
            
            if (this.userCurrency === 'JPY' || this.userCurrency === 'KRW') {
                
                return `${Math.round(price).toLocaleString()} ${this.currencySymbol}`;
            } else if (price === 0) {
                
                return this.userCurrency === 'EUR' ? 'Gratuit' : 
                       this.userCurrency === 'USD' ? 'Free' : 'Gratis';
            } else {
                
                return `${price.toFixed(2)} ${this.currencySymbol}`;
            }
        }

        
        return priceData.USD ? `${priceData.USD.toFixed(2)} $` : '0 $';
    }

    
    convertPrice(priceUSD) {
        
        if (typeof priceUSD === 'object') {
            return this.getOfficialPrice(priceUSD);
        }

        
        if (priceUSD === 0) {
            const lang = document.documentElement.lang || 'fr';
            return lang === 'en' ? 'Free' : lang === 'es' ? 'Gratis' : 'Gratuit';
        }
        
        return `${priceUSD.toLocaleString()} <img src="assets/resources/iconNewBuck.png" alt="Newbucks" class="currency-icon">`;
    }

    
    getCachedTranslation(key, lang) {
        const cacheKey = `${this.TRANSLATION_CACHE_KEY}-${lang}`;
        const cache = localStorage.getItem(cacheKey);
        
        if (cache) {
            const parsed = JSON.parse(cache);
            return parsed[key];
        }
        return null;
    }

    setCachedTranslation(key, lang, value) {
        const cacheKey = `${this.TRANSLATION_CACHE_KEY}-${lang}`;
        let cache = {};
        
        const existing = localStorage.getItem(cacheKey);
        if (existing) {
            cache = JSON.parse(existing);
        }
        
        cache[key] = value;
        localStorage.setItem(cacheKey, JSON.stringify(cache));
    }

    
    clearTranslationCache() {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith(this.TRANSLATION_CACHE_KEY)) {
                localStorage.removeItem(key);
            }
        });
    }

    
    async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.register('/sw.js');
                console.log('Service Worker enregistré:', registration);
            } catch (error) {
                console.log('Erreur Service Worker:', error);
            }
        }
    }

    
    async preloadCriticalImages() {
        const criticalImages = [
            'assets/icon.png',
            'assets/fr.png',
            'assets/gb.png',
            'assets/es.png'
        ];

        if ('caches' in window) {
            const cache = await caches.open(this.IMAGE_CACHE_NAME);
            await cache.addAll(criticalImages);
        }
    }
}


const cacheManager = new CacheManager();


document.addEventListener('DOMContentLoaded', async () => {
    const regionInfo = await cacheManager.detectUserRegion();
    
    
    const currencyDisplay = document.getElementById('currency-display');
    if (currencyDisplay && regionInfo) {
        currencyDisplay.textContent = `💰 ${regionInfo.currency} (${regionInfo.symbol})`;
    }
    
    
    await cacheManager.preloadCriticalImages();
});
