
import React, {Component} from 'react';

export class Coin extends Component {
  constructor(props) {
    super(props);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }

  handleTransitionEnd(e) {
    const self = this;
    if (self.props.enableFlip) {
      self.props.enableFlip();
    }
    // console.log(self.props.aaa);
    // console.log('handleTransitionEnd: ' + e);
    e.stopPropagation();
    e.preventDefault();
  }

  componentDidMount() {
    // this.node.addEventListener('transitionend', this.handleTransitionEnd);
  }

  componentWillUnmount() {
    // this.node.removeEventListener('transitionend', this.handleTransitionEnd);
  }

  render() {
    const styleObj = {};
    const self = this;
    // 如果图片的旋转角度有值并且不为0，添加旋转角度
    if (self.props.angle) {
      styleObj.transform = 'rotateY(' + self.props.angle + 'deg)';
    }
    return (
      <div className={'coin'} style={styleObj} onTransitionEnd={this.handleTransitionEnd}>
        <div className={'head'}/>
        <div className={'tail'}/>
      </div>
    );
  }
}
