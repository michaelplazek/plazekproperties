'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Spinning = require('grommet/components/icons/Spinning');

var _Spinning2 = _interopRequireDefault(_Spinning);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AWS = require('aws-sdk');

function loadAWS(WrappedComponent) {

  return function (_Component) {
    _inherits(Container, _Component);

    function Container(props) {
      _classCallCheck(this, Container);

      var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

      _this.state = {
        json: null
      };

      _this.getJSON = _this.getJSON.bind(_this);
      return _this;
    }

    _createClass(Container, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.getJSON();
      }
    }, {
      key: 'getJSON',
      value: function getJSON() {
        AWS.config.update({
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: "us-east-2"
        });
        var s3 = new AWS.S3();
        var self = this;

        var result = null;
        var params = {
          Bucket: "plazek-properties-info",
          Key: "units.json"
        };

        s3.getObject(params, function (err, data) {
          if (err) console.log(err, err.stack);else {
            result = JSON.parse(data.Body);
            self.setState({ json: result });
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var history = this.props.history;


        var result = null;
        if (this.state.json) {
          result = _react2.default.createElement(WrappedComponent, { history: history, json: this.state.json });
        } else {
          result = _react2.default.createElement(
            _Box2.default,
            { full: 'vertical', basis: 'full', justify: 'center', align: 'center' },
            _react2.default.createElement(_Spinning2.default, { size: 'large' })
          );
        }
        return result;
      }
    }]);

    return Container;
  }(_react.Component);
}

exports.default = loadAWS;