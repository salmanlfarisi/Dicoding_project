import { itActsAsFavoriteRestaurantModel } from "./contracts/favoriteRestaurantContract";

let favoriteRestaurant = [];
 
const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }
 
    return favoriteRestaurant.find((restauarant) => restauarant.id == id);
  },
 
  getAllRestaurant() {
    return favoriteRestaurant;
  },
 
  putRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
 
    // pastikan id ini belum ada dalam daftar favoriteResto
    if (this.getRestaurant(restaurant.id)) {
      return;
    }
 
    favoriteRestaurant.push(restaurant);
  },
 
  deleteRestaurant(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurant = favoriteRestaurant.filter((restauarant) => restauarant.id != id);
  },
};
 
describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurant = [];
  });
 
  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});