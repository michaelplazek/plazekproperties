'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Article = require('grommet/components/Article');

var _Article2 = _interopRequireDefault(_Article);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _PropertyList = require('./PropertyList');

var _PropertyList2 = _interopRequireDefault(_PropertyList);

var _lodash = require('lodash.has');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropertySearch = function (_Component) {
  _inherits(PropertySearch, _Component);

  function PropertySearch(props) {
    _classCallCheck(this, PropertySearch);

    var _this = _possibleConstructorReturn(this, (PropertySearch.__proto__ || Object.getPrototypeOf(PropertySearch)).call(this, props));

    _this.getHouses = _this.getHouses.bind(_this);
    return _this;
  }

  _createClass(PropertySearch, [{
    key: 'getHouses',
    value: function getHouses() {
      return _react2.default.createElement(
        _Box2.default,
        { basis: 'full' },
        _react2.default.createElement(_PropertyList2.default, { history: this.props.history, houses: this.props.house_list })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return this.getHouses();
    }
  }]);

  return PropertySearch;
}(_react.Component);

PropertySearch.PropTypes = {
  house_list: _propTypes2.default.array
};

exports.default = PropertySearch;