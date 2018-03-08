'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MobileNavigationBar = require('./components/MobileNavigationBar');

var _MobileNavigationBar2 = _interopRequireDefault(_MobileNavigationBar);

var _App = require('grommet/components/App');

var _App2 = _interopRequireDefault(_App);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Split = require('grommet/components/Split');

var _Split2 = _interopRequireDefault(_Split);

var _Sidebar = require('grommet/components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Menu = require('grommet/components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Responsive = require('grommet/utils/Responsive');

var _Responsive2 = _interopRequireDefault(_Responsive);

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { size: 'large' };

    _this.setSize = _this.setSize.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._responsive = _Responsive2.default.start(this.setSize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._responsive.stop();
    }
  }, {
    key: 'setSize',
    value: function setSize(mobile) {
      if (mobile) this.setState({ size: 'small' });else this.setState({ size: 'large' });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;


      var childrenWithProps = _react2.default.Children.map(this.props.children, function (child) {
        return _react2.default.cloneElement(child, { history: _this2.props.history });
      });

      return _react2.default.createElement(
        _reactResponsive2.default,
        { query: '(max-device-width: 1224px)' },
        function (matches) {
          if (!matches) {
            return _react2.default.createElement(
              _App2.default,
              { centered: false },
              _react2.default.createElement(
                _Split2.default,
                { priority: 'right', flex: 'right', fixed: true, separator: true },
                _react2.default.createElement(
                  _Sidebar2.default,
                  { colorIndex: 'neutral-1', size: 'small' },
                  _react2.default.createElement(
                    _Menu2.default,
                    { size: 'large', justify: 'center', align: 'center', basis: 'full', pad: { vertical: "large" } },
                    _react2.default.createElement(_Anchor2.default, { path: '/', label: 'Home' }),
                    _react2.default.createElement(_Anchor2.default, { path: '/properties', label: 'Properties' }),
                    _react2.default.createElement(_Anchor2.default, { path: '/contact', label: 'Contact' }),
                    _react2.default.createElement(_Anchor2.default, { path: '/about', label: 'About Us' })
                  )
                ),
                childrenWithProps
              )
            );
          } else {
            return _react2.default.createElement(
              _App2.default,
              { centered: false },
              _react2.default.createElement(
                _Box2.default,
                { full: true },
                _react2.default.createElement(_MobileNavigationBar2.default, null),
                _this2.props.children
              )
            );
          }
        }
      );
    }
  }]);

  return App;
}(_react.Component);

// const App = (props) => (
//
//   <GrommetApp centered={false}>
//     <Split priority="right" flex="right" fixed={true} separator={true} onResponsive={}>
//       <Sidebar colorIndex="neutral-1" size="small">
//         <Menu size="large" justify="center" align="center" basis="full" pad={{vertical:"large"}}>
//           <Anchor path="/" label="Home"/>
//           <Anchor path="/properties" label="Properties"/>
//           <Anchor path="/contact" label="Contact"/>
//           <Anchor path="/about" label="About Us"/>
//         </Menu>
//       </Sidebar>
//
//       {props.children}
//
//     </Split>
//   </GrommetApp>
// );

exports.default = App;