import UrlParser from '../../routes/url-parser';
import RestaurantDB from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../template/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <section id="restaurant-detail" class="restaurant-detail">
        <button id="back-button" class="back-button">Back</button>
        <div id="restaurant"></div>
        <div id="likeButtonContainer"></div>
      </section>
      `;
  },

  async afterRender() {
    try {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDB.getRestaurantDetail(url.id);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant:FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
        address: restaurant.address,
        menus: restaurant.menus,
        categories: restaurant.categories
      },
    });

    const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      const backButton = document.querySelector('#back-button');
      backButton.addEventListener('click', () => {
        window.location.href = '#/';
      });
    }catch (error) {
      console.error('Error fetching restaurant detail:', error.message);
      document.querySelector('#restaurant').innerHTML = '<p>Failed to load restaurant detail.</p>';
    }
  },
};


export default Detail;