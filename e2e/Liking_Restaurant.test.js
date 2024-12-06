const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/');
  });

  Scenario('liking one restaurant', async ({ I }) => {
    I.seeElement('.restaurant-info__title');
    const firstRestaurant = locate('.restaurant-info__title').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.containerRestaurant');
    const likedRestaurantTitle = await I.grabTextFrom('.restaurant-info__title');
 
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  });



