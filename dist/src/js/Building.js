'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactImageLightbox = require('react-image-lightbox');

var _reactImageLightbox2 = _interopRequireDefault(_reactImageLightbox);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Image = require('grommet/components/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Label = require('grommet/components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _Headline = require('grommet/components/Headline');

var _Headline2 = _interopRequireDefault(_Headline);

var _Animate = require('grommet/components/Animate');

var _Animate2 = _interopRequireDefault(_Animate);

var _Hero = require('grommet/components/Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _Heading = require('grommet/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _List = require('grommet/components/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('grommet/components/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Paragraph = require('grommet/components/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Carousel = require('grommet/components/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Columns = require('grommet/components/Columns');

var _Columns2 = _interopRequireDefault(_Columns);

var _Tiles = require('grommet/components/Tiles');

var _Tiles2 = _interopRequireDefault(_Tiles);

var _Tile = require('grommet/components/Tile');

var _Tile2 = _interopRequireDefault(_Tile);

var _Card = require('grommet/components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Layer = require('grommet/components/icons/base/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _BuildingIconBar = require('./components/BuildingIconBar');

var _BuildingIconBar2 = _interopRequireDefault(_BuildingIconBar);

var _LinkPrevious = require('grommet/components/icons/base/LinkPrevious');

var _LinkPrevious2 = _interopRequireDefault(_LinkPrevious);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var storage = window.sessionStorage;

var Body = function (_Component) {
  _inherits(Body, _Component);

  function Body(props) {
    _classCallCheck(this, Body);

    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));

    _this.state = {
      toggle: false,
      photoIndex: 0
    };

    _this.setToggle = _this.setToggle.bind(_this);
    _this.getHouse = _this.getHouse.bind(_this);
    _this.getFeel = _this.getFeel.bind(_this);
    return _this;
  }

  _createClass(Body, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactDom2.default.findDOMNode(this).scrollIntoView();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ toggle: false });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({ toggle: false });
    }
  }, {
    key: 'getHouse',
    value: function getHouse() {
      var _this2 = this;

      var house = JSON.parse(storage.getItem('house'));

      var _state = this.state,
          toggle = _state.toggle,
          photoIndex = _state.photoIndex;

      var images = house.images;

      if (house) {
        var section = _react2.default.createElement(
          _Box2.default,
          { basis: 'full', justify: 'center', direction: 'column' },
          _react2.default.createElement(
            _Box2.default,
            {
              full: 'horizontal',
              size: { height: 'large' },
              texture: house.bg,
              align: 'start',
              justify: 'between',
              direction: 'column'
            },
            _react2.default.createElement(
              _Box2.default,
              {
                align: 'start',
                pad: 'small' },
              _react2.default.createElement(_Button2.default, {
                label: 'Back',
                icon: _react2.default.createElement(_LinkPrevious2.default, null),
                primary: true,
                path: '/properties' })
            ),
            _react2.default.createElement(
              _Box2.default,
              {
                justify: 'between',
                full: 'horizontal',
                align: 'end',
                direction: 'row' },
              _react2.default.createElement(_Button2.default, {
                primary: true,
                box: true,
                label: 'View Photos',
                type: 'button',
                plain: false,
                onClick: this.setToggle,
                margin: 'small'
              }),
              _react2.default.createElement(
                _Box2.default,
                { margin: { horizontal: "medium" } },
                _react2.default.createElement(
                  _Heading2.default,
                  {
                    className: 'building-header',
                    align: 'end'
                  },
                  house.number,
                  ' ',
                  house.street
                )
              )
            )
          ),
          _react2.default.createElement(
            _Box2.default,
            { full: 'horizontal' },
            _react2.default.createElement(
              _List2.default,
              null,
              _react2.default.createElement(
                _ListItem2.default,
                null,
                _react2.default.createElement(_BuildingIconBar2.default, { house: house })
              ),
              _react2.default.createElement(
                _ListItem2.default,
                { margin: { horizontal: "medium" } },
                this.getFeel(house)
              ),
              _react2.default.createElement(
                _ListItem2.default,
                { margin: { horizontal: "medium" } },
                this.getUnits(house)
              )
            )
          ),
          toggle && _react2.default.createElement(_reactImageLightbox2.default, {
            mainSrc: images[photoIndex],
            nextSrc: images[(photoIndex + 1) % images.length],
            prevSrc: images[(photoIndex + images.length - 1) % images.length],

            onCloseRequest: function onCloseRequest() {
              return _this2.setState({ toggle: false });
            },
            onMovePrevRequest: function onMovePrevRequest() {
              return _this2.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              });
            },
            onMoveNextRequest: function onMoveNextRequest() {
              return _this2.setState({
                photoIndex: (photoIndex + 1) % images.length
              });
            }
          })
        );

        return section;
      }
      return null;
    }
  }, {
    key: 'setToggle',
    value: function setToggle() {
      if (this.state.toggle) {
        this.setState({ toggle: false });
      } else {
        this.setState({ toggle: true });
      }
    }
  }, {
    key: 'getUnits',
    value: function getUnits(house) {
      var _this3 = this;

      var result = null;
      var tile = "medium";
      if (house.units.length > 0) {
        if (house.units.length <= 2) {
          tile = "large";
        }
        result = house.units.map(function (unit, index) {
          return _react2.default.createElement(
            _Tile2.default,
            { fill: true, key: index, flex: true },
            _react2.default.createElement(_Card2.default, { thumbnail: _react2.default.createElement(_Image2.default, { size: tile, src: unit.thumb }),
              onClick: function onClick() {
                storage.setItem('unit', JSON.stringify(unit));
                _this3.props.history.push('/unit');
              },
              heading: _this3.getUnitHeading(unit),
              textSize: 'small',
              size: tile,
              label: _this3.getRooms(unit),
              contentPad: 'medium',
              margin: { horizontal: "medium" },
              link: _react2.default.createElement(_Anchor2.default, { path: '/unit', animateIcon: false, icon: _react2.default.createElement(_Layer2.default, null), label: 'View Unit',
                onClick: function onClick() {
                  storage.setItem('unit', JSON.stringify(unit));
                }
              })
            })
          );
        });
      }
      return _react2.default.createElement(
        _Box2.default,
        { basis: 'full' },
        _react2.default.createElement(
          _Heading2.default,
          null,
          'The Units'
        ),
        _react2.default.createElement(
          _Box2.default,
          { align: 'center', justify: 'center', margin: { horizontal: "medium" } },
          _react2.default.createElement(
            _Tiles2.default,
            {
              full: 'horizontal',
              basis: 'full',
              align: 'center',
              justify: 'center',
              pad: { vertical: "small" },
              fill: true, flush: false,
              size: 'large',
              margin: { vertical: "small" }
            },
            result
          )
        )
      );
    }
  }, {
    key: 'getRooms',
    value: function getRooms(unit) {
      return unit.beds + " bedrooms";
    }
  }, {
    key: 'getUnitHeading',
    value: function getUnitHeading(unit) {
      return unit.title;
    }
  }, {
    key: 'getFeel',
    value: function getFeel(house) {
      var result = null;
      if (house.feel) {
        result = _react2.default.createElement(
          _Box2.default,
          null,
          _react2.default.createElement(
            _Heading2.default,
            null,
            'The Space'
          ),
          _react2.default.createElement(
            _Box2.default,
            { basis: 'full', justify: 'center', align: 'center', pad: 'small' },
            _react2.default.createElement(
              _Paragraph2.default,
              { size: 'large' },
              house.feel
            )
          )
        );
      }
      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Box2.default,
        { basis: 'full', justify: 'center' },
        this.getHouse()
      );
    }
  }]);

  return Body;
}(_react.Component);

exports.default = Body;