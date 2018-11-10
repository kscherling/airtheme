'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var type = require('@airtheme/type');
var React = require('react');
var React__default = _interopDefault(React);
var reactRedux = require('react-redux');
var styledComponents = require('styled-components');
var core = require('@airtheme/core');

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;

  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}

var enhancers = [];
var middleware = [];

if (process.env.NODE_ENV === 'development') {
  var reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (reduxDevTools) {
    enhancers.push(reduxDevTools());
  }
}

var composedMiddleware = compose.apply(void 0, [applyMiddleware.apply(void 0, middleware)].concat(enhancers));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var UPDATE_THEME = 'UPDATE_THEME';

var ADD_SWATCH = 'ADD_SWATCH';
var REMOVE_SWATCH = 'REMOVE_SWATCH';
var UPDATE_SWATCH = 'UPDATE_SWATCH';
var UPDATE_SWATCH_VIEW = 'UPDATE_SWATCH_VIEW';

var eq = function eq(a, b) {
  return a === b;
};
var not = function not(a) {
  return function (b) {
    return a !== b;
  };
};

var downcase = function downcase(str) {
  return str && str.toLowerCase();
};

var addUnit = function addUnit(state, _ref) {
  var name = _ref.name,
      value = _ref.value,
      ordinal = _ref.ordinal;
  return _objectSpread$1({}, state, {
    content: _toConsumableArray(state.content).concat([type.unit[downcase(state.unit)]({
      name: name,
      ordinal: ordinal,
      value: value
    })])
  });
};
var removeUnit = function removeUnit(state, _ref2) {
  var original = _ref2.original;
  return _objectSpread$1({}, state, {
    content: state.content.filter(not(original))
  });
};
var updateUnit = function updateUnit(state, _ref3) {
  var original = _ref3.original,
      updated = _ref3.updated;
  return _objectSpread$1({}, state, {
    content: state.content.map(function (unit) {
      return eq(unit, original) ? _objectSpread$1({}, unit, updated) : unit;
    })
  });
};
var updateBaseUnit = function updateBaseUnit(state, _ref4) {
  var updated = _ref4.updated;
  return _objectSpread$1({}, state, {
    content: _objectSpread$1({}, state.content, updated)
  });
};

var defaultSwatch = type.attribute.swatch();

var swatch = function swatch() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSwatch;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.swatch || {};

    case UPDATE_SWATCH_VIEW:
      return _objectSpread$1({}, state, {
        view: action.view
      });

    case ADD_SWATCH:
      return addUnit(state, action);

    case REMOVE_SWATCH:
      return removeUnit(state, action);

    case UPDATE_SWATCH:
      return updateUnit(state, action);

    default:
      return state;
  }
};

var ADD_FONT_FACE = 'ADD_FONT_FACE';
var REMOVE_FONT_FACE = 'REMOVE_FONT_FACE';
var UPDATE_FONT_FACE = 'UPDATE_FONT_FACE';

var defaultFontFace = type.attribute.fontFace();

var fontFace = function fontFace() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFontFace;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.fontFace || defaultFontFace;

    case ADD_FONT_FACE:
      return addUnit(state, action);

    case REMOVE_FONT_FACE:
      return removeUnit(state, action);

    case UPDATE_FONT_FACE:
      return updateUnit(state, action);

    default:
      return state;
  }
};

var ADD_FONT_SIZE = 'ADD_FONT_SIZE';
var REMOVE_FONT_SIZE = 'REMOVE_FONT_SIZE';
var UPDATE_FONT_SIZE = 'UPDATE_FONT_SIZE';
var UPDATE_FONT_SIZE_VIEW = 'UPDATE_FONT_SIZE_VIEW';

var defaultFontSize = type.attribute.fontSize();

var fontSize = function fontSize() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFontSize;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontSize;

    case UPDATE_FONT_SIZE_VIEW:
      return _objectSpread$1({}, state, {
        view: action.view
      });

    case ADD_FONT_SIZE:
      return addUnit(state, action);

    case REMOVE_FONT_SIZE:
      return removeUnit(state, action);

    case UPDATE_FONT_SIZE:
      return updateUnit(state, action);

    default:
      return state;
  }
};

