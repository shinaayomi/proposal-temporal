// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.date.prototype.getisofields
---*/

const getISOFields = Temporal.Date.prototype.getISOFields;

assert.sameValue(typeof getISOFields, "function");

assert.throws(TypeError, () => getISOFields.call(undefined), "undefined");
assert.throws(TypeError, () => getISOFields.call(null), "null");
assert.throws(TypeError, () => getISOFields.call(true), "true");
assert.throws(TypeError, () => getISOFields.call(""), "empty string");
assert.throws(TypeError, () => getISOFields.call(Symbol()), "symbol");
assert.throws(TypeError, () => getISOFields.call(1), "1");
assert.throws(TypeError, () => getISOFields.call({}), "plain object");
assert.throws(TypeError, () => getISOFields.call(Temporal.Date), "Temporal.Date");
assert.throws(TypeError, () => getISOFields.call(Temporal.Date.prototype), "Temporal.Date.prototype");
