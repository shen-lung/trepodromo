import React, { Component } from 'react';

import BasePage from './components/BasePage';
import MobileMenu from './components/MobileMenu';
import MobileFooter from './components/MobileFooter';
// import Slider from './components/Slider';


class App extends Component {
  render() {
    return (
      <div>
        <BasePage />
        {/* <Slider /> */}
        <MobileMenu />
        <MobileFooter />
      </div>
    );
  }
}

export default App;