var ADD_FONT_FAMILY = 'ADD_FONT_FAMILY';
var REMOVE_FONT_FAMILY = 'REMOVE_FONT_FAMILY';
var UPDATE_FONT_FAMILY = 'UPDATE_FONT_FAMILY';
var UPDATE_FONT_FAMILY_VIEW = 'UPDATE_FONT_FAMILY_VIEW';

var defaultFontFamily = type.attribute.fontFamily();

var fontFamily = function fontFamily() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFontFamily;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontFamily;

    case UPDATE_FONT_FAMILY_VIEW:
      return _objectSpread$1({}, state, {
        view: action.view
      });

    case ADD_FONT_FAMILY:
      return addUnit(state, action);

    case REMOVE_FONT_FAMILY:
      return removeUnit(state, action);

    case UPDATE_FONT_FAMILY:
      return updateUnit(state, action);

    default:
      return state;
  }
};

var ADD_FONT_WEIGHT = 'ADD_FONT_WEIGHT';
var REMOVE_FONT_WEIGHT = 'REMOVE_FONT_WEIGHT';
var UPDATE_FONT_WEIGHT = 'UPDATE_FONT_WEIGHT';

var defaultFontWeight = type.attribute.fontWeight();

var fontWeight = function fontWeight() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFontWeight;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontWeight;

    case ADD_FONT_WEIGHT:
      return addUnit(state, action);

    case REMOVE_FONT_WEIGHT:
      return removeUnit(state, action);

    case UPDATE_FONT_WEIGHT:
      return updateUnit(state, action);

    default:
      return state;
  }
};

var ADD_COLOR = 'ADD_COLOR';
var REMOVE_COLOR = 'REMOVE_COLOR';
var UPDATE_COLOR = 'UPDATE_COLOR';
var UPDATE_COLOR_VIEW = 'UPDATE_COLOR_VIEW';

var defaultColor = type.attribute.color();

var color = function color() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultColor;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.color || {};

    case UPDATE_COLOR_VIEW:
      return _objectSpread$1({}, state, {
        view: action.view
      });

    case ADD_COLOR:
      return addUnit(state, action);

    case REMOVE_COLOR:
      return removeUnit(state, action);

    case UPDATE_COLOR:
      return updateUnit(state, action);

    default:
      return state;
  }
};

var ADD_SPACING = 'ADD_SPACING';
var REMOVE_SPACING = 'REMOVE_SPACING';
var UPDATE_SPACING = 'UPDATE_SPACING';
var UPDATE_SPACING_VIEW = 'UPDATE_SPACING_VIEW';

var defaultSpacing = type.attribute.spacing();

var spacing = function spacing() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSpacing;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.spacing;

    case UPDATE_SPACING_VIEW:
      return _objectSpread$1({}, state, {
        view: action.view
      });

    case ADD_SPACING:
      return addUnit(state, action);

    case REMOVE_SPACING:
      return removeUnit(state, action);

    case UPDATE_SPACING:
      return updateUnit(state, action);

    default:
      return state;
  }
};

var defaultSchemaname = type.settingSchema.__schemaname;

var __schemaname = function __schemaname() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSchemaname;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.__schemaname || defaultSchemaname;

    default:
      return state;
  }
};

var defaultTypename = type.settingSchema.__typename;

var __typename = function __typename() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultTypename;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.__typename || defaultTypename;

    default:
      return state;
  }
};

var setting = combineReducers({
  __schemaname: __schemaname,
  __typename: __typename,
  color: color,
  fontFamily: fontFamily,
  fontSize: fontSize,
  fontWeight: fontWeight,
  spacing: spacing
});

var UPDATE_BASE_FONT_SIZE = 'UPDATE_BASE_FONT_SIZE';

var defaultBaseFontSize = type.attribute.baseFontSize();

var baseFontSize = function baseFontSize() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBaseFontSize;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.base.baseFontSize || defaultBaseFontSize;

    case UPDATE_BASE_FONT_SIZE:
      return updateBaseUnit(state, action);

    default:
      return state;
  }
};

var UPDATE_BASE_LINE_HEIGHT_VIEW = 'UPDATE_BASE_LINE_HEIGHT_VIEW';
var UPDATE_BASE_LINE_HEIGHT = 'UPDATE_BASE_LINE_HEIGHT';

var defaultBaseLineHeight = type.attribute.baseLineHeight();

