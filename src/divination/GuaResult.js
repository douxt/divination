import React, {Component} from 'react';

export class GuaResult extends Component {
  render() {
    const self = this;
    let change = null;
    if (self.props.change.length === 0) {
      change = '无变爻';
    } else {
      change = '变爻:' + self.props.change;
    }

    const link = 'https://www.baidu.com/s?wd=title:(周易第' + self.props.index + '卦_' + self.props.name + '卦_' + self.props.name2 + '_' + self.props.desc + '_' + self.props.desc2 + ')';
    return (
      <div className="gua-result">
        结果: 第{self.props.index}卦 {self.props.name}卦({self.props.name2}) , {change}
        <br/>
        <br/>
        <a href={link} target="_blank" rel="noopener noreferrer">点此查找解释</a>
      </div>

    );
  }
}
