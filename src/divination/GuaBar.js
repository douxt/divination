import React, {Component} from 'react';

export class GuaBar extends Component {
  render() {
    const self = this;
    const isYang = ((self.props.gua % 2) === 1);
    const isChange = (self.props.gua > 1);

    const guaLineClass = 'gua-line';
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