var baseLineHeight = function baseLineHeight() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBaseLineHeight;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.base.baseLineHeight || defaultBaseLineHeight;

    case UPDATE_BASE_LINE_HEIGHT_VIEW:
      return _objectSpread$1({}, state, {
        view: action.view
      });

    case UPDATE_BASE_LINE_HEIGHT:
      return updateBaseUnit(state, action);

    default:
      return state;
  }
};

var UPDATE_BASE_SPACING = 'UPDATE_BASE_SPACING';

var defaultFontSize$1 = type.attribute.baseSpacing();

var baseFontSize$1 = function baseFontSize() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFontSize$1;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.base.baseSpacing || defaultFontSize$1;

    case UPDATE_BASE_SPACING:
      return updateBaseUnit(state, action);

    default:
      return state;
  }
};

var __schemaname$1 = function __schemaname() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : type.baseSchema.__schemaname;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.base.__schemaname || type.baseSchema.__schemaname;

    default:
      return state;
  }
};

var __typename$1 = function __typename() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : type.baseSchema.__typename;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.base.__typename || type.baseSchema.__typename;

    default:
      return state;
  }
};

var base = combineReducers({
  __schemaname: __schemaname$1,
  __typename: __typename$1,
  baseFontSize: baseFontSize,
  baseLineHeight: baseLineHeight,
  baseSpacing: baseFontSize$1
});

var UPDATE_THEME_ID = 'UPDATE_THEME_ID';
var UPDATE_THEME_TYPE = 'UPDATE_THEME_TYPE';
var UPDATE_THEME_VERSION = 'UPDATE_THEME_VERSION';
var UPDATE_THEME_NAME = 'UPDATE_THEME_NAME';

var name = function name() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.name || '';

    case UPDATE_THEME_NAME:
      return action.name;

    default:
      return state;
  }
};

var id$1 = function id() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.id || '';

    case UPDATE_THEME_ID:
      return action.id;

    default:
      return state;
  }
};

var version = function version() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : type.themeSchema.version;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.version || '';

    case UPDATE_THEME_VERSION:
      return action.version;

    default:
      return state;
  }
};

var __schemaname$2 = function __schemaname() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : type.themeSchema.__schemaname;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.__schemaname || type.themeSchema.__schemaname;

    default:
      return state;
  }
};

var __typename$2 = function __typename() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : type.themeSchema.__typename;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.__typename || type.themeSchema.__typename;

    default:
      return state;
  }
};

var theme = combineReducers({
  __schemaname: __schemaname$2,
  __typename: __typename$2,
  base: base,
  fontFace: fontFace,
  id: id$1,
  name: name,
  setting: setting,
  swatch: swatch,
  version: version
});

var airthemeReducer = combineReducers({
  theme: theme
});

var makeStore = function makeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return createStore(airthemeReducer, initialState, composedMiddleware);
};

var defaultStore = makeStore({
  theme: type.theme.base()
});

var Provider = function Provider(_ref) {
  var _ref$store = _ref.store,
      store = _ref$store === void 0 ? defaultStore : _ref$store,
      children = _ref.children;
  return React__default.createElement(reactRedux.Provider, {
    store: store
  }, children);
};

var updateTheme = function updateTheme(theme) {
  return {
    type: UPDATE_THEME,
    theme: theme
  };
};

var updateThemeName = function updateThemeName(name) {
  return {
    type: UPDATE_THEME_NAME,
    name: name
  };
};
var updateThemeId = function updateThemeId(id) {
  return {
    type: UPDATE_THEME_ID,
    id: id
  };
};
var updateThemeObject = function updateThemeObject(object) {
  return {
    type: UPDATE_THEME_TYPE,
    object: object
  };
};
var updateThemeVersion = function updateThemeVersion(version) {
  return {
    type: UPDATE_THEME_VERSION,
    version: version
  };
};

// with standard unit updates that require the original and the updated.

var updateBaseFontSize = function updateBaseFontSize(_original, updated) {
  return {
    type: UPDATE_BASE_FONT_SIZE,
    updated: updated
  };
};

var updateBaseSpacing = function updateBaseSpacing(_original, updated) {
  return {
    type: UPDATE_BASE_SPACING,
    updated: updated
  };
};

var updateBaseLineHeightView = function updateBaseLineHeightView(view) {
  return {
    type: UPDATE_BASE_LINE_HEIGHT_VIEW,
    view: view
  };
};
var updateBaseLineHeight = function updateBaseLineHeight(_original, updated) {
  return {
    type: UPDATE_BASE_LINE_HEIGHT,
    updated: updated
  };
};

