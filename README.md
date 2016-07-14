Template
=======

template creator for the browser and node.js

```javascript
var template = require("@nathanfaucett/template");


var templateFn = template("<p><%= text %></p>");


templateFn({
    text: "Hello World!"
}) === "<p>Hello World!</p>");
```
