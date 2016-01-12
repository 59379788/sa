'use strict';

/**
 * @ngdoc service
 * @name saApp.httpInjector
 * @description
 * # httpInjector
 * Factory in the saApp.
 */
angular.module('saApp')
  .factory('httpInjector', function ($location) {
    var responseInterceptor = {
        response: function(response) {
            //console.log(response)
            if(response.data.errcode === 1001)
            {
                window.location = "/manager/login";
            }
            return response;
        }
    };

    return responseInterceptor;
});
