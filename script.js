let allProperties = [];
let favorites = [];

function initApp() {
    loadData();
    setupEventListeners();
}
// data management functions
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

function isFavorite(propertyId) {
    return favorites.includes(propertyId);
}

function getPropertyById(propertyId) {
    return allProperties.find(p => p.id === propertyId) || null;
}

// event listeners
function setupEventListeners() {
    //search
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }
    // Filter 
    const filterBtn = document.getElementById('filterBtn');
    if (filterBtn) {
        filterBtn.addEventListener('click', handleFilter);
    }

    // Reset button
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', handleReset);
    }

    // Add property 
    const propertyForm = document.getElementById('propertyForm');
    if (propertyForm) {
        propertyForm.addEventListener('submit', handleFormSubmit);
    }
}

function setupModalListeners() {
    const modal = document.getElementById('detailsModal');
    const closeBtn = document.querySelector('.close');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
}

function displayBrowsePage() {
    displayProperties(allProperties);
}
function displayFavoritesPage() {
     const favoriteProps = allProperties.filter(p => favorites.includes(p.id));
    const grid = document.getElementById('favoritesGrid');
    const emptyMsg = document.getElementById('emptyFavorites');
    const countSpan = document.getElementById('favoritesCount');

    if (countSpan) {
        countSpan.textContent = favoriteProps.length;
    }

    if (favoriteProps.length === 0) {
        if (grid) grid.innerHTML = '';
        if (emptyMsg) emptyMsg.style.display = 'block';
        return;
    }


    if (emptyMsg) emptyMsg.style.display = 'none';
    displayProperties(favoriteProps);
}

function displayProperties(properties) {
    const grid = document.getElementById('propertiesGrid') || document.getElementById('favoritesGrid');
    const noMsg = document.getElementById('noProperties');

    if (!grid) return;

    if (properties.length === 0) {
        grid.innerHTML = '';
        if (noMsg) noMsg.style.display = 'block';
        return;
    }
if (noMsg) noMsg.style.display = 'none';
    grid.innerHTML = properties.map(p => `
        <div class="property-card" data-id="${p.id}">
            <img src="${p.imageUrl}" alt="${p.title}" class="property-image" 
                 onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            <div class="property-content">
                <span class="property-type">${p.type}</span>
                <h4 class="property-title">${p.title}</h4>
                <p class="property-location">📍 ${p.location}</p>
                <div class="property-details">
                    <span>🛏️ ${p.bedrooms} bed</span>
                    <span>🚿 ${p.bathrooms} bath</span>
                    <span>📐 ${p.sqft} sqft</span>
                </div>
                <p class="property-price">$${parseInt(p.price).toLocaleString()}</p>
                <div class="property-footer">
                    <button class="btn btn-primary" onclick="viewPropertyDetails(${p.id})">View</button>
                    <button class="btn favorite-btn ${isFavorite(p.id) ? 'active' : ''}" 
                            onclick="toggleFav(${p.id}, event)">❤️</button>
                </div>
            </div>
        </div>
    `).join('');
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
}