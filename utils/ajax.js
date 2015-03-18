define(function(require) {
    'use strict';

    /**
     * Performs a get request using the given url and the given params. Assumes that the response text is a JSON string.
     *
     * @param {String} url      The url
     * @param {Object} params   The parameters to include in the querystring. Example:
     *                          {
     *                              param1: value1,
     *                              param2: value2
     *                          }
     *
     *                          will be turned into the querystring
     *
     *                          '?param1=value1&param2+value2'
     *
     * @returns {Promise} A promise that resolves with the responseText (parsed as JSON).
     */
    function get(url, params) {
        return new Promise(function(resolve, reject) {
            var request = new XMLHttpRequest(),
                queryString = '?';

            for (var paramName in params) {
                queryString += paramName + '=' + params[paramName] + '&';
            }

            request.open('GET', url + queryString, true);

            request.onload = function() {
                if (request.status === 200){
                    resolve(JSON.parse(request.responseText));
                } else {
                    reject(Error('Couldn\'t get ' + url + '; error code:' + request.statusText));
                }
            };

            request.onerror = function() {
                reject(Error('There was a network error.'));
            };

            request.setRequestHeader('X-G2ASD-API-Token', 'dc850d057bf24aba42995a4e90034072ee831bda74d751999f2943aef377b340');
            request.setRequestHeader('X-G2ASD-API-User-Key', '1');
            request.setRequestHeader('Accept', 'application/json');
            request.send();
        });
    }

    return {
        get: get
    };
});
