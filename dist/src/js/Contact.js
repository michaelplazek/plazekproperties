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

var _MailOption = require('grommet/components/icons/base/MailOption');

var _MailOption2 = _interopRequireDefault(_MailOption);

var _Contact = require('grommet/components/icons/base/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _MapLocation = require('grommet/components/icons/base/MapLocation');

var _MapLocation2 = _interopRequireDefault(_MapLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
  _inherits(Contact, _Component);

  function Contact(props) {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));
  }

  _createClass(Contact, [{
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
                _Label2.default,
                { margin: 'none' },
                _react2.default.createElement(_MailOption2.default, null)
              ),
              _react2.default.createElement(
                _Label2.default,
                { margin: 'none' },
                '\xA0\xA0luisa.plazek@plazekproperties.com'
              )
            ),
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                _Label2.default,
                { margin: 'none' },
                _react2.default.createElement(_Contact2.default, null)
              ),
              _react2.default.createElement(
                _Label2.default,
                { margin: 'none' },
                '\xA0\xA0412-860-3518'
              )
            ),
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                _Label2.default,
                { margin: 'none' },
                _react2.default.createElement(_MapLocation2.default, null)
              ),
              _react2.default.createElement(
                _Label2.default,
                { margin: 'none' },
                '\xA0\xA03645 Perrysville Ave Pittsburgh, PA 15214'
              )
            )
          )
        )
      );
    }
  }]);

  return Contact;
}(_react.Component);

exports.default = Contact;