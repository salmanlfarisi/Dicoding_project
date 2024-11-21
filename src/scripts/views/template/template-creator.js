/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <img class="restaurant-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
    <div class="restaurant-item__content">
      <h3><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.city}</p>
      <p>Rating: ${restaurant.rating}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <h2>${restaurant.name}</h2>
  <img class="restaurant-detail__thumbnail" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
  <p>${restaurant.description}</p>
  <p>${restaurant.city}, ${restaurant.address}</p>
  <h3>Menus</h3>
  <ul>${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
  <ul>${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
