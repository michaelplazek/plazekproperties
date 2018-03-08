'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Form = require('grommet/components/Form');

var _Form2 = _interopRequireDefault(_Form);

var _FormField = require('grommet/components/FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _TextInput = require('grommet/components/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Heading = require('grommet/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailForm = function (_Component) {
  _inherits(EmailForm, _Component);

  function EmailForm(props) {
    _classCallCheck(this, EmailForm);

    return _possibleConstructorReturn(this, (EmailForm.__proto__ || Object.getPrototypeOf(EmailForm)).call(this, props));
  }

  _createClass(EmailForm, [{
    key: 'onSubmit',
    value: function onSubmit() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var message = document.getElementById('message').value;

      //TODO: set up AWS-SES to send mail
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Form2.default,
        { onSubmit: this.onSubmit },
        _react2.default.createElement(
          _Heading2.default,
          null,
          'Contact Us'
        ),
        _react2.default.createElement(
          _FormField2.default,
          { label: 'Name' },
          _react2.default.createElement(_TextInput2.default, { id: 'name' })
        ),
        _react2.default.createElement(
          _FormField2.default,
          { label: 'Email' },
          _react2.default.createElement(_TextInput2.default, { id: 'email' })
        ),
        _react2.default.createElement(
          _FormField2.default,
          { label: 'Phone' },
          _react2.default.createElement(_TextInput2.default, { id: 'phone' })
        ),
        _react2.default.createElement(
          _FormField2.default,
          { label: 'Message' },
          _react2.default.createElement('textarea', {
            id: 'message',
            name: 'message',
            rows: '10', cols: '50' })
        ),
        _react2.default.createElement(_Button2.default, {
          label: 'Submit',
          type: 'submit',
          primary: true,
          box: true,
          margin: 'medium'
        })
      );
    }
  }]);

  return EmailForm;
}(_react.Component);

exports.default = EmailForm;