var updateSwatchView = function updateSwatchView(view) {
  return {
    type: UPDATE_SWATCH_VIEW,
    view: view
  };
};
var addSwatch = function addSwatch(value, name, ordinal) {
  return {
    type: ADD_SWATCH,
    name: name,
    ordinal: ordinal,
    value: value
  };
};
var removeSwatch = function removeSwatch(original) {
  return {
    type: REMOVE_SWATCH,
    original: original
  };
};
var updateSwatch = function updateSwatch(original, updated) {
  return {
    type: UPDATE_SWATCH,
    original: original,
    updated: updated
  };
};

var addFontFace = function addFontFace(value, name, ordinal) {
  return {
    type: ADD_FONT_FACE,
    name: name,
    ordinal: ordinal,
    value: value
  };
};
var removeFontFace = function removeFontFace(original) {
  return {
    type: REMOVE_FONT_FACE,
    original: original
  };
};
var updateFontFace = function updateFontFace(original, updated) {
  return {
    type: UPDATE_FONT_FACE,
    original: original,
    updated: updated
  };
};

var updateColorView = function updateColorView(view) {
  return {
    type: UPDATE_COLOR_VIEW,
    view: view
  };
};
var addColor = function addColor(value, name, ordinal) {
  return {
    type: ADD_COLOR,
    name: name,
    ordinal: ordinal,
    value: value
  };
};
var removeColor = function removeColor(original) {
  return {
    type: REMOVE_COLOR,
    original: original
  };
};
var updateColor = function updateColor(original, updated) {
  return {
    type: UPDATE_COLOR,
    original: original,
    updated: updated
  };
};

var updateFontFamilyView = function updateFontFamilyView(view) {
  return {
    type: UPDATE_FONT_FAMILY_VIEW,
    view: view
  };
};
var addFontFamily = function addFontFamily(value, name, ordinal) {
  return {
    type: ADD_FONT_FAMILY,
    name: name,
    ordinal: ordinal,
    value: value
  };
};
var removeFontFamily = function removeFontFamily(original) {
  return {
    type: REMOVE_FONT_FAMILY,
    original: original
  };
};
var updateFontFamily = function updateFontFamily(original, updated) {
  return {
    type: UPDATE_FONT_FAMILY,
    original: original,
    updated: updated
  };
};

var updateFontSizeView = function updateFontSizeView(view) {
  return {
    type: UPDATE_FONT_SIZE_VIEW,
    view: view
  };
};
var addFontSize = function addFontSize(value, name, ordinal) {
  return {
    type: ADD_FONT_SIZE,
    name: name,
    ordinal: ordinal,
    value: value
  };
};
var removeFontSize = function removeFontSize(original) {
  return {
    type: REMOVE_FONT_SIZE,
    original: original
  };
};
var updateFontSize = function updateFontSize(original, updated) {
  return {
    type: UPDATE_FONT_SIZE,
    original: original,
    updated: updated
  };
};

var addFontWeight = function addFontWeight(value, name, ordinal) {
  return {
    type: ADD_FONT_WEIGHT,
    name: name,
    ordinal: ordinal,
    value: value
  };
};
var removeFontWeight = function removeFontWeight(original) {
  return {
    type: REMOVE_FONT_WEIGHT,
    original: original
  };
};
var updateFontWeight = function updateFontWeight(original, updated) {
  return {
    type: UPDATE_FONT_WEIGHT,
    original: original,
    updated: updated
  };
};

var updateSpacingView = function updateSpacingView(view) {
  return {
    type: UPDATE_SPACING_VIEW,
    view: view
  };
};
var addSpacing = function addSpacing(value, name, ordinal) {
  return {
    type: ADD_SPACING,
    name: name,
    ordinal: ordinal,
    value: value
  };
};
var removeSpacing = function removeSpacing(original) {
  return {
    type: REMOVE_SPACING,
    original: original
  };
};
var updateSpacing = function updateSpacing(original, updated) {
  return {
    type: UPDATE_SPACING,
    original: original,
    updated: updated
  };
};

