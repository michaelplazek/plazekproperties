'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Label = require('grommet/components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _List = require('grommet/components/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('grommet/components/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Heading = require('grommet/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Paragraph = require('grommet/components/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About(props) {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Box2.default,
        { basis: 'full', full: 'vertical', justify: 'center' },
        _react2.default.createElement(
          _Box2.default,
          { align: 'center', justify: 'center', pad: 'large', basis: 'full' },
          _react2.default.createElement(
            _List2.default,
            null,
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                _Box2.default,
                { pad: 'medium' },
                _react2.default.createElement(
                  _Heading2.default,
                  { tag: 'h2' },
                  'What are we?'
                ),
                _react2.default.createElement(
                  _Paragraph2.default,
                  { margin: 'none' },
                  'Plazek Properties is a family-owned company. It encompasses the greater Pittsburgh area, including Bellevue, North Hills, West View, and Brighton Heights.'
                )
              )
            ),
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                _Box2.default,
                { pad: 'medium' },
                _react2.default.createElement(
                  _Heading2.default,
                  { tag: 'h2' },
                  'Who are we?'
                ),
                _react2.default.createElement(
                  _Paragraph2.default,
                  { margin: 'none' },
                  'Plazek Properties was founded in 1990 by Daniel and Luisa Plazek. They are the proud parents of 7 children and currently reside in the North Side of Pittsburgh.'
                )
              )
            ),
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                _Box2.default,
                { pad: 'medium' },
                _react2.default.createElement(
                  _Heading2.default,
                  { tag: 'h2' },
                  'What are our goals?'
                ),
                _react2.default.createElement(
                  _Paragraph2.default,
                  { margin: 'none' },
                  'We encourage tenant longevity through a business model based on mutal respect and consideration between the tenant and landlord. We try our hardest to cater to all of our tenants\' needs and expect our tenants to reciprocate this courtesy with on-time rent payments and observance of company policies. Our goal is simple: to provide you with a clean and comfortable living space for as long as possible.'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;