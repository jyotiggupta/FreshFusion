import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Fresh. Fused. Delicious.</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>"With every dish, experience a symphony of taste that's always fresh, always fused, and undeniably delicious. Elevate your culinary journey with our delectable creations, where every bite tells a story of innovation and flavor."</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.header_image} alt="header_img" />
    </div>
  </div>
);

export default Header;