# react.css.transition

![Meituan Design: Calendar](https://s3.amazonaws.com/media-p.slid.es/uploads/265482/images/1991644/calendar.gif)

slides: http://slides.com/solome/animation-in-react/

## Development

```bash
git clone git@github.com:solome/react.css.transition.git
cd react.css.transition
npm install
npm start
```

## Usage

```js
import ReactDOM from 'react-dom';
import CSSTransition from 'react.css.transition';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

ReactDOM.render(
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
  </ReactCSSTransitionGroup>, container);
```

## License

react.css.transition is released under the MIT license.
