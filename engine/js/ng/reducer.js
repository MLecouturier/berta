(function(window, document) {
  'use strict';

  window.reducer = function(state, action) {
    var path, value, site, site_name, site_idx, sites = [];

    console.log(action);

    if (state === undefined) {
      state = Immutable.Map();
    }

    switch (action.type) {
      case ActionTypes.GET_STATE:
        return state;

      case ActionTypes.SET_STATE:
        return Immutable.fromJS(action.state);

      case ActionTypes.CREATE_SITE:
        return state;

      case ActionTypes.SITE_CREATED:
        sites = state.getIn(['site']).toJSON();
        sites.push(action.site);
        return state.setIn(['site'], Immutable.List(sites));

      case ActionTypes.UPDATE_SITE:
        path = action.path.split('/');
        value = action.value;

        return state.setIn(path, value);

      case ActionTypes.SITE_UPDATED:
        path = action.resp.path.split('/');
        value = action.resp.value;

        return state.setIn(path, value);

      case ActionTypes.DELETE_SITE:
        return state;

      case ActionTypes.SITE_DELETED:
        sites = state.getIn(['site']).toJSON();
        site_name = action.resp.name === '0' ? '' : action.resp.name;
        site_idx = sites.findIndex(function (site, idx) {
          return site.name === site_name;
        });

        if (site_idx > -1) {
          sites.splice(site_idx, 1);
          return state.setIn(['site'], Immutable.List(sites));
        }

        return state;

      case ActionTypes.ORDER_SITES:
        action.sites.forEach(function(site, new_idx) {
          var site_name = site === '0' ? '' : site;

          site = state.getIn(['site']).find(function(site, old_idx) {
            var _site = site.toJSON();

            return _site.name === site_name;
          });

          if (site) {
            sites.push(site.toJSON());
          }
        });

        if (sites.length > 0) {
          return state.setIn(['site'], Immutable.List(sites));
        }

        return state;

      default:
        return state;
    }
  };
})(window, document);
