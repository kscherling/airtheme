'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var type = require('@airtheme/type');

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
var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

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
    dispatch({ type: ActionTypes.REPLACE });
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
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

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
  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type$$1 = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type$$1 }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
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
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

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
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
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
      return a(b.apply(undefined, arguments));
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
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var store = createStore.apply(undefined, args);
      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
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
  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

var UPDATE_THEME = 'UPDATE_THEME';

var ADD_SWATCH = 'ADD_SWATCH';
var REMOVE_SWATCH = 'REMOVE_SWATCH';
var UPDATE_SWATCH = 'UPDATE_SWATCH';

var eq = function eq(a, b) {
  return a === b;
};
var not = function not(a) {
  return function (b) {
    return a !== b;
  };
};

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var swatch = function swatch() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : type.attribute.swatch();
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.swatch || {};
    case ADD_SWATCH:
      return _extends$1({}, state, {
        content: [].concat(toConsumableArray(state.content), [type.unit[state.unit]({ value: action.swatch })])
      });
    case REMOVE_SWATCH:
      return _extends$1({}, state, {
        content: state.content.filter(not(action.original))
      });
    case UPDATE_SWATCH:
      return _extends$1({}, state, {
        content: state.content.map(function (swatch) {
          return eq(swatch, action.original) ? _extends$1({}, swatch, { value: action.updatedVal }) : swatch;
        })
      });
    default:
      return state;
  }
};

var ADD_FONT_SIZE = 'ADD_FONT_SIZE';
var REMOVE_FONT_SIZE = 'REMOVE_FONT_SIZE';
var UPDATE_FONT_SIZE = 'UPDATE_FONT_SIZE';

var addUnit = function addUnit(state, _ref) {
  var reference = _ref.reference,
      value = _ref.value,
      ordinal = _ref.ordinal;
  return _extends$1({}, state, {
    content: [].concat(toConsumableArray(state.content), [type.unit[state.unit]({ reference: reference, ordinal: ordinal, value: value })])
  });
};

var removeUnit = function removeUnit(state, _ref2) {
  var original = _ref2.original;
  return _extends$1({}, state, {
    content: state.content.filter(not(original))
  });
};

var updateUnit = function updateUnit(state, _ref3) {
  var original = _ref3.original,
      reference = _ref3.reference,
      value = _ref3.value,
      ordinal = _ref3.ordinal;
  return _extends$1({}, state, {
    content: state.content.map(function (unit) {
      return eq(unit, original) ? _extends$1({}, unit, { value: value, reference: reference, ordinal: ordinal }) : unit;
    })
  });
};

var fontSize = function fontSize() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : type.attribute.fontSize();
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontSize;
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

var fontFamily = function fontFamily() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : type.attribute.fontFamily();
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.fontFamily;
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

var fontWeight = function fontWeight() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : type.attribute.fontWeight();
  var action = arguments[1];

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

var color = function color() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : type.attribute.color();
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.color || {};
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

var spacing = function spacing() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : type.attribute.spacing();
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.setting.spacing;
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

var setting = combineReducers({
  color: color,
  fontFamily: fontFamily,
  fontSize: fontSize,
  fontWeight: fontWeight,
  spacing: spacing
});

var UPDATE_BASE_FONT_SIZE = 'UPDATE_BASE_FONT_SIZE';
var UPDATE_BASE_LINE_HEIGHT = 'UPDATE_BASE_LINE_HEIGHT';
var UPDATE_BASE_SPACING = 'UPDATE_BASE_SPACING';
var UPDATE_THEME_ID = 'UPDATE_THEME_ID';
var UPDATE_THEME_NAME = 'UPDATE_THEME_NAME';

var name = function name() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.name || '';
    case UPDATE_THEME_NAME:
      return action.name;
    default:
      return state;
  }
};

var id = function id() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.id || '';
    case UPDATE_THEME_ID:
      return action.id;
    default:
      return state;
  }
};

var baseFontSize = function baseFontSize() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.baseFontSize || '';
    case UPDATE_BASE_FONT_SIZE:
      return action.baseFontSize;
    default:
      return state;
  }
};

var baseLineHeight = function baseLineHeight() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.baseLineHeight || '';
    case UPDATE_BASE_LINE_HEIGHT:
      return action.baseLineHeight;
    default:
      return state;
  }
};

var baseSpacing = function baseSpacing() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.baseSpacing || '';
    case UPDATE_BASE_SPACING:
      return action.baseSpacing;
    default:
      return state;
  }
};

// Read Only
// Present only for hydration

var version = function version() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.version || '';
    default:
      return state;
  }
};

var type$1 = function type$$1() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_THEME:
      return action.theme.type || '';
    default:
      return state;
  }
};

var fontFace = function fontFace() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return state;
};

