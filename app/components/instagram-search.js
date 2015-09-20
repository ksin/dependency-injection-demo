import Ember from 'ember';

export default Ember.Component.extend({
  tag: null,
  displayMessage: null,
  searchResults: null,
  count: 10,

  instagramApiClient: Ember.inject.service(),

  actions: {

    queryInstagram: function() {
      if (!this.get('tag')) {
        this.set('displayMessage', "Please enter a hashtag.");
        return;
      }

      var options = {
        count: this.get('count') || 10
      };

      var apiCall = this.get('instagramApiClient').recentMediaForTag(this.get('tag'), options);

      apiCall.then((response) => {
        if (!response.data) {
          this.set('displayMessage', "Your search yielded no results.");
          return;
        }
        this.set('displayMessage', "Check out these images!");
        this.set('searchResults', response.data);
      });

      apiCall.catch(() => {
        this.set('displayMessage', "Instagram failed to find images within 10 seconds or returned an error.");
      });
    }

  }
});
