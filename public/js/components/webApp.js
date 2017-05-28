webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(97);

var _Header2 = _interopRequireDefault(_Header);

var _ContentArea = __webpack_require__(96);

var _ContentArea2 = _interopRequireDefault(_ContentArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: 'Joe',
      age: 29
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(_ContentArea2.default, null)
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('webAppRoot');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentArea = function (_Component) {
  _inherits(ContentArea, _Component);

  function ContentArea() {
    _classCallCheck(this, ContentArea);

    var _this = _possibleConstructorReturn(this, (ContentArea.__proto__ || Object.getPrototypeOf(ContentArea)).call(this));

    _this.state = {
      name: 'Joe',
      age: 29
    };
    return _this;
  }

  _createClass(ContentArea, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'content-area' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-6 model' },
          _react2.default.createElement('img', { src: '/img/bape2.png' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-6 info' },
          _react2.default.createElement(
            'div',
            { className: 'insider' },
            _react2.default.createElement(
              'h5',
              null,
              'Mens'
            ),
            _react2.default.createElement(
              'h1',
              null,
              this.state.name,
              ' ',
              this.state.age,
              'JACKET DRIPPING SAUCE'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Franzen williamsburg af, cornhole semiotics hammock meh raw denim blog cliche live-edge pickled. Four loko pok pok fingerstache truffaut. Mlkshk mumblecore pork belly bicycle rights. Pok pok cred cardigan, master cleanse migas pinterest umami ugh chia. Raw denim wayfarers shabby chic seitan, +1 dreamcatcher health goth paleo typewriter enamel pin copper mug. Neutra migas jianbing, tofu hammock vice fashion axe succulents deep v waistcoat activated charcoal helvetica try-hard microdosing. Raclette vape pok pok bitters plaid, kickstarter banjo bespoke.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'size' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                'size'
              ),
              _react2.default.createElement(
                'ul',
                { className: 'sizes' },
                _react2.default.createElement(
                  'li',
                  { className: 'circle' },
                  'S'
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'circle' },
                  'M'
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'circle' },
                  'L'
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'semi-circle' },
                  'XL'
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'semi-circle' },
                  'XXL'
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'semi-circle' },
                  'CUSTOM'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'action-btns' },
              _react2.default.createElement(
                'a',
                { className: 'col-md-6 red-hollow-btn' },
                _react2.default.createElement(
                  'span',
                  { className: ' price' },
                  '$232'
                ),
                'add to cart'
              ),
              _react2.default.createElement(
                'a',
                { className: 'col-md-6 lightgrey-btn' },
                'find a store'
              )
            )
          )
        )
      );
    }
  }]);

  return ContentArea;
}(_react.Component);

exports.default = ContentArea;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Joe',
      age: 29
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { id: 'header' },
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'Bape'
        ),
        _react2.default.createElement(
          'div',
          { className: 'menu' },
          _react2.default.createElement(
            'nav',
            null,
            _react2.default.createElement(
              'a',
              { href: '/lookbook.html' },
              'Home'
            ),
            _react2.default.createElement(
              'a',
              { href: '/lookbook.html' },
              'Lookbook'
            ),
            _react2.default.createElement(
              'a',
              { href: '/lookbook.html' },
              'Mens'
            ),
            _react2.default.createElement(
              'a',
              { href: '/lookbook.html' },
              'Womens'
            ),
            _react2.default.createElement(
              'a',
              { href: '/lookbook.html' },
              'Blog'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ })

},[100]);