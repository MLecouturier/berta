(function(window, document) {
  'use strict';

  window.Actions = window.Actions || {};

  Object.assign(window.Actions, {
    updateEntry: function(path, value, onComplete) {
      return {
        type: ActionTypes.UPDATE_ENTRY,
        meta: {
          remote: true,
          url: API_ROOT + 'update-entry',
          method: 'PATCH',
          data: {path: path, value: value},
          // @@@:TODO: Remove this callback when migration to ReactJS is completed
          onComplete: onComplete
        },
        path: path,
        value: value
      };
    }
  });

})(window, document);
