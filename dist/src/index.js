'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _Home = require('./js/Home');

var _Home2 = _interopRequireDefault(_Home);

var _App = require('./js/App');

var _App2 = _interopRequireDefault(_App);

var _Contact = require('./js/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _About = require('./js/About');

var _About2 = _interopRequireDefault(_About);

var _Properties = require('./js/Properties');

var _Properties2 = _interopRequireDefault(_Properties);

var _Building = require('./js/Building');

var _Building2 = _interopRequireDefault(_Building);

var _Unit = require('./js/Unit');

var _Unit2 = _interopRequireDefault(_Unit);

require('grommet/grommet-hpinc.min.css');

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = document.getElementById('content');
_reactDom2.default.render(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/contact', component: _Contact2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/properties', component: _Properties2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/building', component: _Building2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/unit', component: _Unit2.default })
  )
), content);