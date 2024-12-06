import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import About from '../views/pages/about';
import Detail from '../views/pages/detail';


const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/about' : About,
  '/detail/:id': Detail,
};

export default routes;