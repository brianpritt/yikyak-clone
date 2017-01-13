import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    update(message, params) {
      this.sendAction('update', message, params);
    },
    delete(message){
      if (confirm('Do you really want to do this?')){
        this.sendAction('destroyMessage', message);
      }
    }
  }
});
