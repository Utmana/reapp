'use strict';
import events from 'events';
import assign from 'object-assign';
import request from '../services/request';
import {
  BASE_URL
} from '../constants/config';
import AppDispatcher from '../dispatcher';

var EventEmitter = events.EventEmitter;

var ChallengesStore = assign({}, EventEmitter.prototype, {
  /**
   * Gets a challenge by it's id
   * @param  {String} id - The id of the challenge
   * @return {Object}    - A promise resolved with the challenge
   */
  get(id) {
    return request.get(`${BASE_URL}/challenges/${id}`);
  },
  /**
   * Get the list of challenges
   * @return {Object} - A promise resolved with the list of challenges
   */
  getList() {
    return request.get(`${BASE_URL}/challenges`);
  },
  /**
   * Accepts a challenge
   * @param  {String} id - The id of the challenge
   * @return {Object}    - A promise
   */
  accept(id) {
    return request.post(`${BASE_URL}/challenges/${id}/accept`, {});
  },
  /**
   * Decline a challenge
   * @param  {String} id - The id of the challenge
   * @return {Object}    - A promise
   */
  decline() {

  },
  edit(data) {
    return request.put(`${BASE_URL}/challenges/${id}`, data);
  },
  create(data) {
    return request.post(`${BASE_URL}/challenges`, data)
  }
});

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case 'save':
      var data = action.data;
      if (data.id) {
        return ChallengesStore.edit(data);
      }
      return ChallengesStore.create(data);
      break;
  }
});

module.exports = ChallengesStore;
