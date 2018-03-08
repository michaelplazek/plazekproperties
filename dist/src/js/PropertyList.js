'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Card = require('grommet/components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Layer = require('grommet/components/icons/base/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _Image = require('grommet/components/Image');

var _Image2 = _interopRequireDefault(_Image);

var _List = require('grommet/components/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('grommet/components/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Paragraph = require('grommet/components/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var storage = window.sessionStorage;

var PropertyList = function (_Component) {
  _inherits(PropertyList, _Component);

  function PropertyList(props) {
    _classCallCheck(this, PropertyList);

    return _possibleConstructorReturn(this, (PropertyList.__proto__ || Object.getPrototypeOf(PropertyList)).call(this, props));
  }

  _createClass(PropertyList, [{
    key: 'getCards',
    value: function getCards() {
      var _this2 = this;

      var result = this.props.houses.map(function (house) {
        return _react2.default.createElement(
          _ListItem2.default,
          { key: house.number + house.street, align: 'center', justify: 'center' },
          _react2.default.createElement(_Card2.default, {
            onClick: function onClick() {
              storage.setItem('house', JSON.stringify(house));
              _this2.props.history.push('/building');
            },
            margin: 'small',
            contentPad: 'small',
            description: _this2.getDescription(house),
            thumbnail: _react2.default.createElement(_Image2.default, { size: 'large', src: house.thumb }),
            label: _this2.getAddress(house),
            size: 'medium',
            link: _react2.default.createElement(_Anchor2.default, { path: '/building', animateIcon: false, icon: _react2.default.createElement(_Layer2.default, null), label: 'View Building',
              onClick: function onClick() {
                storage.setItem('house', JSON.stringify(house));
              }
            })
          })
        );
      });
      return result;
    }
  }, {
    key: 'getDescription',
    value: function getDescription(house) {
      var result = _react2.default.createElement(
        _Box2.default,
        { margin: 'small' },
        _react2.default.createElement(
          _List2.default,
          null,
          _react2.default.createElement(
            _ListItem2.default,
            { pad: 'none', margin: 'none' },
            _react2.default.createElement(
              _Paragraph2.default,
              { margin: 'none' },
              'Price: ',
              this.getStars(house.price)
            )
          ),
          _react2.default.createElement(
            _ListItem2.default,
            { pad: 'none', margin: 'none' },
            _react2.default.createElement(
              _Paragraph2.default,
              { margin: 'none' },
              'Type: ',
              house.facts.type
            )
          ),
          _react2.default.createElement(
            _ListItem2.default,
            { pad: 'none', margin: 'none' },
            _react2.default.createElement(
              _Paragraph2.default,
              { margin: 'none' },
              'Parking: ',
              house.facts.parking
            )
          )
        )
      );
      return result;
    }
  }, {
    key: 'getStars',
    value: function getStars(price) {
      if (price === "1") {
        return "$";
      } else if (price === "2") {
        return "$$";
      } else if (price === "3") {
        return "$$$";
      } else if (price === "4") {
        return "$$$$";
      } else if (price === "5") {
        return "$$$$$";
      } else {
        return null;
      }
    }
  }, {
    key: 'getAddress',
    value: function getAddress(house) {
      if (house) {
        return house.number + " " + house.street;
      }
    }
  }, {
    key: 'getList',
    value: function getList() {
      return _react2.default.createElement(
        _List2.default,
        { size: 'small' },
        this.getCards()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Box2.default,
        { margin: 'small' },
        this.getList()
      );
    }
  }]);

  return PropertyList;
}(_react.Component);

exports.default = PropertyList;