
var Analytics = require('analytics.js').constructor;
var integration = require('analytics.js-integration');
var plugin = require('./');
var sandbox = require('clear-env');

describe('Localytics', function(){
  var Localytics = plugin;
  var localytics;
  var analytics;
  var options = {
    // TODO: fill in this dictionary with the fake options required to test
    // that the integration can load properly. We'll need to get test
    // credentials for every integration, so that we can make sure it is
    // working properly.
    //
    // Here's what test credentials might look like:
    //
    //   {
    //     apiKey: 'V7TLXL5WWBA5NOU5MOJQW4'
    //   }
  };

  beforeEach(function(){
    analytics = new Analytics;
    localytics = new Localytics(options);
    analytics.use(plugin);
    analytics.use(tester);
    analytics.add(localytics);
  });

  afterEach(function(){
    analytics.restore();
    analytics.reset();
    localytics.reset();
    sandbox();
  });

  it('should have the right settings', function(){
    // TODO: add any additional options or globals from the source file itself
    // to this list, and they will automatically get tested against, like:
    // integration('Localytics')
    //   .global('__myIntegration')
    //   .option('apiKey', '')
    analytics.compare(Localytics, integration('Localytics')
      .assumesPageview())
  });

  describe('before loading', function(){
    beforeEach(function(){
      analytics.stub(localytics, 'load');
    });

    afterEach(function(){
      localytics.reset();
    });

    describe('#initialize', function(){
      // TODO: test .initialize();
    });

    describe('should call #load', function(){
      // TODO: test that .initialize() calls `.load()`
      // you can remove this if it doesn't call `.load()`.
    });
  });

  describe('loading', function(){
    it('should load', function(done){
      analytics.load(localytics, done);
    });
  });

  describe('after loading', function(){
    beforeEach(function(done){
      analytics.once('ready', done);
      analytics.initialize();
      analytics.page();
    });


    describe('#identify', function(){
      beforeEach(function(){
        // TODO: stub the integration global api.
        // For example:
        // analytics.stub(window.api, 'identify');
      });

      it('should send an id', function(){
        analytics.identify('id');
        // TODO: assert that the id is sent.
        // analytics.called(window.api.identify, 'id');
      });

      it('should send traits', function(){
        analytics.identify({ trait: true });
        // TODO: assert that the traits are sent.
        // analytics.called(window.api.identify, { trait: true });
      });

      it('should send an id and traits', function(){
        analytics.identify('id', { trait: true });
        // TODO: assert that the id and traits are sent.
        // analytics.called(window.api.identify, 'id');
        // analytics.called(window.api.identify, { id: 'id', trait: true });
      });
    });


    describe('#track', function(){
      beforeEach(function(){
        // TODO: stub the integration global api.
        // for example:
        // analytics.stub(window.api, 'logEvent');
      });

      it('should send an event', function(){
        analytics.track('event');
        // TODO: assert that the event is sent.
        // analytics.called(window.api.logEvent, 'event');
      });

      it('should send an event and properties', function(){
        analytics.track('event', { property: true });
        // TODO: assert that the event is sent.
        // analytics.called(window.api.logEvent, 'event', { property: true });
      });
    });
  });
});