var theme = combineReducers({
  baseFontSize: baseFontSize,
  baseLineHeight: baseLineHeight,
  baseSpacing: baseSpacing,
  fontFace: fontFace,
  id: id,
  name: name,
  setting: setting,
  swatch: swatch,
  type: type$1,
  version: version
});

var airthemeRootReducer = combineReducers({ theme: theme });

var enhancers = [];
var middleware = [];

if (process.env.NODE_ENV === 'development') {
  var reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (reduxDevTools) {
    enhancers.push(reduxDevTools());
  }
}

var composedEnhancers = compose.apply(undefined, [applyMiddleware.apply(undefined, middleware)].concat(enhancers));

var makeStore = (function () {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return createStore(airthemeRootReducer, initialState, composedEnhancers);
});

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

var updateBaseFontSize = function updateBaseFontSize(baseFontSize) {
  return {
    type: UPDATE_BASE_FONT_SIZE,
    baseFontSize: baseFontSize
  };
};

var updateBaseLineHeight = function updateBaseLineHeight(baseLineHeight) {
  return {
    type: UPDATE_BASE_LINE_HEIGHT,
    baseLineHeight: baseLineHeight
  };
};

var updateBaseSpacing = function updateBaseSpacing(baseSpacing) {
  return {
    type: UPDATE_BASE_SPACING,
    baseSpacing: baseSpacing
  };
};

var addSwatch = function addSwatch(swatch) {
  return {
    type: ADD_SWATCH,
    swatch: swatch
  };
};

var removeSwatch = function removeSwatch(original) {
  return {
    type: REMOVE_SWATCH,
    original: original
  };
};

var updateSwatch = function updateSwatch(original, updatedVal) {
  return {
    type: UPDATE_SWATCH,
    original: original,
    updatedVal: updatedVal
  };
};

var addColor = function addColor(value, reference, ordinal) {
  return {
    type: ADD_COLOR,
    reference: reference,
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

var updateColor = function updateColor(original, value, reference, ordinal) {
  return {
    type: UPDATE_COLOR,
    reference: reference,
    ordinal: ordinal,
    original: original,
    value: value
  };
};

var addFontFamily = function addFontFamily(value, reference, ordinal) {
  return {
    type: ADD_FONT_FAMILY,
    reference: reference,
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

var updateFontFamily = function updateFontFamily(original, value, reference, ordinal) {
  return {
    type: UPDATE_FONT_FAMILY,
    reference: reference,
    ordinal: ordinal,
    original: original,
    value: value
  };
};

var addFontSize = function addFontSize(value, reference, ordinal) {
  return {
    type: ADD_FONT_SIZE,
    reference: reference,
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

var updateFontSize = function updateFontSize(original, value, reference, ordinal) {
  return {
    type: UPDATE_FONT_SIZE,
    reference: reference,
    ordinal: ordinal,
    original: original,
    value: value
  };
};

var addFontWeight = function addFontWeight(value, reference, ordinal) {
  return {
    type: ADD_FONT_WEIGHT,
    reference: reference,
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

var updateFontWeight = function updateFontWeight(original, value, reference, ordinal) {
  return {
    type: UPDATE_FONT_WEIGHT,
    reference: reference,
    ordinal: ordinal,
    original: original,
    value: value
  };
};

var addSpacing = function addSpacing(value, reference, ordinal) {
  return {
    type: ADD_SPACING,
    reference: reference,
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

var updateSpacing = function updateSpacing(original, value, reference, ordinal) {
  return {
    type: UPDATE_SPACING,
    reference: reference,
    ordinal: ordinal,
    original: original,
    value: value
  };
};

// makeStore

exports.default = makeStore;
exports.updateTheme = updateTheme;
exports.updateThemeName = updateThemeName;
exports.updateThemeId = updateThemeId;
exports.updateBaseFontSize = updateBaseFontSize;
exports.updateBaseLineHeight = updateBaseLineHeight;
exports.updateBaseSpacing = updateBaseSpacing;
exports.addSwatch = addSwatch;
exports.removeSwatch = removeSwatch;
exports.updateSwatch = updateSwatch;
exports.addColor = addColor;
exports.removeColor = removeColor;
exports.updateColor = updateColor;
exports.addFontFamily = addFontFamily;
exports.removeFontFamily = removeFontFamily;
exports.updateFontFamily = updateFontFamily;
exports.addFontSize = addFontSize;
exports.removeFontSize = removeFontSize;
exports.updateFontSize = updateFontSize;
exports.addFontWeight = addFontWeight;
exports.removeFontWeight = removeFontWeight;
exports.updateFontWeight = updateFontWeight;
exports.addSpacing = addSpacing;
exports.removeSpacing = removeSpacing;
exports.updateSpacing = updateSpacing;
