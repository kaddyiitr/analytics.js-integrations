
var integration = require('analytics.js-integration');

/**
 * Expose `plugin`.
 */

module.exports = exports = function(analytics){
  analytics.addIntegration(Localytics);
};

/**
 * Expose `Localytics` integration.
 */

var Localytics = exports.Integration = integration('Localytics')
  .assumesPageview()
  // TODO: add your own options to the chained calls above. For example if
  // Localytics requires an "API Key" you'd add an option like...
  //
  //   .option('apiKey', '');
  //
  // ...where the second argument is the option's default value. You'll also
  // need to add any global variables your integration creates, for example...
  //
  //   .global('__myIntegration');
  //
  // ...that lets us clean up the globals when the library is reset. Check out
  // one of the existing integrations for examples.

/**
 * Initialize Localytics.
 *
 * @param {Facade} page
 */

Localytics.prototype.initialize = function(page){
  // TODO: fill in the logic that needs to be run for your integration to be
  // properly initialized. Most often that will include a call to `this.load()`
  // which comes next.
  //
  // Here's what a normal `initialize` method might look like:
  //
  //   window.__integration = {};
  //   window.__integration.apiKey = this.options.apiKey;
  //   this.load(this.ready);
  //
  // Once the integration is ready to receive calls to `identify()`, `track()` etc..
  // you must invoke `this.ready()`.
  // for example if the integration is ready once it's loaded, you can call `this.load(this.ready)`
  // if it's ready immediately after `initialize()` is called you can call `this.ready()` here.
  window.console.log("I am inside Localytics Initialize function");
  this.ready();
};

/**
 * Has the Localytics library been loaded yet?
 *
 * @return {Boolean}
 */

Localytics.prototype.loaded = function(){
  // TODO: fill in the logic required to check if the library has already been
  // loaded on the page. Usually this will be a simple global variable check.
  //
  // Here's what a basic `loaded` method might look like:
  //
  //   return window.__integration;
  window.console.log("I am inside Localytics loaded function");
  return true;
};

/**
 * Identify a user.
 *
 * @param {Facade} identify
 */

Localytics.prototype.identify = function(identify){
  // TODO: fill in the logic required to identify a user with your
  // integration's library.
  //
  // Here's what a basic `identify` method might look like:
  //
  //   var id = identify.userId();
  //   var traits = identify.traits();
  //   window.__integration.userId = id;
  //   window.__integration.userProperties = traits;
};

/**
 * Track an event.
 *
 * @param {Facade} track
 */

Localytics.prototype.track = function(track){
  // TODO: fill in the logic to track an event with your integration's library.
  //
  // Here's what a basic `track` method might look like:
  //
  //   var event = track.event();
  //   var properties = track.properties();
  //   window.__integration.track(event, properties);
  window.console.log("I am inside Localytics Initialize function");
};
