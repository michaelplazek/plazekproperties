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

var _Heading = require('grommet/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BuildingIconBar = function (_Component) {
  _inherits(BuildingIconBar, _Component);

  function BuildingIconBar(props) {
    _classCallCheck(this, BuildingIconBar);

    return _possibleConstructorReturn(this, (BuildingIconBar.__proto__ || Object.getPrototypeOf(BuildingIconBar)).call(this, props));
  }

  _createClass(BuildingIconBar, [{
    key: 'getIcons',
    value: function getIcons(house) {
      var arr = [];
      var result = null;

      result = _react2.default.createElement(
        _Tile2.default,
        { key: 'type' },
        _react2.default.createElement(
          _Box2.default,
          { justify: 'center', align: 'center' },
          this.getSize(house)
        )
      );
      arr.push(result);

      result = _react2.default.createElement(
        _Tile2.default,
        { key: 'pets' },
        _react2.default.createElement(
          _Box2.default,
          { justify: 'center', align: 'center' },
          this.getPets(house)
        )
      );
      arr.push(result);

      result = _react2.default.createElement(
        _Tile2.default,
        { key: 'heat' },
        _react2.default.createElement(
          _Box2.default,
          { justify: 'center', align: 'center' },
          this.getHeat(house)
        )
      );
      arr.push(result);

      result = _react2.default.createElement(
        _Tile2.default,
        { key: 'ac' },
        _react2.default.createElement(
          _Box2.default,
          { justify: 'center', align: 'center' },
          this.getAC(house)
        )
      );
      arr.push(result);

      result = _react2.default.createElement(
        _Tile2.default,
        { key: 'parking' },
        _react2.default.createElement(
          _Box2.default,
          { justify: 'center', align: 'center' },
          this.getParking(house)
        )
      );
      arr.push(result);

      return arr;
    }
  }, {
    key: 'getSize',
    value: function getSize(house) {
      var result = null;
      if (house.facts.type === 'single') {
        result = _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(
            _Heading2.default,
            { margin: 'none' },
            '1'
          ),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'Single'
          )
        );
      } else if (house.facts.type === 'duplex') {
        result = _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(
            _Heading2.default,
            { margin: 'none' },
            '2'
          ),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'Duplex'
          )
        );
      } else if (house.facts.type === 'triplex') {
        result = _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(
            _Heading2.default,
            { tag: 'h2', margin: 'none' },
            '3'
          ),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'Triplex'
          )
        );
      } else {
        result = _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(
            _Heading2.default,
            { tag: 'h2', margin: 'none' },
            '5'
          ),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'Multiple'
          )
        );
      }

      return result;
    }
  }, {
    key: 'getPets',
    value: function getPets(house) {
      var result = null;
      if (house.facts.pets === 'yes') {
        result = _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'paw', size: '2x' }),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'Pets allowed for additional fee'
          )
        );
      }

      return result;
    }
  }, {
    key: 'getHeat',
    value: function getHeat(house) {
      var result = null;
      if (house.facts.heat === 'central') {
        result = _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'fire', size: '2x' }),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'Separate Central Heat'
          )
        );
      }

      return result;
    }
  }, {
    key: 'getAC',
    value: function getAC(house) {
      var result = null;
      if (house.facts.ac === 'central') {
        result = _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'snowflake-o', size: '2x' }),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'Separate Central A/C'
          )
        );
      } else if (house.facts.ac === 'window') {
        result = _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'snowflake-o', size: '2x' }),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'Window Unit A/C'
          )
        );
      } else if (house.facts.ac === 'wall') {
        result = _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'snowflake-o', size: '2x' }),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'Wall Unit A/C'
          )
        );
      }

      return result;
    }
  }, {
    key: 'getParking',
    value: function getParking(house) {
      var result = null;
      if (house.facts.parking === 'off-street') {
        result = _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'car', size: '2x' }),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'Off-street Parking'
          )
        );
      } else if (house.facts.parking === 'on-street') {
        result = _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'car', size: '2x' }),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'On-street Parking'
          )
        );
      } else {
        result = _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'car', size: '2x' }),
          _react2.default.createElement(
            _Label2.default,
            { margin: 'small' },
            'Garage Parking'
          )
        );
      }

      return result;
    }
  }, {
    key: 'render',
    value: function render() {

      var house = this.props.house;

      return _react2.default.createElement(
        _Tiles2.default,
        {
          align: 'center',
          justify: 'center',
          pad: 'medium',
          fill: true, flush: false,
          size: 'small'
        },
        this.getIcons(house)
      );
    }
  }]);

  return BuildingIconBar;
}(_react.Component);

exports.default = BuildingIconBar;