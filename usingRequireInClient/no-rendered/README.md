
Running `node index.js` works find with importing lodash.

Opening index.html in the browser displays nothing,
as `require` does not exist in client-side javaScript.
[Here's why](https://stackoverflow.com/questions/19059580/client-on-node-uncaught-referenceerror-require-is-not-defined).

See `webpack-demo` on how its done.