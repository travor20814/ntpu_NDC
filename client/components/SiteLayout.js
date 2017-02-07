import React, { Component } from 'react';
import radium, { StyleRoot } from 'radium';

import SiteHeader from './SiteHeader.js';

const styles = {
  wrapper: {

  },
  main: {
    minHeight: 'calc(100vh - 70px)',
  },
};

class SiteLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: true,
    };
  }

  render() {
    return (
      <StyleRoot>
        <div style={styles.wrapper}>
          <SiteHeader />
          <main style={styles.main}>
            {this.props.children}
          </main>
        </div>
      </StyleRoot>
    );
  }
}

export default radium(SiteLayout);
