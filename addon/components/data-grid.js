import Ember from 'ember';
import layout from 'ember-railio-grid/templates/components/data-grid';
import DataManager from 'ember-railio-grid/utils/data-manager';

const { computed, set } = Ember;
const { alias } = computed;

function getPropertiesList(properties) {
  let list = null;

  if (typeof properties === 'string') {
    const propertyList = properties.split(' ');

    list = propertyList.map(function(property) {
      return { key: property, label: property };
    });

    list = Ember.A(list);
  } else if (properties !== null && Ember.isArray(properties)) {
    list = properties.map(function(property) {
      if (typeof property === 'string') {
        return { key: property, label: property };
      } else if (typeof property === 'object' &&
                 property.hasOwnProperty('key') &&
                 property.hasOwnProperty('label')) {
        return property;
      }
    });

    list = Ember.A(list);
  }

  return list;
}

export default Ember.Component.extend({
  layout: layout,
  classNames: ['data-grid'],
  attributeBindings: ['widthString:style'],

  showHeader: true,

  widthString: computed('width', function() {
    const width = this.get('width') + '';
    if (width.indexOf('%') > 0) { return width; }

    return  'width: ' + width + 'px';
  }),

  dataManager: computed({
    set(key, value) {
      this.set('_dataManager', value);
      return value;
    },
    get() {
      return this.get('_dataManager') || DataManager.create();
    }
  }),

  didReceiveAttrs() {
    this.set('dataManager.content', this.getAttr('content') || this.get('content'));
    this._super(...arguments);
  },

  filter:    alias('dataManager.filter'),
  sorter:    alias('dataManager.sorter'),
  paginator: alias('dataManager.paginator'),

  page:     alias('paginator.page'),
  pageSize: alias('paginator.pageSize'),

  managedContent: alias('dataManager.managedContent'),

  propertiesList: computed('properties', function() {
    const properties = this.get('properties');

    return getPropertiesList(properties);
  }),

  actions: {
    sortBy(key) {
      const sort = this.get('sorter').toggle(key);

      const propertiesList = this.get('propertiesList');
      const property = propertiesList.findBy('key', key);
      set(property, 'sorting', sort);
    }
  }
});
