/* eslint-disable linebreak-style */
import DaftarRestoran from '../views/pages/daftar-res';
import FavoriteRestoran from '../views/pages/favorite-res';
import DetailRestoran from '../views/pages/detail-res';

const routes = {
  '/': DaftarRestoran, // Home
  '/favorite': FavoriteRestoran, // Halaman Favorite
  '/detail/:id': DetailRestoran, // Halaman Detail
};

export default routes;
