var n = function (nsString, register) {
  var build = function (root, packageNames) {
    var current = packageNames.shift();
    root[current] = root[current] || {};
    return packageNames.length > 0 ? build(root[current], packageNames) : root[current];
  };

  register(build(window, nsString.split('.')));
};
