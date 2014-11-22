import Ember from 'ember';
import ENV from "dependency-injection-demo/config/environment";

export default Ember.Controller.extend({
  tag: null,
  displayMessage: null,
  searchResults: null,

  appId: ENV.INSTAGRAM_CLIENT_ID,
  count: 10,

  requestData: function() {
    return {
      client_id: this.get('appId') || '',
      count: this.get('count') || 10
    };
  },

  requestUrl: function() {
    return 'https://api.instagram.com/v1/tags/' + this.get('tag') + '/media/recent';
  }.property('tag'),

  actions: {

    queryInstagram: function() {
      if (!this.get('tag')) {
        this.set('displayMessage', "Please enter a hashtag.");
        return;
      }

      var self = this;
      var ajax = Ember.RSVP.resolve(Ember.$.ajax({
        dataType: "jsonp",
        url: this.get('requestUrl'),
        data: this.requestData(),
        timeout: 10000
      }));

      ajax.then(function(response) {
        if (!response.data) {
          self.set('displayMessage', "Your search yielded no results.");
          return;
        }
        self.set('displayMessage', "Check out these images!");
        self.set('searchResults', response.data);
      });

      ajax.catch(function() {
        self.set('displayMessage', "Instagram failed to find images within 10 seconds or returned an error.");
      });
    }

  }
});
