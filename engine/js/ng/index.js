(function(window, document) {
  'use strict';

  var createStoreWithMiddleware = Redux.applyMiddleware(redux_middleware)(Redux.createStore);

  window.redux_store = createStoreWithMiddleware(root_reducer);
  redux_store.dispatch(Actions.getState());
})(window, document);