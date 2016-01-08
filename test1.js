var fs = require("fs");
var parseSyllable = require("./parsesyllable_advance.js");
var syls = fs.readFileSync("./testsyl2.txt", "utf8");
var arr = syls.split(/\r?\n/);
var out = [];

console.time("a");
arr.map(function(ch, idx) {
	var parsed = parseSyllable(ch, idx);
	out.push(parsed);
});
console.timeEnd("a");
console.log(out);