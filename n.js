var n = function (nsString, register) {
    var current = this;
    var pieces = nsString.split('.');

    for (var i = 0; i < pieces.length; i++) {
        current[pieces[i]] = current[pieces[i]] || {};
        current = current[pieces[i]];
    }

    register(current);
};
