import Ember from 'ember';

const { Route, on } = Ember;

export default Route.extend({

  onActivate: on('activate', function() {
    this.controllerFor('progress-circular').start();
  }),

  onDeactivate: on('deactivate', function() {
    this.controllerFor('progress-circular').stop();
  })

});
