import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';
import { Link as link } from 'react-router';
import Scroll from 'react-scroll';

const Link = Radium(link);
const links = [{
  name: '關於我們',
  path: '/about',
},{
  name: '評審介紹',
  path: '/judges',
},{
  name: '賽制簡介',
  path: '/competition',
},{
  name: '活動照片',
  path: '/',
},{
  name: '聯絡我們',
  path: 'https://www.facebook.com/NorthTaiwanPopdanceUnion/',
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
  logo:{
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
    if (scrollTop > 650 && this.state.transit === false) { this.setState({ transit: true }); }
    if (scrollTop < 650 && this.state.transit === true ) { this.setState({ transit: false }); }
  }

  handleClick(index){
    const scroll = Scroll.animateScroll;
    switch (index) {
      case 0: //about us
        scroll.scrollTo(700);
        break;
      case 1: //judges
        scroll.scrollTo(3100);
        break;
      default:
        scroll.scrollTo(0);
    }
  }

  render() {
    const {
      transit
    } = this.state;

    return (
      <div style={[styles.wrapper, this.props.scrollEffect && styles.transparent, transit && styles.black]}>
        <div style={styles.logoBox}>
          <Link to='/'>
            <img src={require('../images/logo.png')} style={styles.logo}/>
          </Link>
        </div>
        <div style={styles.linkBlock}>
          {links.map((link, index) => {
            return (
              index === links.length - 1 ?
                <a href={link.path} style={styles.links} onClick={this.handleClick.bind(this, index)} target='_blank' key={index}>{link.name}</a> :
                <Link to={link.path} style={styles.links} key={index}>{link.name}</Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Radium(SiteHeader);
