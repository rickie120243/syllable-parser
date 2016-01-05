var parseSyllable = require("../parsesyllable.js");
var parseSyllable_advance = require("../parsesyllable_advance.js");
var a = 1;
var assert = require("assert");
describe("parsesyllable", function() {  //test>mocha -w 監控
//	it("ka", function() {  //裡面幾乎不寫迴圈
//		var parsed = parseSyllable("ག")
//		assert.equal(parsed.base, "ག")
//		console.log("fffaaaaf")
//	});

	it("simple root", function() {
		var rootchars = "ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ".split("");
		rootchars.map(function(ch) {
			var parsed = parseSyllable(ch);
			assert.equal(parsed.root, ch);
		});
	});
	it("complicate root", function() {
		var rootchars = "ཀཁག་ངཅཆཇ་ཉཏ་ཐདན་པཕབམ་ཙ་ཚཛ་ཝཞཟ་འཡརལ་ཤས་ཧཨ".split("་");
		var ansch = ['ཁ', 'ཅ', 'ཉ', 'ད', 'ཕ', 'ཙ', 'ཚ', 'ཞ', 'ཡ', 'ཤ', 'ཧ'];
		rootchars.map(function(ch, idx) {
			var parsed = parseSyllable(ch);
			assert.equal(parsed.root, ansch[idx]);
		});
	});

	it("with vowels and sub", function() {
		var syl = "གུ";
		var parsed = parseSyllable(syl); 
		assert.equal(parsed.root , "ག");
		assert.equal(parsed.vowel , "ུ");
	});
	it("with rule no.4", function() {
		var syl = "ཀགས";
		var parsed = parseSyllable(syl);
		assert.equal(parsed.root , "ཀ");
	});
	it("r super1", function() {
		var syl = "རྦ";
		var parsed = parseSyllable(syl);
		assert.equal(parsed.root, "བ");
		assert.equal(parsed.super, "ར");
	});
	it("r super2", function() {
		var syl = "ལྐ";
		var parsed = parseSyllable(syl);
		assert.equal(parsed.root, "ཀ");
		assert.equal(parsed.super, "ལ");
	});
	it("r super3", function() {
		var syl = "སྣ";
		var parsed = parseSyllable(syl);
		assert.equal(parsed.root, "ན");
		assert.equal(parsed.super, "ས");
	});
	
})
describe("parsesyllable_advance", function() { 
	it("simple root", function() {
		var rootchars = "ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ".split("");
		rootchars.map(function(ch) {
			var parsed = parseSyllable_advance(ch);
//			console.log(parsed);
			assert.equal(parsed.root, ch);
		});
	});
	it("complicate root", function() {
		var rootchars = ["ཤར", "དང", "ནང", "བཀའ", "བསམ", "མངགས", "བཧགས"];
		var ansch = ['ཤ', 'ད', 'ན', 'ཀ', 'ས', 'ང', 'ཧ'];
		rootchars.map(function(ch, idx) {
			var parsed = parseSyllable_advance(ch);
//			console.log(parsed);
			assert.equal(parsed.root, ansch[idx]);
		});
	});
	it("super/vowel/sub", function() {
		var rootchars = ["དགོས", "ལྔ", "ཞུགས", "མསྩེམས"];
		var ansch = ['ག', 'ང', 'ཞ', 'ཙ'];
		rootchars.map(function(ch, idx) {
			var parsed = parseSyllable_advance(ch);
//			console.log(parsed);
			assert.equal(parsed.root, ansch[idx]);
		});
	});
})