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
    },
    entryGalleryOrder: function(site, section, entry, files, onComplete) {
      return {
        type: ActionTypes.ENTRY_GALLERY_ORDER,
        meta: {
          remote: true,
          method: 'PUT',
          url: API_ROOT + 'entry-gallery-order',
          data: {
            site: site,
            section: section,
            entry: entry,
            files: files
          },
          dispatch: 'entryGalleryOrdered',
          // @@@:TODO: Remove this callback when migration to ReactJS is completed
          onComplete: onComplete
        },
        site: site,
        section: section,
        entry: entry,
        files: files
      };
    },
    entryGalleryOrdered: function(resp) {
      return {
        type: ActionTypes.ENTRY_GALLERY_ORDERED,
        resp: resp
      };
    }
  });

})(window, document);
