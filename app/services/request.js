'use strict';
import request from 'browser-request';
import Q from 'q';

function makeRequest(options) {
  var deferred = Q.defer();
  request(options, function (error, response, body) {
    if (error) {
      return deferred.reject(error);
    }
    return deferred.resolve(body);
  });
  return deferred.promise;
}

module.exports = {
  get(url) {
    return makeRequest({
      url: url,
      method: 'GET',
      json: true
    });
  },
  post(url, data) {
    return makeRequest({
      url: url,
      method: 'POST',
      body: data,
      json: true
    });

  },
  put(url, data) {
    return makeRequest({
      url: url,
      method: 'PUT',
      body: data,
      json: true
    });

  },
  del(url, data) {
    return makeRequest({
      url: url,
      method: 'DELETE',
      body: data,
      json: true
    });
  }
};
