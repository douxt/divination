import React, {Component} from 'react';
import {GuaBar} from './GuaBar';

export class GuaDiagram extends Component {
  render() {
    const guaNum = 6;
    const diagrams = [];
    const self = this;
    // 先加入空白

    const len = self.props.guas.length;
    const spaceNum = guaNum - len;

    for (let i = 0; i < spaceNum; i++) {
      diagrams.push(<GuaBar key={i} gua={-1}/>);
    }

    // 倒序加入卦
    const guas = self.props.guas.concat();
    guas.reverse();
    console.log('guas reverse: ' + guas);
    guas.forEach((value, index) => {
      diagrams.push(<GuaBar key={guaNum - index} gua={value}/>);
    });

    return (
      <div className={'gua-diagram'}>
        卦象
        <div className={'gua-diagram-body'}>
          {diagrams}
        </div>
      </div>
    );
  }
}
