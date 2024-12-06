import { itActsAsFavoriteRestaurantModel } from "./contracts/favoriteRestaurantContract";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
      (await FavoriteRestaurantIdb  .getAllRestaurant()).forEach(async (restauarant) => {
        await FavoriteRestaurantIdb.deleteRestaurant(restauarant.id);
      });
    });
   
    itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
  });