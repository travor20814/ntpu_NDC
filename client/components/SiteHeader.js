import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';
import { Link as link } from 'react-router';

const Link = Radium(link);

const links = [{
  name: '活動公告',
  path: '/',
},{
  name: '關於我們',
  path: '/',
},{
  name: '賽制簡介',
  path: '/',
},{
  name: '活動照片',
  path: '/',
},{
  name: '贊助商',
  path: '/',
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
  },
  black: {
    background: 'rgba(0, 0, 0, 0.5)',
  },
  linkBlock: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  links: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '20px',
    margin: '0 30px 0 0',
    padding: '5px',
    ':hover': {
      borderBottom: '2px solid #034158'
    },
  },
};

class SiteHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transit: false,
    };
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(e){
    let scrollTop = e.srcElement.body.scrollTop;
    {scrollTop > 750 ? this.setState({ transit: true }) : this.setState({ transit: false })}
  }

  render() {
    const {
      transit
    } = this.state;

    return (
      <div style={[styles.wrapper, transit && styles.black]}>
        <div style={styles.linkBlock}>
          {links.map((link, index) => {
            return (
              <Link to={link.path} style={styles.links} key={index}>{link.name}</Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Radium(SiteHeader);
