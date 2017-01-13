import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessage: false,
  actions: {
    messageFormShow() {
      this.set('addNewMessage', true);
    },
    saveMessage() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        author: this.get('author'),
        notes: this.get('notes'),
        tags: this.get('tags'),
      };
      this.set('addNewMessage', false);
      this.sendAction('saveMessage', params);
    }
  }
});
