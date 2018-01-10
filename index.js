"use strict";

module.exports = function combineStyles(b) {
  return Object.keys(
    b.reduce(function(c, d) {
      return Object.assign({}, c, d);
    }, {})
  ).reduce(function(c, d) {
    return Object.assign(
      {},
      c,
      Object.defineProperty({}, d, {
        value: b
          .filter(function(e) {
            return !!e[d];
          })
          .map(function(e) {
            return e[d];
          })
          .join(" "),
        enumerable: !0
      })
    );
  }, {});
};
