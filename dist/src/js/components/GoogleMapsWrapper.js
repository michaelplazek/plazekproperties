'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactGoogleMaps = require('react-google-maps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var find = require('lodash.find');

var googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyCmatde5HvRYF3_ZaGuPYEh3iHTaSSe-Us";

var history = void 0;
var house_list = void 0;
var GoogleMaps = (0, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react2.default.createElement(
    _reactGoogleMaps.GoogleMap,
    {
      defaultZoom: 13,
      defaultCenter: { lat: 40.5, lng: -80.05 } },
    props.markers.map(function (marker, index) {
      return _react2.default.createElement(_reactGoogleMaps.Marker, _extends({
        key: index
      }, marker, {
        zIndex: 1,
        onClick: setProperty.bind(undefined, marker),
        onMouseOver: setLabel.bind(undefined, marker, props),
        onMouseOut: clearLabel.bind(undefined, marker, props)
      }));
    })
  );
});

function setProperty(marker) {

  var house = find(house_list, function (o) {
    return JSON.stringify(o.marker) === JSON.stringify(marker);
  });

  window.sessionStorage.setItem('house', JSON.stringify(house));
  history.push('/building');
}

function clearLabel(marker, props) {

  marker.label = "";
  props.onMarkerHover(marker.key);
  marker.zIndex = 1;
  // setTimeout(function(){ marker.label = ""; }, 1000);
  // setTimeout(function(){ props.onMarkerHover(marker.key); }, 250);
}

function setLabel(marker, props) {

  // hacky, but it works
  marker.label = marker.key;
  props.onMarkerHover(marker.key);
  marker.zIndex = 99;
}

var GoogleMapsWrapper = function (_Component) {
  _inherits(GoogleMapsWrapper, _Component);

  function GoogleMapsWrapper(props) {
    _classCallCheck(this, GoogleMapsWrapper);

    var _this = _possibleConstructorReturn(this, (GoogleMapsWrapper.__proto__ || Object.getPrototypeOf(GoogleMapsWrapper)).call(this, props));

    _this.state = { text: "" };

    _this.onMarkerHover = _this.onMarkerHover.bind(_this);
    return _this;
  }

  _createClass(GoogleMapsWrapper, [{
    key: 'onMarkerHover',
    value: function onMarkerHover(label) {
      this.setState({ text: label });
    }
  }, {
    key: 'render',
    value: function render() {
      history = this.props.history;
      house_list = this.props.house_list;

      return _react2.default.createElement(GoogleMaps, {
        containerElement: _react2.default.createElement('div', { style: { height: this.props.height, width: '100%' } }),
        mapElement: _react2.default.createElement('div', { style: { height: this.props.height, width: '100%' } }),
        markers: this.props.markers,
        label: this.state.text,
        onMarkerHover: this.onMarkerHover
      });
    }
  }]);

  return GoogleMapsWrapper;
}(_react.Component);

GoogleMapsWrapper.PropTypes = {
  height: _propTypes2.default.number,
  markers: _propTypes2.default.array
};

exports.default = GoogleMapsWrapper;