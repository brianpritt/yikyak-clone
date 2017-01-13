import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('message', params.message_id);
  },
  actions: {
    destroyMessage(message){
      message.destroyRecord();
      this.transitionTo('index');
    }
  }
});
