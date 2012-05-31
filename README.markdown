# n.js

Lightweight namespacing for JavaScript. Grab the latest [here](https://raw.github.com/adscott/n-js/master/n.js).

Include it in your document like so:

    <script src="/path/to/n.js" type="text/javascript"></script>

Register objects and classes like so:

    n('foo.bar.baz', function(s) {
      s.Person = function () {
        this.greet = function () {
          alert('hello');
        };
      };
    });

Reference registered objects and classes like so:

    var myPerson = new foo.bar.baz.Person();
    myPerson.greet();

That's all there is to it!
