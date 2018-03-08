'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tiles = require('grommet/components/Tiles');

var _Tiles2 = _interopRequireDefault(_Tiles);

var _Tile = require('grommet/components/Tile');

var _Tile2 = _interopRequireDefault(_Tile);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Label = require('grommet/components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _CoatCheck = require('grommet/components/icons/base/CoatCheck');

var _CoatCheck2 = _interopRequireDefault(_CoatCheck);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnitIconBar = function (_Component) {
  _inherits(UnitIconBar, _Component);

  function UnitIconBar(props) {
    _classCallCheck(this, UnitIconBar);

    return _possibleConstructorReturn(this, (UnitIconBar.__proto__ || Object.getPrototypeOf(UnitIconBar)).call(this, props));
  }

  _createClass(UnitIconBar, [{
    key: 'getIcons',
    value: function getIcons(unit) {
      var arr = [];
      var result = null;

      result = _react2.default.createElement(
        _Tile2.default,
        { key: 'beds' },
        _react2.default.createElement(
          _Box2.default,
          { justify: 'center', align: 'center' },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'bed', size: '2x' }),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'Beds: ',
            unit.beds
          )
        )
      );
      arr.push(result);

      result = _react2.default.createElement(
        _Tile2.default,
        { key: 'baths' },
        _react2.default.createElement(
          _Box2.default,
          { justify: 'center', align: 'center' },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'bath', size: '2x' }),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'Baths: ',
            unit.baths
          )
        )
      );
      arr.push(result);

      result = _react2.default.createElement(
        _Tile2.default,
        { key: 'parking' },
        _react2.default.createElement(
          _Box2.default,
          { justify: 'center', align: 'center' },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'car', size: '2x' }),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'Parking: ',
            unit.parking
          )
        )
      );
      arr.push(result);

      if (unit.dishwasher === 'yes') {
        result = _react2.default.createElement(
          _Tile2.default,
          { key: 'dishwasher' },
          _react2.default.createElement(
            _Box2.default,
            { justify: 'center', align: 'center' },
            _react2.default.createElement(_reactFontawesome2.default, { name: 'window-maximize', size: '2x' }),
            _react2.default.createElement(
              _Label2.default,
              { margin: 'small' },
              'Dishwasher'
            )
          )
        );
        arr.push(result);
      }

      if (unit.washer === 'yes') {
        result = _react2.default.createElement(
          _Tile2.default,
          { key: 'washer' },
          _react2.default.createElement(
            _Box2.default,
            { justify: 'center', align: 'center' },
            _react2.default.createElement(_CoatCheck2.default, { size: 'medium' }),
            _react2.default.createElement(
              _Label2.default,
              { margin: 'small' },
              'Laundry'
            )
          )
        );
        arr.push(result);
      }

      return arr;
    }
  }, {
    key: 'render',
    value: function render() {

      var unit = this.props.unit;

      return _react2.default.createElement(
        _Tiles2.default,
        {
          align: 'center',
          justify: 'center',
          pad: 'medium',
          fill: true, flush: false,
          size: 'small'
        },
        this.getIcons(unit)
      );
    }
  }]);

  return UnitIconBar;
}(_react.Component);

exports.default = UnitIconBar;