var mapTheme = function mapTheme(_ref) {
  var theme = _ref.theme;
  return {
    theme: theme
  };
};
var mapMeta = function mapMeta(_ref2) {
  var _ref2$theme = _ref2.theme,
      id = _ref2$theme.id,
      name = _ref2$theme.name,
      type$$1 = _ref2$theme.type,
      version = _ref2$theme.version;
  return {
    id: id,
    name: name,
    type: type$$1,
    version: version
  };
};
var mapBaseFontSize = function mapBaseFontSize(_ref3) {
  var baseFontSize = _ref3.theme.base.baseFontSize;
  return {
    baseFontSize: baseFontSize
  };
}; // prettier-ignore

var mapBaseFontSizeContent = function mapBaseFontSizeContent(_ref4) {
  var content = _ref4.theme.base.baseFontSize.content;
  return {
    content: content
  };
}; // prettier-ignore

var mapBaseLineHeight = function mapBaseLineHeight(_ref5) {
  var baseLineHeight = _ref5.theme.base.baseLineHeight;
  return {
    baseLineHeight: baseLineHeight
  };
}; // prettier-ignore

var mapBaseLineHeightContent = function mapBaseLineHeightContent(_ref6) {
  var content = _ref6.theme.base.baseLineHeight.content;
  return {
    content: content
  };
}; // prettier-ignore

var mapBaseSpacing = function mapBaseSpacing(_ref7) {
  var baseSpacing = _ref7.theme.base.baseSpacing;
  return {
    baseSpacing: baseSpacing
  };
}; // prettier-ignore

var mapBaseSpacingContent = function mapBaseSpacingContent(_ref8) {
  var content = _ref8.theme.base.baseSpacing.content;
  return {
    content: content
  };
}; // prettier-ignore

var mapFontFace = function mapFontFace(_ref9) {
  var fontFace = _ref9.theme.fontFace;
  return {
    fontFace: fontFace
  };
}; // prettier-ignore

var mapFontFaceContent = function mapFontFaceContent(_ref10) {
  var content = _ref10.theme.fontFace.content;
  return {
    content: content
  };
}; // prettier-ignore

var mapSwatch = function mapSwatch(_ref11) {
  var swatch = _ref11.theme.swatch;
  return {
    swatch: swatch
  };
};
var mapSwatchContent = function mapSwatchContent(_ref12) {
  var content = _ref12.theme.swatch.content;
  return {
    content: content
  };
}; // prettier-ignore

var mapColor = function mapColor(_ref13) {
  var color = _ref13.theme.setting.color;
  return {
    color: color
  };
}; // prettier-ignore

var mapColorContent = function mapColorContent(_ref14) {
  var content = _ref14.theme.setting.color.content;
  return {
    content: content
  };
}; // prettier-ignore

var mapFontFamily = function mapFontFamily(_ref15) {
  var fontFamily = _ref15.theme.setting.fontFamily;
  return {
    fontFamily: fontFamily
  };
}; // prettier-ignore

var mapFontFamilyContent = function mapFontFamilyContent(_ref16) {
  var content = _ref16.theme.setting.fontFamily.content;
  return {
    content: content
  };
}; // prettier-ignore

var mapFontSize = function mapFontSize(_ref17) {
  var fontSize = _ref17.theme.setting.fontSize;
  return {
    fontSize: fontSize
  };
}; // prettier-ignore

var mapFontSizeContent = function mapFontSizeContent(_ref18) {
  var content = _ref18.theme.setting.fontSize.content;
  return {
    content: content
  };
}; // prettier-ignore

var mapFontWeight = function mapFontWeight(_ref19) {
  var fontWeight = _ref19.theme.setting.fontWeight;
  return {
    fontWeight: fontWeight
  };
}; // prettier-ignore

var mapFontWeightContent = function mapFontWeightContent(_ref20) {
  var content = _ref20.theme.setting.fontWeight.content;
  return {
    content: content
  };
}; // prettier-ignore

var mapSpacing = function mapSpacing(_ref21) {
  var spacing = _ref21.theme.setting.spacing;
  return {
    spacing: spacing
  };
}; // prettier-ignore

var mapSpacingContent = function mapSpacingContent(_ref22) {
  var content = _ref22.theme.setting.spacing.content;
  return {
    content: content
  };
}; // prettier-ignore

var withThemeMeta = reactRedux.connect(mapMeta, {
  updateThemeName: updateThemeName
});

var withBaseFontSizeAttribute = reactRedux.connect(mapBaseFontSize);
var withBaseFontSizeContent = reactRedux.connect(mapBaseFontSizeContent, {
  updateBaseFontSize: updateBaseFontSize
});

