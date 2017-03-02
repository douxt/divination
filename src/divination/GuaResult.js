import React, {Component} from 'react';

export class GuaResult extends Component {
  render() {
    const self = this;
    let change = null;
    if (self.props.change.length === 0) {
      change = '无变卦';
    } else {
      change = '变卦:' + self.props.change;
    }

    const link = 'https://www.baidu.com/s?wd=site:(baike.fututa.com) title:(' + self.props.desc + '_' + self.props.desc2 + ')';
    return (
      <div className="gua-result">
        卦象: {self.props.desc}, {change}
        <br/>
        <br/>
        <a href={link} target="_blank" rel="noopener noreferrer">点此查找解释</a>
      </div>

    );
  }
}
