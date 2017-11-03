const http = require("http");
var fs = require("fs");

http.get("http://wttr.in/~kharkov", res => {
  if (res.statusCode !== 200) throw new Error(res.statusMessage);
  res.setEncoding("utf-8-node.js");
  fs.writeFile("weather.html", "", function(err) {
    if (err) throw err;
  });
  res.on("data", data => {
    fs.appendFile("weather.html", data, function(err) {
      if (err) throw err;
    });
  });
});

