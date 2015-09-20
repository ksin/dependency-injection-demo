import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
import {yoloInstagramRecentMediaJson} from './fixtures/instagram-json';

var App;

module('Integration: Instagram Search', {
  setup: function() {
    App = startApp();

    App.__container__.lookup('service:instagram-api-client').reopen({
      recentMediaForTag: function(tag, options) {
        return Ember.RSVP.resolve(yoloInstagramRecentMediaJson);
      }
    });
  },

  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test('Searches Instagram for images', function() {
  expect(2);

  visit('/');
  andThen(function() {
    equal(find('#title').text(), "Instagram hashtag image search", "Title is on homepage.");
  });
  fillIn('input.search-field', 'yolo');
  fillIn('input.count', 16);
  click('button');
  andThen(function() {
    equal(find('img').length, 16, "Sixteen images are found.");
  });
});
