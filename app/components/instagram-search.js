import Ember from 'ember';

export default Ember.Component.extend({
  tag: null,
  displayMessage: null,
  searchResults: null,
  count: 10,

  instagramApiClient: null, // injected

  actions: {

    queryInstagram: function() {
      if (!this.get('tag')) {
        this.set('displayMessage', "Please enter a hashtag.");
        return;
      }

      var options = {
        count: this.get('count') || 10
      };

      var self = this;
      var apiCall = this.instagramApiClient.recentMediaForTag(this.get('tag'), options);

      apiCall.then(function(response) {
        if (!response.data) {
          self.set('displayMessage', "Your search yielded no results.");
          return;
        }
        self.set('displayMessage', "Check out these images!");
        self.set('searchResults', response.data);
      });

      apiCall.catch(function() {
        self.set('displayMessage', "Instagram failed to find images within 10 seconds or returned an error.");
      });
    }

  }
});
