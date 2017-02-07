import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

const styles = {
  wrapper: {
    width: '100%',
    height: 2000,
  },
  landing: {
    width: '100%',
    height: '45vh',
    backgroundImage: `url(${require('../images/about_landing.jpg')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBox: {
    width: '50%',
    height: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#fff',
    letterSpacing: 8,
  },
};

class PageAbout extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.landing}>
          <div style={styles.titleBox}>
            <span style={styles.title}>關於我們</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(PageAbout);
