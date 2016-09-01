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
  constructor(props) {
    super(props);

    this.state = {
      index: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    const path = nextProps.location.pathname;

    {path === '/' ? this.setState({ index: true }) : this.setState({ index: false })}
  }

  componentDidMount() {
    const path = this.props.location.pathname;

    {path === '/' ? this.setState({ index: true }) : this.setState({ index: false })}
  }

  render() {
    const {
      index
    } = this.state;

    return (
      <StyleRoot>
        <div style={styles.wrapper}>
          <SiteHeader
            scrollEffect = {index}
          />
          <main style={styles.main}>
            {this.props.children}
          </main>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(SiteLayout);
