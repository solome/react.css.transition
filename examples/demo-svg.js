import React from 'react';
import ReactDOM from 'react-dom';


function animate(duration, onStep) {
  const start = Date.now();
  const timer = {id: 0};
  (function loop() {
    timer.id = requestAnimationFrame(function() {
      const diff = Date.now() - start;
      const fraction = diff / duration;
      onStep(fraction);
      if (diff < duration) {
        loop();
      }
    });
  })();
  return timer;
}

function lerp(low, high, fraction) {
  return low + (high - low) * fraction;
}

class SvgDemo extends React.Component {

  constructor() {
     super();
     this.state = {x: 0};
  }

  move = i => {
    this.setState({x: this.state.x + i * 100});
  };

  render() {
    return (
      <div>
        <p>
          <button className="md-button md-button-blue md-button-default" onClick={this.move.bind(this, -1)}>Left</button>
          <button className="md-button md-button-blue md-button-default" onClick={this.move.bind(this, 1)}>Right</button>
        </p>
        <MoveCircle x={this.state.x}/>
      </div>
    );
  }
}


class MoveCircle extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      final: 0
    };
    this.timer = null;
  }

  render() {
    let from = this.state.x;
    let to = this.props.x;
    if (to !== this.state.final) {
      this.state.final = to;
      if (this.timer) {
        cancelAnimationFrame(this.timer.id);
      }

      this.timer = animate(500, function(fraction) {
        const x = lerp(from, to, fraction);
        if (fraction >= 1) {
          this.setState({
            value: to
          });
          this.timer = null;
        } else {
          this.setState({x: x});
        }
      }.bind(this))
    }

    console.log(this.state.x);

    return (
      <div>
        <p>cx: {this.state.x}</p>
        <svg><circle r="10" cy="10" cx={this.state.x + 10} fill="#2bb8aa"/></svg>
      </div>
    );
  }
}

ReactDOM.render(<SvgDemo/>, document.getElementById('app'));
