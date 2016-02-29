(function(window, document) {
  'use strict';

  window.ActionTypes = {
    GET_STATE: 'GET_STATE',
    SET_STATE: 'SET_STATE',

    CREATE_SITE: 'CREATE_SITE',
    SITE_CREATED: 'SITE_CREATED',
    UPDATE_SITE: 'UPDATE_SITE',
    SITE_UPDATED: 'SITE_UPDATED',
    DELETE_SITE: 'DELETE_SITE',
    SITE_DELETED: 'SITE_DELETED',
    ORDER_SITES: 'ORDER_SITES',

    CREATE_SECTION: 'CREATE_SECTION',
    SECTION_CREATED: 'SECTION_CREATED',
    UPDATE_SECTION: 'UPDATE_SECTION',
    RESET_SECTION: 'RESET_SECTION',
    SECTION_UPDATED: 'SECTION_UPDATED',
    DELETE_SECTION: 'DELETE_SECTION',
    SECTION_DELETED: 'SECTION_DELETED',
    ORDER_SECTIONS: 'ORDER_SECTIONS',

    SECTION_BG_DELETE: 'SECTION_BG_DELETE',
    SECTION_BG_ORDER: 'SECTION_BG_ORDER',
    SECTION_BG_ORDERED: 'SECTION_BG_ORDERED',

    UPDATE_ENTRY: 'UPDATE_ENTRY',
    ENTRY_GALLERY_ORDER: 'ENTRY_GALLERY_ORDER',
    ENTRY_GALLERY_ORDERED: 'ENTRY_GALLERY_ORDERED'
  };
})(window, document);
