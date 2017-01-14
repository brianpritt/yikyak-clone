import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('message', params.message_id);
  },
  actions: {
    saveReply(params) {
      var newReply = this.store.createRecord('reply', params);
      var message = params.message;
      message.get('replies').addObject(newReply);
      newReply.save().then(function() {
        return message.save();
      });
      this.transitionTo('question', message);
    },
    update(message, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        message.set(key,params[key]);
      }
    });
    message.save();
    this.transitionTo('index');
  },
    destroyMessage(message){
      var reply_deletions = message.get('replies').map(function(reply){return reply.destroyRecord();
      });
      Ember.RSVP.all(reply_deletions).then(function() {
        return message.destroyRecord();
      });
      this.transitionTo('index');
    },
  }
});
