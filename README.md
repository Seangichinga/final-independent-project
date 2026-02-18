# final-independent-project
# Nexus Properties 

A real estate listing web application that allows users to browse, add, and save favorite properties — all without a backend, using the browser's localStorage for data persistence.

# Purpose & Problem Solved

Finding and managing property listings can be overwhelming. Nexus Properties provides a simple, clean platform where users can:
Browse available properties with search and filter functionality
Add new property listings through a validated form
Save properties to a personal favorites list that persists across sessions

# Live Pages

Page - File - Description 

Browse Properties - `index.html` - Main page — search, filter, and view all listings 
Add Property - `addproperty.html` - Form page to submit a new property listing 
Favorites - `favorites.html` - View all properties saved by the user 

# languages Used

- **HTML5** — Semantic markup 
- **CSS** — Flexbox layout, CSS custom properties, media queries for responsiveness
- **JavaScript** — DOM manipulation, event handling, form validation, localStorage API

# Features

Search properties by title or location
Filter by price range and property type
Save/unsave favorites with persistent storage
Form validation with inline error messages
Responsive design for mobile, tablet, and desktop
Data persists in localStorage — no backend required

# How to Run

No installation or setup required.

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. To add properties, navigate to the **Add Property** page
4. Added properties appear immediately on the Browse page

```bash
git clone https://github.com/seangichinga/final-independent-project.git
cd final-independent-project
open index.html 
```

# Known Issues / Limitations

- Properties require an external image URL — no direct image upload is supported
- Property type values have a minor mismatch between the filter dropdown and the add form (e.g., "Apartment" vs "Condo")
- No user authentication — all users on the same device share the same localStorage
- Data is lost if the browser's localStorage is cleared

# Future Improvements

Add a backend for real data persistence
Implement image upload instead of URL input
Add user login and per-user favorites
Add a property detail page with a contact/inquiry form

# Author

Built as a final project for the FSD-FT01 Web Development course by THE Sean Gichinga.  
languages: HTML · CSS · JavaScript