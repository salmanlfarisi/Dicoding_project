const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <div class="restaurant-detail__header">
      <h2 class="restaurant-detail__name">${restaurant.name || 'Restaurant Name'}</h2>
      <img 
        src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId || 'default-image.jpg'}" 
        alt="${restaurant.name || 'Restaurant Image'}" 
        class="restaurant-detail__image" 
        crossorigin="anonymous">
    </div>
    
    <div class="restaurant-detail__info">
      <h3>Information</h3>
      <p><strong>Address:</strong> ${restaurant.address || 'No Address Provided'}</p>
      <p><strong>City:</strong> ${restaurant.city || 'No City Provided'}</p>
      <p><strong>Description:</strong> ${restaurant.description || 'No Description Available'}</p>
    </div>

    <div class="restaurant-detail__menu">
      <h3>Menu</h3>
      <div class="menu-section">
        <h4>Food Menu</h4>
        <ul>
          ${restaurant.menus.foods?.map((food) => `<li>${food.name}</li>`).join('') || '<li>No food menu available</li>'}
        </ul>
      </div>
      <div class="menu-section">
        <h4>Drink Menu</h4>
        <ul>
          ${restaurant.menus.drinks?.map((drink) => `<li>${drink.name}</li>`).join('') || '<li>No drink menu available</li>'}
        </ul>
      </div>
    </div>

    <div class="restaurant-detail__reviews">
      <h3>Customer Reviews</h3>
      ${restaurant.customerReviews?.map((review) => `
        <div class="review">
          <h4>${review.name || 'Anonymous'}</h4>
          <p>${review.review || 'No review provided'}</p>
        </div>
      `).join('') || '<p>No reviews available</p>'}
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <a href="#/detail/${restaurant.id}">
        <img 
          src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId || 'default-image.jpg'}" 
          alt="${restaurant.name || 'Restaurant Image'}" 
          class="restaurant-item__image" 
          crossorigin="anonymous">
      </a>
      <div class="restaurant-item__rating">
        <span aria-label="Rating: ${restaurant.rating || '0'}">⭐ ${restaurant.rating || '0'}</span>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3>${restaurant.name || 'Restaurant Name'}</h3>
      <p class="restaurant-item__location">📍 ${restaurant.city || 'Unknown City'}</p>
      <p class="restaurant-item__description">
        ${restaurant.description || 'No description available'}
      </p>
      <a href="#/detail/${restaurant.id}" class="restaurant-item__cta">View Details</a>
    </div>
  </div>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnLikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikedButtonTemplate, createUnLikeButtonTemplate
};
