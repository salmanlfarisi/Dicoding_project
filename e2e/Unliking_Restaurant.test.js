const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
    I.amOnPage('/');
    I.seeElement('.restaurant-info__titlee');
    I.click(locate('.restaurant-info__title').first());
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');;
  });

  Scenario('Unliking one restaurant', async ({ I }) => {
    I.seeElement('.restaurant-info__title');
    const likedRestaurant = locate('.restaurant-info__title').first();
    const likedRestaurantTitle = await I.grabTextFrom(likedRestaurant);
    I.click(likedRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    const restoCount = await I.grabNumberOfVisibleElements('.restaurant-info__title');
    assert.strictEqual(restoCount, likedRestaurantTitle, 0, 'restaurant favorit masih ada sedangkan seharusnya sudah dihapus.');
  });
