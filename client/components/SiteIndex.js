import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';
import { Link as link } from 'react-router';

const Link = Radium(link);
const judges = [{
  name: '一德老師',
  style: 'popping',
  photo: require('../images/judges/poppingED.jpg'),
  description: [{
    content: '帥帥帥',
  },{
    content: '帥帥帥',
  },{
    content: '帥帥帥',
  }],
},{
  name: '一德老師',
  style: 'popping',
  photo: require('../images/judges/poppingED.jpg'),
  description: [{
    content: '帥帥帥',
  },{
    content: '帥帥帥',
  },{
    content: '帥帥帥',
  }],
},{
  name: '一德老師',
  style: 'popping',
  photo: require('../images/judges/poppingED.jpg'),
  description: [{
    content: '帥帥帥',
  },{
    content: '帥帥帥',
  },{
    content: '帥帥帥',
  }],
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
},];

const styles = {
  wrapper: {
    width: '100%',
    height: '2000px',
  },
  landing: {
    width: '100%',
    height: '800px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  first: {
    backgroundImage: `url(${require('../images/wholeview.jpg')})`,
  },
  second: {
    backgroundImage: `url(${require('../images/firstprizee.jpg')})`,
  },
  sloganBox: {
    width: '600px',
    height: '400px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '20px',
    margin: '0 0 15% 0',
    transition: '0.5s ease-in-out',
  },
  end: {
    height: 200,
    background: 'transparent',
    margin: '0 0 10% 0',
    opacity: 0,
    transition: '2s ease-in-out',
  },
  endHover: {
    opacity: 1,
  },
  title: {
    fontSize: '100px',
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 8,
  },
  subtitle: {
    fontSize: '28px',
    color: '#fff',
    letterSpacing: 2,
    marginTop: '-100px',
  },
  info: {
    fontSize: '30px',
    color: '#fff',
    fontStyle: 'italic',
    letterSpacing: 3,
  },
  fadeOut: {
    opacity: 0.1,
  },
  middleBlock: {
    width: '100%',
    height: '300px',
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
  judgeBlock: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  listBox: {
    width: '100%',
    height: '400px',
    margin: 20,
    padding: '20px 20px 40px 20px',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '2px solid #034158',
  },
  noBorder: {
    borderBottom: 'transparent',
  },
  innerBox: {
    display: 'flex',
    flexWrap: 'no-wrap',
  },
  hide: {
    opacity: 0,
  },
  photo: {
    display: 'block',
    width: 400,
    height: 400,
    opacity: 1,
    transition: '2s ease-in-out',
  },
  descBlock: {
    flex: 1,
    minWidth: 600,
    height: 400,
  },
  danceStyle: {
    fontSize: 50,
    letterSpacing: 4,
    fontWeight: 'bold',
    fontStyle: 'italic',
    padding: '10px 0 10px 50px',
  },
  judgeDescWrapper: {
    width: '100%',
    padding: 20,
    margin: '5px 0 0 40px',
  },
  judgeDesc: {
    fontSize: 20,
    lineHeight: 1.8,
  },
  introBlock: {
    width: '100%',
    height: 2100,
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
};

class SiteIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transitTopic: false,
      transitJudge: false,
      transitEnd: false,
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
    console.log(scrollTop);
    {scrollTop > 150 ? this.setState({ transitTopic: true }) : this.setState({ transitTopic: false })}
    {scrollTop > 2800 ? this.setState({ transitJudge: true }) : this.setState({ transitJudge: false })}
    {scrollTop > 4800 ? this.setState({ transitEnd: true }) : this.setState({ transitEnd: false })}
  }

  render() {
    const {
      transitTopic,
      transitJudge,
      transitEnd,
      videoURL
    } = this.state;

    return (
      <div style={styles.wrapper}>
        <div style={[styles.landing, styles.first]}>
          <div style={[styles.sloganBox, transitTopic && styles.fadeOut]}>
            <span style={styles.title}>北區舞展</span>
            <span style={styles.subtitle}>—— North Taiwan Dance Competition ——</span>
            <span style={styles.info}>
              初賽：2016/11/26（六）<br />
              複賽：2016/12/25（日）
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
              <img src={require('../logos/logoExample.png')} style={styles.logo}/>
              <span style={styles.logoDesc}>臺北大學熱舞社</span>
            </div>
          </div>
          <div style={styles.sponsor}>
            <span style={[styles.hostTitle, styles.sponsorTitle]}>贊助廠商</span>
            <div style={styles.logoBox}>
              {sponsors.map((sponsor, index) => {
                return (
                  <div style={styles.logoInner}>
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
            <span style={styles.middleContent}>評審陣容</span>
          </div>
        </div>
        <div style={[styles.judgeBlock, styles.backgroundChange]}>
          {judges.map((judge, index) => {
            return (
              <li style={[styles.listBox, index + 1 === judges.length && styles.noBorder]} key={index}>
                {index % 2 === 0 ?
                  <div style={styles.innerBox}>
                    <img src={judge.photo} style={[styles.hide , transitJudge && styles.photo]}/>
                    <div style={styles.descBlock}>
                      <span style={styles.danceStyle}>{judge.style}</span>
                      {judge.description? (
                        <ul style={styles.judgeDescWrapper}>
                          {judge.description.map((desc, index) => {
                            return (
                              <li style={styles.judgeDesc} key={index}>{desc.content}</li>
                            );
                          })}
                        </ul>
                      ): null}
                    </div>
                  </div> :
                  <div style={styles.innerBox}>
                    <div style={styles.descBlock}>
                      <span style={styles.danceStyle}>{judge.style}</span>
                      {judge.description? (
                        <ul style={styles.judgeDescWrapper}>
                          {judge.description.map((desc, index) => {
                            return (
                              <li style={styles.judgeDesc} key={index}>{desc.content}</li>
                            );
                          })}
                        </ul>
                      ): null}
                    </div>
                    <img src={judge.photo} style={[styles.hide , transitJudge && styles.photo]}/>
                  </div>
                }
              </li>
            );
          })}
        </div>
        <div style={[styles.landing, styles.second]}>
        <div style={[styles.sloganBox, styles.end, transitEnd && styles.endHover]}>
          <span style={styles.endTitle}>你還在等什麼？</span>
          <Link to='/' style={styles.enterButton}>前往報名</Link>
        </div>
        </div>
      </div>
    );
  }
}

export default Radium(SiteIndex);
