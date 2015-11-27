import CSSTransition from 'react.css.transition';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('react.css.transition/assets/index.css');

class CSSTransitionDemo extends React.Component {

  render() {
    return (
      <div>
        <div>
          <h3>首次挂载React组件时添加动画</h3>
          <p>仅React组件首次挂载时添加动画效果，其他变动不会有动画效果（刷新页面查看动画效果）。</p>
        </div>
        <ReactCSSTransitionGroup
          transitionName={{
            appear: CSSTransition.RotateIn + '-enter',
            appearActive: CSSTransition.RotateIn + '-enter-active'
          }}
          transitionEnter={false}
          transitionLeave={false}
          transitionAppear={true}
          transitionAppearTimeout={800}>
          <img src="http://mc.meituan.net/touch/css/download/i/ph1.png"/>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

setTimeout(() => ReactDOM.render(<CSSTransitionDemo />, document.getElementById('__component-content')), 1000);
