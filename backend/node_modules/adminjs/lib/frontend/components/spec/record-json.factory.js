"use strict";

var _factoryGirl = _interopRequireDefault(require("factory-girl"));

require("./action-json.factory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_factoryGirl.default.define('RecordJSON', Object, {
  params: {
    param1: 'value1',
    'nested.param': 'value2'
  },
  populated: {},
  baseError: null,
  errors: {},
  id: _factoryGirl.default.sequence('JSONRecord.id', n => `someId${n}`),
  title: _factoryGirl.default.sequence('JSONRecord.id', n => `someTitle${n}`),
  recordActions: [],
  bulkActions: []
});

_factoryGirl.default.extend('RecordJSON', 'RecordJSON.total', {
  // params set for properties from ResourceJSON.total factory's properties
  params: {
    name: 'John',
    surname: 'Doe',
    gender: 'MALE'
  }
}, {
  afterBuild: async model => {
    const showAction = await _factoryGirl.default.build('ActionJSON', {
      name: 'show',
      actionType: 'record'
    });
    const editAction = await _factoryGirl.default.build('ActionJSON', {
      name: 'edit',
      actionType: 'record'
    });
    const deleteAction = await _factoryGirl.default.build('ActionJSON', {
      name: 'delete',
      actionType: 'record'
    });
    return { ...model,
      recordActions: [showAction, editAction, deleteAction]
    };
  }
});