webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(32);

var _redux = __webpack_require__(21);

var _reactRouterDom = __webpack_require__(233);

var _index = __webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestApp = function (_Component) {
  _inherits(TestApp, _Component);

  function TestApp() {
    _classCallCheck(this, TestApp);

    var _this = _possibleConstructorReturn(this, (TestApp.__proto__ || Object.getPrototypeOf(TestApp)).call(this));

    _this.state = {
      name: 'Joe',
      age: 29
    };
    return _this;
  }

  _createClass(TestApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' },
                'Home'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/about' },
                'About'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/topics' },
                'Topics'
              )
            )
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Home }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: About }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/topics', component: Topics })
        )
      );
    }
  }]);

  return TestApp;
}(_react.Component);

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Home'
    )
  );
};

var About = function About() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'About'
    )
  );
};

var Topic = function Topic(_ref) {
  var match = _ref.match;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      match.params.topicId
    )
  );
};

var Topics = function Topics(_ref2) {
  var match = _ref2.match;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Topics'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: match.url + '/rendering' },
          'Rendering with React'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: match.url + '/components' },
          'Components'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: match.url + '/props-v-state' },
          'Props v. State'
        )
      )
    ),
    _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/:topicId', component: Topic }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: match.url, render: function render() {
        return _react2.default.createElement(
          'h3',
          null,
          'Please select a topic.'
        );
      } })
  );
};

function mapStateToProps(state) {
  return { globalState: state.globalState };
}
function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    startSteps: _index.startSteps
  }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TestApp);

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(21);

var _globalState = __webpack_require__(113);

var _globalState2 = _interopRequireDefault(_globalState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  globalState: _globalState2.default
});

exports.default = rootReducer;

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _index.START_STEPS:
      var choselenstype = Object.assign({}, state, { lenstype: action.payload });
      console.log('state:' + action.type + choselenstype);
      console.log(choselenstype);
      return choselenstype;
  }
  console.log(state);
  return state;
};

var _index = __webpack_require__(66);

var initialState = {
  step: 1,
  currentStep: 1,
  lenstype: '',
  price: '',
  wearglasses: ''
}; // import update from 'react-addons-update'

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(40);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(32);

var _redux = __webpack_require__(21);

var _TestApp = __webpack_require__(110);

var _TestApp2 = _interopRequireDefault(_TestApp);

var _reducers = __webpack_require__(111);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Router, browserHistory } from 'react-router'
var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.compose)((0, _redux.applyMiddleware)(), window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;
}));

// const createStoreWithMiddleware = applyMiddleware()(createStore)
_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_TestApp2.default, null)
), document.getElementById('webAppRoot'));

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FirstAction = FirstAction;
var FIRST_ACTION = exports.FIRST_ACTION = 'FIRST_ACTION';

function FirstAction(item) {
  return {
    type: FIRST_ACTION,
    payload: item
  };
}

/***/ })

},[114]);