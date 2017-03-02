import React, {Component} from 'react';

export class Guide extends Component {
  render() {
    return (
      <div className="guide">
说明：<br/>
1.摇卦六次，得出结果。<br/>
2.结果分两部分，主卦和变卦，无变卦只需看主卦。<br/>
3.每个卦都有七句，第一句为主卦，反映现状，其余六句为变卦，如果结果中存在变卦，则参考对应的变卦，反映变化趋势。<br/>
4.如果所有的卦都是变卦，等同于无变卦。
      </div>
    );
  }
}
