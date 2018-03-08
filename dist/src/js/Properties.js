'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertiesBase = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Header = require('grommet/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Split = require('grommet/components/Split');

var _Split2 = _interopRequireDefault(_Split);

var _Animate = require('grommet/components/Animate');

var _Animate2 = _interopRequireDefault(_Animate);

var _PropertySearch = require('./PropertySearch');

var _PropertySearch2 = _interopRequireDefault(_PropertySearch);

var _GoogleMapsWrapper = require('./components/GoogleMapsWrapper');

var _GoogleMapsWrapper2 = _interopRequireDefault(_GoogleMapsWrapper);

var _SearchBar = require('./components/SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _loadAWS = require('./HOCs/loadAWS');

var _loadAWS2 = _interopRequireDefault(_loadAWS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropertiesBase = exports.PropertiesBase = function (_Component) {
  _inherits(PropertiesBase, _Component);

  function PropertiesBase(props) {
    _classCallCheck(this, PropertiesBase);

    var _this = _possibleConstructorReturn(this, (PropertiesBase.__proto__ || Object.getPrototypeOf(PropertiesBase)).call(this, props));

    _this.state = {
      input: {},
      house: {},
      house_list: [],
      height: window.innerHeight,
      markers: _this.setMarkers(_this.props.json)
    };
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    return _this;
  }

  _createClass(PropertiesBase, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ house_list: this.props.json.houses });
      this.setState({ markers: this.setMarkers(this.props.json) });
    }

    // get size of window for map dimensions

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: 'updateWindowDimensions',
    value: function updateWindowDimensions() {
      this.setState({ height: window.innerHeight });
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch() {
      var event = document.getElementById('search').value;
      this.setState({ input: event });

      this.queryJSON(event);
    }
  }, {
    key: 'queryJSON',
    value: function queryJSON(event) {
      var _this2 = this;

      var result = [];

      this.props.json.houses.forEach(function (house) {
        if (event && house.number.includes(event) || house.street.toLowerCase().includes(event) || house.city.toLowerCase().includes(event) || house.zip.includes(event)) {
          if (_this2.state.house_list && _this2.state.house_list.length > 0) {
            result.push(house);
          } else if (_this2.state.house_list && !_this2.state.house_list.includes(house)) {
            result.push(house);
          }
        }
      });
      this.setState({ house_list: result });
      var obj = { houses: result };
      this.setState({ markers: this.setMarkers(obj) });
    }
  }, {
    key: 'setMarkers',
    value: function setMarkers(json) {
      var result = null;
      if (json) {
        result = json.houses.map(function (house) {
          return house.marker;
        });
      }

      result.forEach(function (marker) {
        marker.position.lat = parseFloat(marker.position.lat);
        marker.position.lng = parseFloat(marker.position.lng);
        marker.defaultAnimation = parseFloat(marker.defaultAnimation);
      });

      return result;
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _Split2.default,
        {
          fixed: true,
          separator: true
        },
        _react2.default.createElement(
          _Animate2.default,
          { enter: { "animation": "slide-right", "duration": 300, "delay": 0 },
            keep: true },
          _react2.default.createElement(_GoogleMapsWrapper2.default, {
            height: this.state.height,
            markers: this.state.markers,
            history: this.props.history,
            house_list: this.state.house_list
          })
        ),
        _react2.default.createElement(
          _Box2.default,
          null,
          _react2.default.createElement(
            _Header2.default,
            { fixed: true, basis: 'full', full: 'horizontal', justify: 'end', pad: 'small' },
            _react2.default.createElement(
              _Box2.default,
              { justify: 'end', pad: 'small', basis: 'medium', align: 'end' },
              _react2.default.createElement(_SearchBar2.default, {
                handleEvent: this.handleSearch
              })
            )
          ),
          _react2.default.createElement(
            _Box2.default,
            { direction: 'row', basis: 'full' },
            _react2.default.createElement(_PropertySearch2.default, {
              history: this.props.history,
              input: this.state.input,
              house_list: this.state.house_list
            })
          )
        )
      );
    }
  }]);

  return PropertiesBase;
}(_react.Component);

exports.default = (0, _loadAWS2.default)(PropertiesBase);