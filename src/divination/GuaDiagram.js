import React, {Component} from 'react';
import {GuaBar} from './GuaBar';
const guas = [0, 1, 2, 3, 2, 1];

export class GuaDiagram extends Component {
  render() {
    const diagrams = [];
    guas.forEach((value, index) => {
      diagrams.push(<GuaBar key={index} gua={value}/>);
    });

    return (
      <div className={'gua-diagram'}>
        GuaDiagram
        <div className={'gua-diagram-body'}>
          {diagrams}
        </div>
      </div>
    );
  }
}