var withBaseLineHeightAttribute = reactRedux.connect(mapBaseLineHeight, {
  updateBaseLineHeightView: updateBaseLineHeightView
});
var withBaseLineHeightContent = reactRedux.connect(mapBaseLineHeightContent, {
  updateBaseLineHeight: updateBaseLineHeight
});

var withBaseSpacingAttribute = reactRedux.connect(mapBaseSpacing);
var withBaseSpacingContent = reactRedux.connect(mapBaseSpacingContent, {
  updateBaseSpacing: updateBaseSpacing
});

var withFontWeightAttribute = reactRedux.connect(mapFontWeight);
var withFontWeightContent = reactRedux.connect(mapFontWeightContent, {
  updateFontWeight: updateFontWeight,
  addFontWeight: addFontWeight,
  removeFontWeight: removeFontWeight
});

var withFontSizeAttribute = reactRedux.connect(mapFontSize);
var withFontSizeContent = reactRedux.connect(mapFontSizeContent, {
  updateFontSize: updateFontSize,
  addFontSize: addFontSize,
  removeFontSize: removeFontSize
});

var withSwatchAttribute = reactRedux.connect(mapSwatch);
var withSwatchContent = reactRedux.connect(mapSwatchContent, {
  updateSwatch: updateSwatch,
  addSwatch: addSwatch,
  removeSwatch: removeSwatch
});

var connectTheme = function connectTheme(mapThemeToProps) {
  return compose(styledComponents.withTheme, function (Component) {
    return function (_ref) {
      var theme = _ref.theme,
          props = _objectWithoutProperties(_ref, ["theme"]);

      return React__default.createElement(Component, Object.assign({}, props, mapThemeToProps(theme)));
    };
  });
};

var NewUnit =
/*#__PURE__*/
function (_Component) {
  _inherits(NewUnit, _Component);

  function NewUnit(props) {
    var _this;

    _classCallCheck(this, NewUnit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewUnit).call(this, props));

    _defineProperty$1(_assertThisInitialized(_assertThisInitialized(_this)), "updateName", function (name) {
      return _this.setState({
        name: name
      });
    });

    _defineProperty$1(_assertThisInitialized(_assertThisInitialized(_this)), "updateValue", function (value) {
      return _this.setState({
        value: value
      });
    });

    _this.state = props.unit(props.unitDefaults);
    return _this;
  }

  _createClass(NewUnit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          render = _this$props.render,
          attribute = _this$props.attribute;
      var unit = this.state,
          updateName = this.updateName,
          updateValue = this.updateValue;
      return render({
        attribute: attribute({
          content: [unit]
        }),
        unit: unit,
        updateName: updateName,
        updateValue: updateValue
      });
    }
  }]);

  return NewUnit;
}(React.Component);

_defineProperty$1(NewUnit, "defaultProps", {
  unit: core.noop,
  attribute: core.noop,
  unitDefaults: {},
  nextOrdinal: null,
  render: core.noop
});

var Deserialize = function Deserialize(_ref) {
  var attribute = _ref.attribute,
      _ref$unit = _ref.unit,
      unit = _ref$unit === void 0 ? {} : _ref$unit,
      render = _ref.render,
      _ref$schema = _ref.schema,
      schema = _ref$schema === void 0 ? {} : _ref$schema;
  return render({
    deserialized: Boolean(attribute) ? type.deserializeAttribute(_objectSpread$1({}, attribute, {
      content: [unit]
    }), schema) : {}
  });
};

// NOTE: This should likely be an aspect of core or make or type?
var mapThemeSwatch = function mapThemeSwatch(_ref) {
  var swatch = _ref.swatch;
  return {
    swatch: swatch
  };
};
var mapThemeBaseFontSize = function mapThemeBaseFontSize(_ref2) {
  var baseFontSize = _ref2.baseFontSize;
  return {
    baseFontSize: baseFontSize
  };
};
var mapThemeBaseLineHeight = function mapThemeBaseLineHeight(_ref3) {
  var baseLineHeight = _ref3.baseLineHeight;
  return {
    baseLineHeight: baseLineHeight
  };
}; // prettier-ignore

