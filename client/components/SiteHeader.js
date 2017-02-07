import React, { Component } from 'react';
import radium from 'radium';
import { Link as link } from 'react-router';

const Link = radium(link);
const links = [{
  name: '關於我們',
  path: '/about'
}, {
  name: '評審介紹',
  path: '/judges'
}, {
  name: '賽制簡介',
  path: '/competition'
}, {
  name: '活動照片',
  path: '/'
}, {
  name: '聯絡我們',
  path: 'https://www.facebook.com/NorthTaiwanDanceCompetition/'
}];

const styles = {
  wrapper: {
    position: 'fixed',
    width: '100%',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 99,
    transition: '0.2s ease-in-out',
    background: 'rgba(0, 0, 0, 0.5)',
    boxSizing: 'border-box',
  },
  transparent: {
    background: 'transparent',
  },
  black: {
    background: 'rgba(0, 0, 0, 0.5)',
  },
  logoBox: {
    width: 300,
    height: '100%',
  },
  logo: {
    width: 220,
    height: 130,
    margin: '-30px 0 0 10px',
  },
  linkBlock: {
    flex: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  links: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '20px',
    marginRight: 10,
    padding: 15,
    borderRadius: 10,
    transition: '0.2s ease-in',
    ':hover': {
      border: '1px solid rgba(0, 0, 0, 0.6)',
      background: 'rgba(255, 255, 255, 0.6)',
      color: '#000',
    },
  },
};

class SiteHeader extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.logoBox}>
          <Link to="/">
            <img src={require('../images/logo.png')} style={styles.logo} />
          </Link>
        </div>
        <div style={styles.linkBlock}>
          {links.map((l, index) => (
            index < links.length - 1 ?
              <Link to={l.path} style={styles.links} key={index}>{l.name}</Link>
            : <a href={l.path} style={styles.links} key={index} target="_blank">{l.name}</a>
          ))}
        </div>
      </div>
    );
  }
}

export default radium(SiteHeader);
