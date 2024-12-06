import RestauranHungertDB from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../template/template-creator';

const Home = {
  async render() {
    return `
    <section class="hero">
      <img src="./heros/hero-image_1.jpg" alt="Chef-Botak" />
            <div class="hero__content">
       
      </div>
    </section>

      <section id="explore" class="explore">
        <h2>Explore Restaurants</h2>
        <div id="restaurants"></div>
      </section>

     <main id="mainContent">
  <div id="homeContent"></div>
</main>
      
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestauranHungertDB.getRestaurantList();
      const restaurantsContainer = document.querySelector('#restaurants');

      // Gunakan fungsi template untuk setiap restoran
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.error(error.message); // Debugging error
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurantsContainer.innerHTML = '<p>Failed to load restaurants. Please try again later.</p>';
    }
  },
};

export default Home;
