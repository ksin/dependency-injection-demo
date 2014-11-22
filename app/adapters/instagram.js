import Ember from 'ember';
import ENV from "dependency-injection-demo/config/environment";

export default Ember.Object.extend({
  appId: ENV.INSTAGRAM_CLIENT_ID,

  /*
   * Makes a JSONP request to get recent media tagged with a particular hashtag.
   *
   * Supported keys for options:
   *
   *   count (integer)
   *   min_tag_id (string -- see pagination node of API response)
   *   max_tag_id (string -- see pagination node of API response)
   *
   * Returns a promise that fulfills with the json response or rejects
   * if the timeout is exceeded. (This uses JSONP, so visibility into
   * what went wrong in the rejection case is poor.)
   */
  recentMediaForTag: function(tag, options) {
    return Ember.RSVP.resolve(Ember.$.ajax({
      dataType: "jsonp",
      url: this.recentMediaForTagUrl(tag),
      data: this.recentMediaForTagRequestData(options),
      timeout : 10000,
    }));
  },

  recentMediaForTagUrl: function(tag) {
    return 'https://api.instagram.com/v1/tags/' + tag + '/media/recent';
  },

  recentMediaForTagRequestData: function(options) {
    var data = {
      client_id: this.get('appId')
    };
    if (options.count) {
      data.count = options.count;
    }
    if (options.min_tag_id) {
      data.min_tag_id = options.min_tag_id;
    }
    if (options.max_tag_id) {
      data.max_tag_id = options.max_tag_id;
    }
    return data;
  }
});
