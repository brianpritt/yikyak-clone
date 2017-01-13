import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    delete(message){
      if (confirm('Do you really want to do this?')){
        this.sendAction('destroyMessage', message);
      }
    }
  }
});
