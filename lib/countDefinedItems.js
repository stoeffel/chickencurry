"use strict";

module.exports = function (args) {
  return (function () {
    var _length = [];

    for (var _iterator = args, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;
      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }
      var i = _ref;
      if (typeof i !== "undefined") {
        _length.push(i);
      }
    }

    return _length;
  })().length;
};