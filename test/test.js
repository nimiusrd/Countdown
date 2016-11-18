/* global riot:true */
/* eslint-env mocha*/
require('../src/app');
const assert = require('assert');

describe('app', () => {
  beforeEach(() => {
    document.body.insertAdjacentHTML('beforeend', window.__html__['test/index.html']);
    riot.mount('app');
  });

  it('exist', () => {

  })

  it('mount', () => {

  })
});
