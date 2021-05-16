var filterEx = require("./mymodule.js");
var dir = process.argv[2];
var filterExt = process.argv[3];

filterEx(dir, filterExt, function (err, list) {
  if (err) return console.error(err);

  list.forEach(function (file) {
    console.log(file);
  });
});
