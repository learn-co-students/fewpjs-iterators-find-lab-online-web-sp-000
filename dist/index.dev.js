"use strict";

var testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(record) {
  if (record.find(function (r) {
    return r.result == "W";
  })) {
    return record.find(function (r) {
      return r.result == "W";
    }).year;
  } else {
    return undefined;
  }
}