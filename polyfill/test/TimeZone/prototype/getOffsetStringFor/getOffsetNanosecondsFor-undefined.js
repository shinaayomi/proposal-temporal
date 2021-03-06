// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone.prototype.getoffsetstringfor
---*/

const absolute = Temporal.Absolute.from("1975-02-02T14:25:36.123456789Z");
const timeZone = Temporal.TimeZone.from("Europe/Madrid");
timeZone.getOffsetNanosecondsFor = undefined;
assert.sameValue(timeZone.getOffsetStringFor(absolute), "+01:00");
