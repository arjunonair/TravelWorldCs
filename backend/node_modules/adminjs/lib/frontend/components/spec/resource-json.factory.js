"use strict";

var _factoryGirl = _interopRequireDefault(require("factory-girl"));

require("./property-json.factory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_factoryGirl.default.define('ResourceJSON', Object, {
  id: _factoryGirl.default.sequence('ResourceJSON.id', i => `resource${i}`),
  name: _factoryGirl.default.sequence('ResourceJSON.name', i => `resource ${i}`),
  href: '/admin/resourceName',
  titleProperty: () => _factoryGirl.default.build('PropertyJSON'),
  navigation: {
    name: 'someName',
    icon: 'someIcon',
    show: true
  },
  actions: [],
  resourceActions: [],
  listProperties: [],
  properties: {},
  showProperties: [],
  filterProperties: [],
  editProperties: []
});

_factoryGirl.default.extend('ResourceJSON', 'ResourceJSON.full', {}, {
  afterBuild: async model => {
    const properties = [await _factoryGirl.default.build('PropertyJSON', {
      name: 'name',
      isTitle: true
    }), await _factoryGirl.default.build('PropertyJSON', {
      name: 'surname'
    }), await _factoryGirl.default.build('PropertyJSON', {
      name: 'content',
      type: 'string'
    }), await _factoryGirl.default.build('PropertyJSON', {
      name: 'longerData',
      type: 'textarea'
    }), // await factory.build<PropertyJSON>('PropertyJSON', { name: 'publishedAt', type: 'date' }),
    await _factoryGirl.default.build('PropertyJSON', {
      name: 'gender',
      availableValues: [{
        label: 'male',
        value: 'MALE'
      }, {
        label: 'female',
        value: 'FEMALE'
      }]
    })];
    return { ...model,
      listProperties: properties,
      showProperties: properties,
      editProperties: properties,
      filterProperties: properties
    };
  }
});