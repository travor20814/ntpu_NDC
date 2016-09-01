import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';
import { Link as link } from 'react-router';
import Scroll from 'react-scroll';

const Link = Radium(link);
const photos = [{
  src: require('../images/books.jpg'),
},{
  src: require('../images/banner.jpg'),
}];

const sponsors = [{
  name: '台北大學熱舞社',
  logo: require('../images/logos/logoExample.png'),
},{
  name: '台北大學熱舞社',
  logo: require('../images/logos/logoExample.png'),
},{
  name: '台北大學熱舞社',
  logo: require('../images/logos/logoExample.png'),
},{
  name: '台北大學熱舞社',
  logo: require('../images/logos/logoExample.png'),
},{
  name: '台北大學熱舞社',
  logo: require('../images/logos/logoExample.png'),
}];

const styles = {
  wrapper: {
    width: '100%',
    height: '2000px',
    position: 'relative',
  },
  landing: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  landingBack: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${require('../images/wholeview3.jpg')})`,
    backgroundAttachment: 'fixed',
  },
  second: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${require('../images/firstprizee.jpg')})`,
    backgroundAttachment: 'fixed',
  },
  sloganBox: {
    width: '700px',
    height: '70vh',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
    margin: 0,
    transition: '0.5s ease-in-out',
    textAlign: 'center',
  },
  locate: {
    width: 50,
    height: 50,
    margin: '0 0 -15px -30px',
  },
  end: {
    height: 200,
    background: 'transparent',
    margin: '0 0 10% 0',
    opacity: 0,
    transition: '0.3s ease-in-out',
  },
  endHover: {
    opacity: 1,
  },
  title: {
    width: '100%',
    fontSize: 90,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 26,
    color: '#fff',
    letterSpacing: 2,
    marginTop: '-100px',
  },
  info: {
    fontSize: '30px',
    color: '#fff',
    fontStyle: 'italic',
    letterSpacing: 3,
    marginTop: -20,
  },
  landingBtn: {
    border: '2px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '5px',
    background: 'transparent',
    width: 150,
    height: 60,
    padding: 20,
    fontSize: 18,
    color: '#fff',
    marginTop: 70,
    transition: '0.2s ease-in',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.6)',
      color: '#000',
    },
  },
  landingLine: {
    display: 'block',
    position: 'absolute',
    bottom: 0,
    margin: '0 0 0 193px',
    width: 2,
    height: 29,
    background: '#fff',
  },
  fadeOut: {
    opacity: 0.1,
  },
  middleBlock: {
    width: '100%',
    height: '220px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundChange: {
    background: '#f7f7f7',
  },
  middleInner: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '2px solid #9b9b9b',
  },
  middleContent: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.7)',
    letterSpacing: 6,
    padding: 20,
  },
  noSpacing: {
    letterSpacing: 1,
  },
  introBlock: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  introduction: {
    width: '100%',
    fontSize: 20,
    letterSpacing: 2,
    textAlign: 'center',
    lineHeight: 2,
    margin: '-10px 0 15px 0',
  },
  videoBlock: {
    width: '100%',
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
  },
  video: {
    width: 560,
    margin: 2,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  videoDesc: {
    width: 560,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  videoSubDesc: {
    width: 560,
    fontSize: 16,
    letterSpacing: 1,
    textAlign: 'center',
    color: '#9b9b9b',
  },
  host: {
    width: '100%',
    height: 200,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  sponsor: {
    width: '100%',
    height: 800,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  hostTitle: {
    width: 200,
    height: 200,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  sponsorTitle: {
    height: 800,
  },
  logoBox: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
  },
  logoInner: {
    width: 500,
    height: 200,
    display: 'flex',
    flexWrap: 'no-wrap',
  },
  logo: {
    width: 300,
    height: 200,
    borderRadius: '50%',
  },
  logoDesc: {
    display: 'block',
    fontSize: 18,
    letterSpacing: 1,
    paddingTop: '90px',
  },
  endTitle: {
    width: '100%',
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
  },
  enterButton: {
    width: 140,
    color: '#000',
    background: 'linear-gradient(to bottom, #3498db, #2980b9)',
    ':hover': {
      background: 'linear-gradient(to bottom, #3cb0fd, #3498db)',
    },
    fontSize: 22,
    padding: 10,
    borderRadius: 5,
    textDecoration: 'none',
    textAlign: 'center',
  },
  mediaWrapper: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  photoWrapper: {
    width: 600,
    height: 300,
    position: 'relative',
    margin: 50,
  },
  photoToggle: {
    position: 'absolute',
    height: '100%',
    width: '10%',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.1)',
    border: 'none',
    zIndex: 300,
    ':hover': {
      background: 'rgba(0, 0, 0, 0.3)',
    },
    ':focus': {
      outline: 0,
    },
  },
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
  photoGuide: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    transition: '0.3s ease-in-out',
  },
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
};

class SiteIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transitEnd: false,
      photoIndex: 0,
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
    //console.log(scrollTop);
    if (scrollTop > 2800 && this.state.transitEnd === false) { this.setState({ transitEnd: true }); }
    if (scrollTop < 2800 && this.state.transitEnd === true) { this.setState({ transitEnd: false }); }
  }

  landingScroll(){
    const scroll = Scroll.animateScroll;
    const number = document.getElementById("landing").clientHeight;

    scroll.scrollTo(number); //scroll to about us
  }

  togglePhotoLeft(){
    if (this.state.photoIndex === 0) {
      this.setState({
        photoIndex: photos.length - 1,
      });
    } else {
      this.setState({
        photoIndex: this.state.photoIndex - 1,
      });
    }
  }

  togglePhotoRight(){
    if (this.state.photoIndex === photos.length - 1) {
      this.setState({
        photoIndex: 0,
      });
    } else {
      this.setState({
        photoIndex: this.state.photoIndex + 1,
      });
    }
  }

  render() {
    const {
      transitEnd
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <div style={[styles.landing, styles.landingBack]} id="landing">
          <div style={styles.sloganBox}>
            <span style={styles.title}>北區舞展</span>
            <span style={[styles.subtitle, styles.noSpacing]}>──</span><span style={styles.subtitle}>North Taiwan Dance Competition</span><span style={[styles.subtitle, styles.noSpacing]}>──</span>
            <span style={styles.info}>
              初賽：2016/11/26（六）<br />
              複賽：2016/12/25（日）<br />
              <img src={require('../images/ic_action_place.png')} style={styles.locate} />
              台北大學育樂館 <br />
              <button style={styles.landingBtn} onClick={this.landingScroll.bind(this)}>了解更多</button>
              <span style={styles.landingLine}></span>
            </span>
          </div>
        </div>
        <div style={styles.middleBlock}>
          <div style={styles.middleInner}>
            <span style={styles.middleContent}>關於北區舞展</span>
          </div>
        </div>
        <div style={styles.introBlock}>
          <span style={styles.introduction}>
            首創北部地區大學熱舞社排舞賽事，爭奪最強熱舞社殊榮<br/>
            自第？屆改為比賽模式後，賽事一年比一年刺激<br/>
            每年有高達40所學校報名<br/>
            想為自己熱舞社爭取榮耀，你還在等什麼？
          </span>
          <div style={styles.videoBlock}>
            <div style={styles.video}>
              <iframe width="507" height="300" src="https://www.youtube.com/embed/a4MCQ1ON_MY" frameBorder="0" allowFullScreen></iframe>
              <span style={styles.videoDesc}>第12屆精彩特輯</span>
              <span style={styles.videoSubDesc}>每年活動結束後，製作精彩賽事回顧</span>
            </div>
            <div style={styles.video}>
              <iframe width="507" height="300" src="https://www.youtube.com/embed/fKb1DnYnrfE" frameBorder="0" allowFullScreen></iframe>
              <span style={styles.videoDesc}>第11屆活動宣傳片</span>
              <span style={styles.videoSubDesc}>賽前製作宣傳片，宣傳活動及贊助廠商</span>
            </div>
          </div>
          <div style={styles.host}>
            <span style={styles.hostTitle}>主辦單位</span>
            <div style={styles.logoBox}>
              <img src={require('../images/logos/logoExample.png')} style={styles.logo}/>
              <span style={styles.logoDesc}>臺北大學熱舞社</span>
            </div>
          </div>
          <div style={styles.sponsor}>
            <span style={[styles.hostTitle, styles.sponsorTitle]}>贊助廠商</span>
            <div style={styles.logoBox}>
              {sponsors.map((sponsor, index) => {
                return (
                  <div style={styles.logoInner} key={index}>
                    <img src={sponsor.logo} style={styles.logo}/>
                    <span style={styles.logoDesc}>{sponsor.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div style={[styles.middleBlock, styles.backgroundChange]}>
          <div style={styles.middleInner}>
            <span style={styles.middleContent}>周邊商品</span>
          </div>
        </div>
        <div style={styles.middleBlock}>
          <div style={styles.middleInner}>
            <span style={styles.middleContent}>活動精選</span>
          </div>
        </div>
        <div style={styles.mediaWrapper}>
          <div style={styles.photoWrapper}>
            {photos.map((photo, index) => {
              const show = (this.state.photoIndex === index ? true : false);
              return (
                <img src={photo.src} style={[styles.photoGuide, styles.hide, show && styles.show]} key={index}/>
              );
            })}
            <button ref='left' style={[styles.photoToggle, styles.left]} onClick={this.togglePhotoLeft.bind(this)}>
              <i className='fa fa-angle-left fa-5x' ></i>
            </button>
            <button ref='right' style={[styles.photoToggle, styles.right]} onClick={this.togglePhotoRight.bind(this)}>
              <i className='fa fa-angle-right fa-5x' ></i>
            </button>
          </div>
        </div>
        <div style={[styles.landing, styles.second]}>
        <div style={[styles.sloganBox, styles.end, transitEnd && styles.endHover]}>
          <span style={styles.endTitle}>你準備好了嗎？</span>
          <Link to='/competition' style={styles.enterButton}>前往報名</Link>
        </div>
        </div>
      </div>
    );
  }
}

export default Radium(SiteIndex);
