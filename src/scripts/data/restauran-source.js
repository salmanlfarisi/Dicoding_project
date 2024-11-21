/* eslint-disable linebreak-style */
import CONFIG from '../globals/config';

const RestaurantSource = {
  async listRestaurants() {
    const response = await fetch(`${CONFIG.BASE_URL}/list`);
    const responseJson = await response.json();
    return responseJson.restaurants;
  },

  async detailRestaurant(id) {
    const response = await fetch(`${CONFIG.BASE_URL}/detail/${id}`);
    const responseJson = await response.json();
    return responseJson.restaurant;
  },
};

export default RestaurantSource;
