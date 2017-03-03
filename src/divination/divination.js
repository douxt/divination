
import React, {Component} from 'react';
import {Coin} from './coin';
import {GuaDiagram} from './GuaDiagram';
import {GuaResult} from './GuaResult';
import {Guide} from './Guide';
// import {GuaList} from './GuaList';
// import {Cheerio} from 'cheerio';

// 六十四卦列表
const guaList = require('./GuaList');

// 上下指标对应的卦指标
const guaMap = require('./GuaMap');

const guaDict = ['坤', '震', '坎', '兑', '艮', '离', '巽', '乾'];
const guaDict2 = ['地', '雷', '水', '泽', '山', '火', '风', '天'];

export class Divination extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);

    this.setting = {
      flipDeg: 4320
    };

    this.state = {
      angles: [0, 0, 0],
      flipDisabled: '',
      guas: []
    };
    // console.log('guaList: ' + guaList);

    // const self = this;
    // self.testCheerio();
  }

  // testCheerio() {
  //   const $ = Cheerio.load('<h2 class="title">Hello world</h2>');
  //   $('h2.title').text('Hello there!');
  //   $('h2').addClass('welcome');

  //   console.log($.html);
  // }

  onTransitionEnd() {
    console.log('TransitionEnd: ');

    const self = this;
    const guas = self.state.guas;
    const newGua = self.getGua();
    guas.push(newGua);
    self.setState({
      guas
    });

    console.log('guas: ' + guas);

    if (self.state.guas.length < 6) {
      // 卦还没出全，继续出
      this.setState({flipDisabled: ''});
    } else {
      // 卦已出完，需得出卦的结果。 那个卦，有哪几个变卦。
      // self.getResult();
    }
  }

  getResult() {
    const self = this;
    const changeGuas = [];
    const guas = self.state.guas;

    if (guas.length < 6) {
      return null;
    }
    guas.forEach((value, index) => {
      if (value === 0 || value === 3) {
        changeGuas.push(index + 1);
      }
    });
    console.log('change guas: ' + changeGuas);

// 卦的结果： 第X卦 X卦 XX卦 上X下X X上X下

    // 计算卦的索引，111对应乾卦。000对应坤卦，索引转为10进制。
    const upGuaIndex = (guas[5] > 1 ? 4 : 0) + (guas[4] > 1 ? 2 : 0) + (guas[3] > 1 ? 1 : 0);
    const downGuaIndex = (guas[2] > 1 ? 4 : 0) + (guas[1] > 1 ? 2 : 0) + (guas[0] > 1 ? 1 : 0);

    const guaIndex = guaMap[upGuaIndex][downGuaIndex];
    const guaName = guaList[guaIndex - 1];

    let guaName2 = null;
    if (upGuaIndex === downGuaIndex) {
      // 上下卦相同，格式为X为X
      guaName2 = guaDict[upGuaIndex] + '为' + guaDict2[upGuaIndex];
    } else {
      guaName2 = guaDict2[upGuaIndex] + guaDict2[downGuaIndex] + guaName;
    }

    console.log('upGuaIndex: ' + upGuaIndex + ', downGuaIndex: ' + downGuaIndex);

    const guaDiscription = guaDict[upGuaIndex] + '上' + guaDict[downGuaIndex] + '下';
    const guaDiscription2 = '上' + guaDict[upGuaIndex] + '下' + guaDict[downGuaIndex];
    console.log(guaDiscription + ' 变卦: ' + changeGuas);
    // https://www.baidu.com/s?wd=X上X下 site:baike.fututa.com
    return {
      index: guaIndex,
      name: guaName,
      name2: guaName2,
      gua: guaDiscription,
      gua2: guaDiscription2,
      change: changeGuas
    };
  }

  getGua() {
    const self = this;
    let yangNum = 0;
    /* eslint no-unused-vars: ["error", { "args": "none" }] */
    self.state.angles.forEach((value, index) => {
      // eslint unused:false
      yangNum += (value % 360) > 0 ? 0 : 1;
    });
    return yangNum;
  }

  handleClick(e) {
    const self = this;

    console.log('guas: ' + self.state.guas);

    this.setState({flipDisabled: 'disabled'});

    const flipDeg = self.setting.flipDeg;
    const angles = [];
    self.state.angles.forEach((value, index) => {
      const rnd = Math.random();
      console.log('random: ' + rnd);
      const totalDeg = value + flipDeg + (rnd > 0.5 ? 180 : 0);
      angles[index] = totalDeg;
    });
    // console.log('flip1: ' + flipDeg1 + ' 2: ' + flipDeg2 + ' 3: ' + flipDeg3);
    self.setState({
      angles
    });

    // console.log('angles: ' + angles);

    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    const self = this;
    let coins = [];
    const angles = self.state.angles;

    coins = [];
    angles.forEach((value, index) => {
      if (index === 1) {
        coins.push(<Coin angle={value} key={index} enableFlip={this.onTransitionEnd}/>);
      } else {
        coins.push(<Coin angle={value} key={index} enableFlip={null}/>);
      }
    });

    let result = null;
    const guaResult = self.getResult();
    if (guaResult) {
      console.log('guaResult: ' + guaResult.guaDiscription);
      result = <GuaResult index={guaResult.index} name={guaResult.name} name2={guaResult.name2} desc={guaResult.gua} desc2={guaResult.gua2} change={guaResult.change}/>;
    }

    // const disabled = '';
    // console.log(coins);
    return (
      <div className="divination">
        <div className={'coins'}>
          {coins}
        </div>
        <input type={'button'} value={'摇卦'} onClick={this.handleClick} disabled={self.state.flipDisabled}/>
        <GuaDiagram guas={self.state.guas}/>
        {result}
        <Guide/>
      </div>
    );
  }
}
