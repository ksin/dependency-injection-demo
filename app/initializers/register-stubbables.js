import InstagramApiClient from 'dependency-injection-demo/adapters/instagram';
import Ember from 'ember';

export default {
  name: 'register-stubbables',
  initialize: function(container, app) {
    if (!Ember.testing) {
      app.register('instagram-api-client:main', InstagramApiClient);
    }
    app.inject('controller:index', 'instagramApiClient', 'instagram-api-client:main');
  }
};
