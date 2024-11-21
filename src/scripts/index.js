/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; // Polyfill untuk async/await
import '../styles/main.css';
import '../styles/skip-link.css';
import App from './views/app';
import data from '../public/data/DATA.json'; // Data statis untuk sementara

document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi elemen DOM
  const app = new App({
    button: document.getElementById('menu-button'),
    drawer: document.getElementById('drawer'),
    content: document.getElementById('main-content'), // Sesuai dengan perubahan di HTML
  });

  // Render daftar restoran
  const restaurantContainer = document.getElementById('restaurant-container');
  if (restaurantContainer && data.restaurants) {
    renderRestaurantList(restaurantContainer, data.restaurants);
  }
});

function renderRestaurantList(container, restaurants) {
  container.innerHTML = ''; // Membersihkan kontainer sebelum dirender
  restaurants.forEach((restaurant) => {
    container.innerHTML += createRestaurantCard(restaurant);
  });
}

function createRestaurantCard(restaurant) {
  return `
    <div class="restaurant-card" tabindex="0">
      <img 
        src="${restaurant.pictureId}" 
        alt="Image of ${restaurant.name}" 
        class="restaurant-card__image"
      >
      <div class="restaurant-info">
        <h3>${restaurant.name}</h3>
        <p>City: ${restaurant.city}</p>
        <p>Rating: ${restaurant.rating}</p>
      </div>
    </div>
  `;
}
