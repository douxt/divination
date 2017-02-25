
import React, {Component} from 'react';
import {Coin} from './coin';
import {GuaDiagram} from './GuaDiagram';

export class Divination extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);

    this.setting = {
      flipDeg: 7200
    };

    this.state = {
      angles: [0, 0, 0],
      flipDisabled: ''
    };
    console.log('this: ' + this);
  }

  onTransitionEnd() {
    console.log('TransitionEnd: ');
    this.setState({flipDisabled: ''});
  }

  handleClick(e) {
    const self = this;

    const flipDeg = self.setting.flipDeg;
    const angles = [];
    self.state.angles.forEach((value, index) => {
      const totalDeg = value + flipDeg + (Math.random() > 0.5 ? 180 : 0);
      angles[index] = totalDeg;
    });
    // console.log('flip1: ' + flipDeg1 + ' 2: ' + flipDeg2 + ' 3: ' + flipDeg3);
    self.setState({
      angles
    });

    console.log('angles: ' + angles);

    this.setState({flipDisabled: 'disabled'});

    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    const self = this;
    let coins = [];
    const angles = self.state.angles;

    coins = [];
    angles.forEach((value, index) => {
      coins.push(<Coin angle={value} key={index} enableFlip={this.onTransitionEnd}/>);
    });

    // const disabled = '';
    // console.log(coins);
    return (
      <div className="divination">
        <div className={'coins'}>
          {coins}
        </div>
        <input type={'button'} value={'flip'} onClick={this.handleClick} disabled={self.state.flipDisabled}/>
        <GuaDiagram/>
      </div>
    );
  }
}
