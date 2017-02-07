import React, {
  PropTypes as T,
  Component,
} from 'react';
import radium from 'radium';
import { Link as link } from 'react-router';
import locationImage from '../images/ic_action_place.png';

const Link = radium(link);

const videos = [{
  src: 'https://www.youtube.com/embed/a4MCQ1ON_MY',
  title: '第12屆精彩特輯',
  subTitle: '每年活動結束後，製作精彩賽事回顧'
}, {
  src: 'https://www.youtube.com/embed/fKb1DnYnrfE',
  title: '第11屆活動宣傳片',
  subTitle: '活動籌備期，製作宣傳片宣傳活動&贊助商'
}];

const photos = [{
  src: require('../images/books.jpg')
}, {
  src: require('../images/banner.jpg')
}];

const sponsors = [{
  name: '台北大學熱舞社',
  logo: require('../images/logos/logoExample.png')
}, {
  name: '台北大學熱舞社',
  logo: require('../images/logos/logoExample.png')
}, {
  name: '台北大學熱舞社',
  logo: require('../images/logos/logoExample.png')
}, {
  name: '台北大學熱舞社',
  logo: require('../images/logos/logoExample.png')
}, {
  name: '台北大學熱舞社',
  logo: require('../images/logos/logoExample.png')
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
    height: '520px',
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
  introBackground: {
    background: 'linear-gradient(to bottom, rgba(252,255,244,0.3) 0%,rgba(233,233,206,0.4) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#fcfff4", endColorstr="#e9e9ce",GradientType=0 )',
  },
  introduction: {
    width: '100%',
    fontSize: 20,
    letterSpacing: 2,
    textAlign: 'center',
    lineHeight: 2,
    margin: '-10px 0 15px 0',
  },
  introInnerBlock: {
    width: '100%',
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigLogo: {
    width: 276,
    height: 400,
    margin: '100px 50px',
    '@media (min-width: 1300px)': {
      width: 414,
      height: 600,
      marginRight: 100,
    },
  },
  videoWrapper: {
    width: 530,
    height: 350,
    padding: '10px 0',
    borderRadius: 5,
    boxShadow: '4px 4px 12px -2px rgba(20%, 20%, 40%, 0.5)',
    position: 'relative',
    '@media (min-width: 1300px)': {
      width: 700,
      height: 440,
    },
  },
  wrapperInner: {
    position: 'absolute',
    width: '100%',
    height: '95%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    transition: '0.2s ease-in-out',
  },
  video: {
    transition: '0.3s ease-in-out',
  },
  videoDesc: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  videoSubDesc: {
    width: '100%',
    fontSize: 16,
    letterSpacing: 1,
    textAlign: 'center',
    color: '#9b9b9b',
  },
  videoToggle: {
    position: 'absolute',
    height: '100%',
    width: '5%',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    zIndex: 300,
    background: 'transparent',
    ':focus': {
      outline: 0,
    },
  },
  dotsBox: {
    position: 'absolute',
    width: '100%',
    height: 50,
    left: 0,
    bottom: -80,
    display: 'flex',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dots: {
    width: 20,
    height: 20,
    marginRight: 3,
    borderRadius: '50%',
    border: '1px solid #9b9b9b',
  },
  unwatch: {
    background: '#fff',
  },
  watching: {
    background: 'linear-gradient(135deg, #141E30, #243B55)',
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
  leftOut: {
    left: -50,
  },
  right: {
    right: 0,
  },
  rightOut: {
    right: -50,
  },
  photoGuide: {
    width: '100%',
    height: '100%',
    transition: '0.3s ease-in-out',
  },
  mediaShow: {
    position: 'relative',
    zIndex: 1,
    opacity: 1,
    left: 0,
    top: 0,
  },
  blockShow: {
    opacity: 1,
    zIndex: 1,
  },
  mediaHide: {
    position: 'absolute',
    zIndex: -500,
    opacity: 0,
    left: 0,
    top: 0,
  },
  blockHide: {
    opacity: 0,
    zIndex: -1,
  },
};

class SiteIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      videoIndex: 0,
    };
  }

  toggleVideoLeft() {
    if (this.state.videoIndex === 0) {
      this.setState({
        videoIndex: videos.length - 1,
      });
    } else {
      this.setState({
        videoIndex: this.state.videoIndex - 1,
      });
    }
  }

  toggleVideoRight() {
    if (this.state.videoIndex === videos.length - 1) {
      this.setState({
        videoIndex: 0,
      });
    } else {
      this.setState({
        videoIndex: this.state.videoIndex + 1,
      });
    }
  }

  togglePhotoLeft() {
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

  togglePhotoRight() {
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
      photoIndex,
      videoIndex,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <div style={[styles.landing, styles.landingBack]} id="landing">
          <div style={styles.sloganBox}>
            <span style={styles.title}>北區舞展</span>
            <span style={[styles.subtitle, styles.noSpacing]}>──</span>
            <span style={styles.subtitle}>North Taiwan Dance Competition</span>
            <span style={[styles.subtitle, styles.noSpacing]}>──</span>
            <span style={styles.info}>
              初賽：2016/11/26（六）<br />
              複賽：2016/12/25（日）<br />
              <img alt="place" src={locationImage} style={styles.locate} />
              台北大學育樂館 <br />
              <button style={styles.landingBtn} onClick={this.landingScroll}>了解更多</button>
              <span style={styles.landingLine}></span>
            </span>
          </div>
        </div>
        <section style={[styles.introBlock, styles.introBackground]}>
          <div style={styles.introBlock}>
            <div style={styles.introInnerBlock}>
              <img alt="logo" src={require('../images/北區標準字.png')} style={styles.bigLogo} />
              <div style={styles.videoWrapper}>
                {videos.map((video, index) => {
                  const showVideo = videoIndex === index;
                  return (
                    <div style={[styles.wrapperInner, styles.blockHide, showVideo && styles.blockShow]} key={index}>
                      <iframe
                        width="95%"
                        height="85%"
                        src={showVideo && video.src || ''}
                        style={styles.video} frameBorder="0"
                        allowFullScreen>
                      </iframe>
                      <span style={styles.videoDesc}>{video.title}</span>
                      <span style={styles.videoSubDesc}>{video.subTitle}</span>
                      <div style={styles.dotsBox}>
                        {videos.map((dot, idx) => {
                          const watching = videoIndex === idx;
                          return (
                            <div key={idx} style={[styles.dots, styles.unwatch, watching && styles.watching]}></div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                <button
                  ref="left"
                  style={[styles.videoToggle, styles.leftOut]}
                  onClick={this.toggleVideoLeft}>
                  <i className="fa fa-angle-left fa-5x"></i>
                </button>
                <button
                  ref="right"
                  style={[styles.videoToggle, styles.rightOut]}
                  onClick={this.toggleVideoRight}>
                  <i className="fa fa-angle-right fa-5x"></i>
                </button>
              </div>
            </div>
            <div style={styles.host}>
              <span style={styles.hostTitle}>主辦單位</span>
              <div style={styles.logoBox}>
                <img alt="logo" src={require('../images/logos/logoExample.png')} style={styles.logo} />
                <span style={styles.logoDesc}>臺北大學熱舞社</span>
              </div>
            </div>
            <div style={styles.sponsor}>
              <span style={[styles.hostTitle, styles.sponsorTitle]}>贊助廠商</span>
              <div style={styles.logoBox}>
                {sponsors.map((sponsor, index) => (
                  <div style={styles.logoInner} key={index}>
                    <img alt="logo" src={sponsor.logo} style={styles.logo} />
                    <span style={styles.logoDesc}>{sponsor.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
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
              const showPhoto = photoIndex === index;
              return (
                <img
                  alt="src"
                  src={photo.src}
                  style={[styles.photoGuide, styles.mediaHide, showPhoto && styles.mediaShow]}
                  key={index} />
              );
            })}
            <button
              ref="photoLeft"
              style={[styles.photoToggle, styles.left]}
              onClick={this.togglePhotoLeft}>
              <i className="fa fa-angle-left fa-5x"></i>
            </button>
            <button
              ref="photoRight"
              style={[styles.photoToggle, styles.right]}
              onClick={this.togglePhotoRight}>
              <i className="fa fa-angle-right fa-5x"></i>
            </button>
          </div>
        </div>
        <div style={[styles.landing, styles.second]}>
          <div style={[styles.sloganBox, styles.endHover]}>
            <span style={styles.endTitle}>你準備好了嗎？</span>
            <Link to="/competition" style={styles.enterButton}>前往報名</Link>
          </div>
        </div>
      </div>
    );
  }
}

SiteIndex.PropTypes = {
  yoyo: T.func,
};

export default radium(SiteIndex);
