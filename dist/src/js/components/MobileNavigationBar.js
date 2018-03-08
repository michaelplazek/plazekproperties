'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Label = require('grommet/components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _List = require('grommet/components/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('grommet/components/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobileNavigationBar = function (_Component) {
  _inherits(MobileNavigationBar, _Component);

  function MobileNavigationBar(props) {
    _classCallCheck(this, MobileNavigationBar);

    return _possibleConstructorReturn(this, (MobileNavigationBar.__proto__ || Object.getPrototypeOf(MobileNavigationBar)).call(this, props));
  }

  _createClass(MobileNavigationBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Header2.default,
        { direction: 'row', colorIndex: 'neutral-1', justify: 'center' },
        _react2.default.createElement(
          _List2.default,
          null,
          _react2.default.createElement(
            _ListItem2.default,
            { justify: 'center' },
            _react2.default.createElement(
              _Box2.default,
              { margin: 'medium' },
              _react2.default.createElement(
                _Anchor2.default,
                { path: '/' },
                _react2.default.createElement(
                  _Label2.default,
                  { margin: 'large', size: 'large' },
                  'Home'
                )
              )
            )
          ),
          _react2.default.createElement(
            _ListItem2.default,
            { justify: 'center' },
            _react2.default.createElement(
              _Box2.default,
              { margin: 'medium' },
              _react2.default.createElement(
                _Anchor2.default,
                { path: '/properties' },
                _react2.default.createElement(
                  _Label2.default,
                  { size: 'large' },
                  'Properties'
                )
              )
            )
          ),
          _react2.default.createElement(
            _ListItem2.default,
            { justify: 'center' },
            _react2.default.createElement(
              _Box2.default,
              { margin: 'medium' },
              _react2.default.createElement(
                _Anchor2.default,
                { path: '/contact' },
                _react2.default.createElement(
                  _Label2.default,
                  { size: 'large' },
                  'Contact'
                )
              )
            )
          ),
          _react2.default.createElement(
            _ListItem2.default,
            { justify: 'center' },
            _react2.default.createElement(
              _Box2.default,
              { margin: 'medium' },
              _react2.default.createElement(
                _Anchor2.default,
                { path: '/about' },
                _react2.default.createElement(
                  _Label2.default,
                  { size: 'large' },
                  'About Us'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return MobileNavigationBar;
}(_react.Component);

MobileNavigationBar.PropTypes = {
  handleEvent: _propTypes2.default.func.isRequired
};

exports.default = MobileNavigationBar;