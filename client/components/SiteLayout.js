import React, { Component, PropTypes as T } from 'react';
import Radium, { StyleRoot } from 'radium';

import SiteHeader from './SiteHeader.js';

const styles = {
  wrapper: {
    
  },
  main: {
    minHeight: 'calc(100vh - 70px)',
  },
};

class SiteLayout extends Component {
  render() {
    return (
      <StyleRoot>
        <div style={styles.wrapper}>
          <SiteHeader/>
          <main style={styles.main}>
            {this.props.children}
          </main>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(SiteLayout);
