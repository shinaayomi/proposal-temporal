// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Temporal.Time.from handles a property bag if any value is -Infinity
esid: sec-temporal.time.from
---*/

// constrain

let result = Temporal.Time.from({ hour: -Infinity }, { overflow: 'constrain' });
assert.sameValue(result.hour, 0);
assert.sameValue(result.minute, 0);
assert.sameValue(result.second, 0);
assert.sameValue(result.millisecond, 0);
assert.sameValue(result.microsecond, 0);
assert.sameValue(result.nanosecond, 0);
result = Temporal.Time.from({ minute: -Infinity }, { overflow: 'constrain' });
assert.sameValue(result.hour, 0);
assert.sameValue(result.minute, 0);
assert.sameValue(result.second, 0);
assert.sameValue(result.millisecond, 0);
assert.sameValue(result.microsecond, 0);
assert.sameValue(result.nanosecond, 0);
result = Temporal.Time.from({ second: -Infinity }, { overflow: 'constrain' });
assert.sameValue(result.hour, 0);
assert.sameValue(result.minute, 0);
assert.sameValue(result.second, 0);
assert.sameValue(result.millisecond, 0);
assert.sameValue(result.microsecond, 0);
assert.sameValue(result.nanosecond, 0);
result = Temporal.Time.from({ millisecond: -Infinity }, { overflow: 'constrain' });
assert.sameValue(result.hour, 0);
assert.sameValue(result.minute, 0);
assert.sameValue(result.second, 0);
assert.sameValue(result.millisecond, 0);
assert.sameValue(result.microsecond, 0);
assert.sameValue(result.nanosecond, 0);
result = Temporal.Time.from({ microsecond: -Infinity }, { overflow: 'constrain' });
assert.sameValue(result.hour, 0);
assert.sameValue(result.minute, 0);
assert.sameValue(result.second, 0);
assert.sameValue(result.millisecond, 0);
assert.sameValue(result.microsecond, 0);
assert.sameValue(result.nanosecond, 0);
result = Temporal.Time.from({ nanosecond: -Infinity }, { overflow: 'constrain' });
assert.sameValue(result.hour, 0);
assert.sameValue(result.minute, 0);
assert.sameValue(result.second, 0);
assert.sameValue(result.millisecond, 0);
assert.sameValue(result.microsecond, 0);
assert.sameValue(result.nanosecond, 0);

// reject

assert.throws(RangeError, () => Temporal.Time.from({ hour: -Infinity }, { overflow: 'reject' }));
assert.throws(RangeError, () => Temporal.Time.from({ minute: -Infinity }, { overflow: 'reject' }));
assert.throws(RangeError, () => Temporal.Time.from({ second: -Infinity }, { overflow: 'reject' }));
assert.throws(RangeError, () => Temporal.Time.from({ millisecond: -Infinity }, { overflow: 'reject' }));
assert.throws(RangeError, () => Temporal.Time.from({ microsecond: -Infinity }, { overflow: 'reject' }));
assert.throws(RangeError, () => Temporal.Time.from({ nanosecond: -Infinity }, { overflow: 'reject' }));

let calls = 0;
const obj = {
  valueOf() {
    calls++;
    return -Infinity;
  }
};

result = Temporal.Time.from({ hour: obj }, { overflow: 'constrain' });
assert.sameValue(calls, 1, "it fetches the primitive value");
result = Temporal.Time.from({ minute: obj }, { overflow: 'constrain' });
assert.sameValue(calls, 2, "it fetches the primitive value");
result = Temporal.Time.from({ second: obj }, { overflow: 'constrain' });
assert.sameValue(calls, 3, "it fetches the primitive value");
result = Temporal.Time.from({ millisecond: obj }, { overflow: 'constrain' });
assert.sameValue(calls, 4, "it fetches the primitive value");
result = Temporal.Time.from({ microsecond: obj }, { overflow: 'constrain' });
assert.sameValue(calls, 5, "it fetches the primitive value");
result = Temporal.Time.from({ nanosecond: obj }, { overflow: 'constrain' });
assert.sameValue(calls, 6, "it fetches the primitive value");

assert.throws(RangeError, () => Temporal.Time.from({ hour: obj }, { overflow: 'reject' }));
assert.sameValue(calls, 7, "it fails after fetching the primitive value");
assert.throws(RangeError, () => Temporal.Time.from({ minute: obj }, { overflow: 'reject' }));
assert.sameValue(calls, 8, "it fails after fetching the primitive value");
assert.throws(RangeError, () => Temporal.Time.from({ second: obj }, { overflow: 'reject' }));
assert.sameValue(calls, 9, "it fails after fetching the primitive value");
assert.throws(RangeError, () => Temporal.Time.from({ millisecond: obj }, { overflow: 'reject' }));
assert.sameValue(calls, 10, "it fails after fetching the primitive value");
assert.throws(RangeError, () => Temporal.Time.from({ microsecond: obj }, { overflow: 'reject' }));
assert.sameValue(calls, 11, "it fails after fetching the primitive value");
assert.throws(RangeError, () => Temporal.Time.from({ nanosecond: obj }, { overflow: 'reject' }));
assert.sameValue(calls, 12, "it fails after fetching the primitive value");
