import Ember from 'ember';

export function arrayContains(params) {
  const [items, value] = params;
  return items.indexOf(value) > -1;
}

export default Ember.Helper.helper(arrayContains);
