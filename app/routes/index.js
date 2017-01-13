import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      messages: this.store.findAll('message'),
      replies: this.store.findAll('reply')
    });
  },
  actions: {
    saveMessage(params){
    var newMessage = this.store.createRecord('message', params);
    newMessage.save();
    this.transitionTo('index');
  },
    saveReply(params){
      var newReply = this.store.createRecord('reply', params);
      newReply.save();
      this.transitionTo('index');
    }
  }
});
