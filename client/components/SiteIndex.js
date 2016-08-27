import React, { Component, PropTypes as T } from 'react';
import { Link as link } from 'react-router';
import Radium from 'radium';

const styles = {
  wrapper: {
    width: '100%',
    height: '2000px',
  },
  landing: {
    width: '100%',
    height: '800px',
    backgroundImage: `url(${require('../images/wholeview.jpg')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  },
};

class SiteIndex extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.landing}></div>
      </div>
    );
  }
}

export default Radium(SiteIndex);
