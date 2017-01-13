import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  rating: DS.attr(),
  body: DS.attr(),
  message: DS.belongsTo('message',{async:true})
});
