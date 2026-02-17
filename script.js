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