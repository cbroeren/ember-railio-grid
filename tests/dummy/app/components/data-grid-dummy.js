import Component from 'ember-component';

export default Component.extend({
  pets: [
    { name: 'Maggie',   age: 3,  type: 'dog' },
    { name: 'Blackie',  age: 5,  type: 'cat' },
    { name: 'Gina',     age: 2,  type: 'pig' },
    { name: 'Ceasar',   age: 8,  type: 'dog' },
    { name: 'Muffin',   age: 9,  type: 'cat' },
    { name: 'Shadow',   age: 3,  type: 'dog' },
    { name: 'Charlie',  age: 1,  type: 'pig' },
    { name: 'Coco',     age: 4,  type: 'pig' },
    { name: 'Snuggles', age: 15, type: 'cat' }
  ],

  properties: [
    {
      key:   'name',
      label: 'Animal name'
    },

    {
      key:   'age',
      label: 'Age'
    },

    {
      key:   'type',
      label: 'Species'
    }
  ]
});
