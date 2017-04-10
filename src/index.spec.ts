/// <reference path="../node_modules/@types/node/index.d.ts" />

import { SpyObject } from './index';
import assert = require('assert');

it('smoke test', () => {
    const o = new SpyObject();
    assert(o);
});
