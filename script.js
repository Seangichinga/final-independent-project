let allProperties = [];
let favorites = [];

function initApp() {
    loadData();
    setupEventListeners();
}

function loadData() {
    const storedProperties = localStorage.getItem('properties');
    const storedFavorites = localStorage.getItem('favorites');
    if (storedProperties) {
        allProperties = JSON.parse(storedProperties);
    }
    if (storedFavorites) {
        favorites = JSON.parse(storedFavorites);
    }
}

function saveData() {   
    localStorage.setItem('properties', JSON.stringify(allProperties));
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function addProperty(propertyData) {
    const property = {id: Date.now(),...propertyData,dateAdded: new Date().toLocaleDateString()};
    allProperties.push(property);
    saveData();
    return property;
}

function toggleFavorite(propertyId) {
    const index = favorites.indexOf(propertyId);
    if (index >= 0) {
        favorites.splice(index, 1);
    } else {
        favorites.push(propertyId);
    }
    saveData();
}

