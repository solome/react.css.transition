import CSSTransition from 'react.css.transition';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import uuid from 'uuid';

require('react.css.transition/assets/index.css');

const style = {
  fieldset: {
    fontSize: '.88em',
    lineHeight: '1.5em',
    padding: '1em 2em',
    border: '1px solid #2bb8aa',
    borderRadius: '.3em',
    maxWidth: '38em'
  },
  legend: {
    color: '#f76120'
  },
  ReactCSSTransitionGroup: {
    position: 'absolute',
    top: '-14.5em',
    left: '6.5em'
  }
};

class CSSTransitionDemo extends React.Component {

  constructor() {
    super();

    this.state = {currAnimation: CSSTransition.FlipIn, uuid: uuid.v1().slice(0, 8), animationList: CSSTransition};
  }

  _handleRefresh = () => {
    this.setState({uuid: uuid.v1().slice(0, 8)});
  };

  _handleOnChange = (value) => {
    this.setState({uuid: uuid.v1().slice(0, 8), currAnimation: value});
  };

  render() {
    const animationListJSX = [];
    const animationList = this.state.animationList;
    for (const key in animationList) {
      animationListJSX.push(
        <div key={key} className="md-ct-item">
          <input type="radio" id={key}
            value={animationList[key]}
            name="CSSTransition"
            checked={this.state.currAnimation == animationList[key]}
            onChange={this._handleOnChange.bind(this, animationList[key])} />
          <label htmlFor={key}>{key}</label>
        </div>
      );
    }

    return (
      <div>
        <div style={{display: 'inline-block', marginRight: '3em'}}>
          <h3>动画特效展示</h3>
          <fieldset style={style.fieldset}>
            <legend style={style.legend}>选择动画特效</legend>
            {animationListJSX}
            <p>
              <button className="md-button md-button-blue md-button-default" onClick={this._handleRefresh}>点击查看特效</button>
            </p>
          </fieldset>
        </div>
        <div style={{display: 'inline-block', position: 'relative'}}>
          <ReactCSSTransitionGroup
            component="div"
            style={style.ReactCSSTransitionGroup}
            transitionName={this.state.currAnimation}
            transitionLeave={false}
            transitionEnterTimeout={500}>
            <img key={this.state.uuid} src="http://mc.meituan.net/touch/css/download/i/shop.png"/>
          </ReactCSSTransitionGroup>

          <div>
            <img src="http://mc.meituan.net/touch/css/download/i/v-phone.png"/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CSSTransitionDemo />, document.getElementById('app'));