var mapThemeFontWeight = function mapThemeFontWeight(_ref4) {
  var fontWeight = _ref4.setting.fontWeight;
  return {
    fontWeight: fontWeight
  };
}; // prettier-ignore

exports.Provider = Provider;
exports.makeStore = makeStore;
exports.updateTheme = updateTheme;
exports.updateThemeName = updateThemeName;
exports.updateThemeId = updateThemeId;
exports.updateThemeObject = updateThemeObject;
exports.updateThemeVersion = updateThemeVersion;
exports.updateBaseFontSize = updateBaseFontSize;
exports.updateBaseSpacing = updateBaseSpacing;
exports.updateBaseLineHeightView = updateBaseLineHeightView;
exports.updateBaseLineHeight = updateBaseLineHeight;
exports.updateSwatchView = updateSwatchView;
exports.addSwatch = addSwatch;
exports.removeSwatch = removeSwatch;
exports.updateSwatch = updateSwatch;
exports.addFontFace = addFontFace;
exports.removeFontFace = removeFontFace;
exports.updateFontFace = updateFontFace;
exports.updateColorView = updateColorView;
exports.addColor = addColor;
exports.removeColor = removeColor;
exports.updateColor = updateColor;
exports.updateFontFamilyView = updateFontFamilyView;
exports.addFontFamily = addFontFamily;
exports.removeFontFamily = removeFontFamily;
exports.updateFontFamily = updateFontFamily;
exports.updateFontSizeView = updateFontSizeView;
exports.addFontSize = addFontSize;
exports.removeFontSize = removeFontSize;
exports.updateFontSize = updateFontSize;
exports.addFontWeight = addFontWeight;
exports.removeFontWeight = removeFontWeight;
exports.updateFontWeight = updateFontWeight;
exports.updateSpacingView = updateSpacingView;
exports.addSpacing = addSpacing;
exports.removeSpacing = removeSpacing;
exports.updateSpacing = updateSpacing;
exports.mapTheme = mapTheme;
exports.mapMeta = mapMeta;
exports.mapBaseFontSize = mapBaseFontSize;
exports.mapBaseFontSizeContent = mapBaseFontSizeContent;
exports.mapBaseLineHeight = mapBaseLineHeight;
exports.mapBaseLineHeightContent = mapBaseLineHeightContent;
exports.mapBaseSpacing = mapBaseSpacing;
exports.mapBaseSpacingContent = mapBaseSpacingContent;
exports.mapFontFace = mapFontFace;
exports.mapFontFaceContent = mapFontFaceContent;
exports.mapSwatch = mapSwatch;
exports.mapSwatchContent = mapSwatchContent;
exports.mapColor = mapColor;
exports.mapColorContent = mapColorContent;
exports.mapFontFamily = mapFontFamily;
exports.mapFontFamilyContent = mapFontFamilyContent;
exports.mapFontSize = mapFontSize;
exports.mapFontSizeContent = mapFontSizeContent;
exports.mapFontWeight = mapFontWeight;
exports.mapFontWeightContent = mapFontWeightContent;
exports.mapSpacing = mapSpacing;
exports.mapSpacingContent = mapSpacingContent;
exports.withThemeMeta = withThemeMeta;
exports.withBaseFontSizeAttribute = withBaseFontSizeAttribute;
exports.withBaseFontSizeContent = withBaseFontSizeContent;
exports.withBaseLineHeightAttribute = withBaseLineHeightAttribute;
exports.withBaseLineHeightContent = withBaseLineHeightContent;
exports.withBaseSpacingAttribute = withBaseSpacingAttribute;
exports.withBaseSpacingContent = withBaseSpacingContent;
exports.withFontWeightAttribute = withFontWeightAttribute;
exports.withFontWeightContent = withFontWeightContent;
exports.withFontSizeAttribute = withFontSizeAttribute;
exports.withFontSizeContent = withFontSizeContent;
exports.withSwatchAttribute = withSwatchAttribute;
exports.withSwatchContent = withSwatchContent;
exports.connectTheme = connectTheme;
exports.NewUnit = NewUnit;
exports.Deserialize = Deserialize;
exports.mapThemeSwatch = mapThemeSwatch;
exports.mapThemeBaseFontSize = mapThemeBaseFontSize;
exports.mapThemeBaseLineHeight = mapThemeBaseLineHeight;
exports.mapThemeFontWeight = mapThemeFontWeight;
//# sourceMappingURL=index.js.map
