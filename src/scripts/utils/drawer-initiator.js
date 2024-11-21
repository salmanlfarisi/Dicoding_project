/* eslint-disable linebreak-style */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', () => {
      this._toggleDrawer(drawer);
    });

    content.addEventListener('click', () => {
      drawer.classList.remove('show');
    });
  },

  _toggleDrawer(drawer) {
    drawer.classList.toggle('show');
  },
};

export default DrawerInitiator;