var db = require('db');

(function () {

  'use strict';

  var inboxServices = angular.module('inboxServices');
  
  // TODO remove
  // TODO remove db module too!
  inboxServices.factory('db', function() {
    return db.current();
  });

  inboxServices.factory('BaseUrlService', function() {
    return function() {
      return $('html').data('base-url');
    };
  });

  inboxServices.factory('DbNameService', ['BaseUrlService',
    function(BaseUrlService) {
      return function() {
        var parts = BaseUrlService().split('/');
        if (parts.length > 1) {
          return parts[1];
        }
      };
    }
  ]);

  inboxServices.factory('UserCtxService', function() {
    return function() {
      return $('html').data('user');
    };
  });

}());