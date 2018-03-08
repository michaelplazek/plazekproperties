'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Headline = require('grommet/components/Headline');

var _Headline2 = _interopRequireDefault(_Headline);

var _Animate = require('grommet/components/Animate');

var _Animate2 = _interopRequireDefault(_Animate);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _Box2.default,
        { texture: 'https://s3.us-east-2.amazonaws.com/plazek-properties-info/backdrop.png', direction: 'row', basis: 'full', full: 'vertical', justify: 'center', align: 'center' },
        _react2.default.createElement(
          _Box2.default,
          null,
          _react2.default.createElement(
            _Headline2.default,
            { align: 'center', margin: 'small' },
            'Plazek Properties'
          ),
          _react2.default.createElement(
            _Box2.default,
            { justify: 'center', align: 'center' },
            _react2.default.createElement(
              _Animate2.default,
              { enter: { "animation": "fade", "duration": 1000, "delay": 500 } },
              _react2.default.createElement(_Button2.default, { primary: true,
                label: 'Search for a new home',
                onClick: function onClick() {
                  return _this2.props.history.push('/properties');
                },
                margin: 'medium'
              })
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;