var parseSyllable = function(syl) {
	var r = /^([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ]+?)$/;
	var r_vowel = /^([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ])([ིེཻོཽུ]+?)$/;
	var r_sub = /^([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ])([ྭྱྲླཱ]+?)$/;
	var r_super1 = /^(ར)([ྐྒྔྕྗྙྟྡྣྦྨྫ])$/;
	var r_super2 = /^(ལ)([ྐྒྔྕྗྟྡྤྦྷ])$/;
	var r_super3 = /^(ས)([ྐྒྔྙྟྡྣྤྦྨྩ])$/;

	var r_all = /^([གདབམའ]*?)([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ]+?)([ྐྑྒྔྕྖྗྙྟྠྡྣྤྥྦྨྩྪྫྮྯྰྴྶྷྸ]*?)([ྭྱྲླཱ]*?)([ིེཻོཽུ]*?)([གངདནབམའརལས]*?)([དས]*?)$/

	var m = syl.match(r);
	if(m) {
		if(syl.length <= 2) return {syl : syl, root : syl[0]};
		if(syl.length == 3 && syl[2] == "ས" && syl[1].match(/[གངབམ]/)) return {syl : syl, root : syl[0]};
		if(2 < syl.length < 5) return {syl : syl, root : syl[1]};
	}
	m = syl.match(r_sub);
	if(m) return {syl : syl, root : m[1], sub : m[2]};
	m = syl.match(r_vowel);
	if(m) return {syl : syl, root : m[1], vowel : m[2]};
	m = syl.match(r_super1);
	if(m) return {syl : syl, root : String.fromCharCode(m[2].charCodeAt(0)-80), super : m[1]};
	m = syl.match(r_super2);
	if(m) return {syl : syl, root : String.fromCharCode(m[2].charCodeAt(0)-80), super : m[1]};
	m = syl.match(r_super3);
	if(m) return {syl : syl, root : String.fromCharCode(m[2].charCodeAt(0)-80), super : m[1]};
	return {err : 1};
}

if (typeof module !== "undefined") {
	module.exports = parseSyllable;
} else {
	window.parseSyllable = parseSyllable;
}
/*var parseSyllable = function(syl){
	return {base : "ག"}
}

if(typeof moudle !== "undefined") {
	module.exports = parseSyllable;
}else {
	window.parseSyllable = parseSyllable;
}
*/