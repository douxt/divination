import React, {Component} from 'react';

export class GuaBar extends Component {
  render() {
    const self = this;

    const guaLineClass = 'gua-line';
    if (self.props.gua === -1) {
      return (
        <div className={guaLineClass}/>
      );
    }

    const isYang = (self.props.gua > 1);
    const isChange = ((self.props.gua === 0) || (self.props.gua === 3));

    let guaBarClass = 'gua-bar-yin';
    let guaSpaceClass = 'gua-space-yin';
    if (isYang) {
      guaBarClass = 'gua-bar-yang';
      guaSpaceClass = 'gua-space-yang';
    }

    let guaChangeClass = 'gua-change-none';

    let changeChar = ' ';

    if (isChange) {
      if (isYang) {
        guaChangeClass = 'gua-change-yang';
        changeChar = '○';
      } else {
        guaChangeClass = 'gua-change-yin';
        changeChar = '×';
      }
    }

    return (
      <div className={guaLineClass}>
        <div className={guaBarClass}>
          <div className={guaSpaceClass}/>
        </div>
        <div className={guaChangeClass}>{changeChar}</div>
      </div>
    );
  }
}
