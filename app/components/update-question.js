import Ember from 'ember';

export default Ember.Component.extend({
  updateMesageForm: false,
  actions: {
    updateMessageForm() {
      this.set('updateMessageForm', true);
    },
    updateMessageFormHide(){
      this.set('updateMessageForm', false);
    },
    update(message) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        notes: this.get('notes'),
        tags: this.get('tags'),
      };
      this.set('updateMessageForm', false);
      this.sendAction('update', message, params);
    }
  }
});
