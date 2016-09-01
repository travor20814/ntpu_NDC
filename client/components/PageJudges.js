import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

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

const styles = {
  wrapper: {
    width: '100%',
    height: 2000,
  },
  landing: {
    width: '100%',
    height: '45vh',
    backgroundImage: `url(${require('../images/judge_landing.jpg')})`,
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
  photo: {
    display: 'block',
    width: 400,
    height: 400,
    'webkit-box-shadow': '10px 10px 39px 0px rgba(0,0,0,0.75)',
    '-moz-box-shadow': '10px 10px 39px 0px rgba(0,0,0,0.75)',
    boxShadow: '10px 10px 39px 0px rgba(0,0,0,0.75)',
    transition: '2s ease-in-out',
  },
  rotateLeft: {
    transform: 'rotate(-5deg)',
  },
  rotateRight: {
    transform: 'rotate(5deg)',
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
};

class PageJudges extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.landing}>
          <div style={styles.titleBox}>
            <span style={styles.title}>評審介紹</span>
          </div>
        </div>
        <div style={[styles.judgeBlock, styles.backgroundChange]}>
          {judges.map((judge, index) => {
            return (
              <li style={[styles.listBox, index + 1 === judges.length && styles.noBorder]} key={index}>
                {index % 2 === 0 ?
                  <div style={styles.innerBox}>
                    <img src={judge.photo} style={[styles.photo, styles.rotateRight]}/>
                    <div style={styles.descBlock}>
                      <span style={styles.danceStyle}>{judge.name}{'\t'}{judge.style}</span>
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
                      <span style={styles.danceStyle}>{judge.name}{'\t'}{judge.style}</span>
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
                    <img src={judge.photo} style={[styles.photo, styles.rotateLeft]}/>
                  </div>
                }
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Radium(PageJudges);
