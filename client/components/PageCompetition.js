import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

const rules = [{
  desc: '參賽隊伍一社限制一隊參賽，參賽者需為北區(台北、新北、桃園、新竹、苗栗、基隆、宜蘭)，大專院校之25歲以下在校生。',
},{
  desc: '報名方式為網絡表單報名，報名時間為9/1至9/24，表單將於官方社團公布，各社團僅需推派一名成員填寫報名表單即可。',
},{
  desc: '每社須推派1-2名負責人，參加籌會及供主辦單位連絡使用。',
},{
  desc: '報名費用為新台幣5000元整，去年11-20名參賽隊伍為4500元整，1-10名參賽隊伍為4000元整。',
},{
  desc: '參賽隊伍每隊需另繳交500元保證金，兩次籌會皆有參加者，事後退500元保證金。'
},{
  desc: '本屆北區舞展參賽隊伍數無限制，並於初賽選入總成績前20隊進入決賽（總成績為三位評審總分平均）。',
},{
  desc: '初賽報名成功的社團，將會公布在北區舞展官方社團中，盡請關注。',
}];

const introductions = [{
  desc: '初賽一隊比賽時間為1-3分鐘，決賽一隊比賽時間為5分鐘（以繳交給主辦單位之音樂為計時標準）。',
},{
  desc: '各社團參賽人數須依照賽前提供之人數，賽後主辦單位將會派人清點人數，超過表定人數者斟酌扣分。'
},{
  desc: '參賽隊伍須於比賽當日提供每位參賽者之學生證，予主辦單位確認符合比賽資格。'
},{
  desc: '參賽隊伍須於主辦單位所規定之時限內繳交音樂與參賽人數，逾期則主辦單位保有處分權利。'
},{
  desc: '評分項目分別為：一、舞技(50%) 二、團隊默契(20%) 三、創意(20%) 四、服裝(10%)，評審會依各項目給分並計算得到總分。'
},{
  desc: '為比賽公平，禁止使用任何大型道具或造成舞台濕滑，如發現違規者，主辦單位可斟酌扣分。'
},{
  desc: '如遇不可抗力因素，主辦單位保有更改活動之權利。'
}];

const styles = {
  wrapper: {
    width: '100%',
  },
  titleBlock: {
    width: '100%',
    height: '100px',
    paddingTop: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding: {
    paddingTop: 20,
  },
  titleInner: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '2px solid #9b9b9b',
  },
  titleContent: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.7)',
    letterSpacing: 6,
    padding: 20,
  },
  ruleBlock: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ruleList: {
    width: '70%',
    fontSize: 20,
    letterSpacing: 1.5,
    color: '#9b9b9b',
    listStyle: 'none',
  },
  buttonBlock: {
    width: '100%',
    height: '100px',
    paddingTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

class PageCompetition extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.titleBlock}>
          <div style={styles.titleInner}>
            <span style={styles.titleContent}>比賽辦法</span>
          </div>
        </div>
        <div style={styles.ruleBlock}>
          <li style={styles.ruleList}>
            {rules.map((rule, index) => {
              return <ul>{index + 1}.{rule.desc}</ul>
            })}
          </li>
        </div>
        <div style={[styles.titleBlock, styles.padding]}>
          <div style={styles.titleInner}>
            <span style={styles.titleContent}>比賽規則</span>
          </div>
        </div>
        <div style={styles.ruleBlock}>
          <li style={styles.ruleList}>
            {introductions.map((intro, index) => {
              return <ul>{index + 1}.{intro.desc}</ul>
            })}
          </li>
        </div>
        <div style={styles.buttonBlock}>
          <a href="http://www.google.com" target="_blank" style={styles.enterButton}>我要報名！</a>
        </div>
      </div>
    );
  }
}

export default Radium(PageCompetition);
