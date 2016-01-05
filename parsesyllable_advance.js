var parseSyllable_advance = function(syl) {
	//prescript, root, superscript, subscript, vowel, postscript, post-postscript
	var r = /^([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ]+?)$/;
	var r_vowel = /^([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ])([ིེཻོཽུ]+?)$/;
	var r_sub = /^([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ])([ྭྱྲླཱ]+?)$/;
	var r_super1 = /^(ར)([ྐྒྔྕྗྙྟྡྣྦྨྫ])$/;
	var r_super2 = /^(ལ)([ྐྒྔྕྗྟྡྤྦྷ])$/;
	var r_super3 = /^(ས)([ྐྒྔྙྟྡྣྤྦྨྩ])$/;
    
    var r_only2 = /^([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ]{1})([གངདནབམའརལས]{0,1})([དས]{0,1})$/;
	var r_only3up = /^([གདབམའ]{0,1})([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ]{1})([གངདནབམའརལས]{0,1})([དས]{0,1})$/;
	var r_all = /^([གདབམའ]{0,1})([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ]{1})([ྐྑྒྔྕྖྗྙྟྠྡྣྤྥྦྨྩྪྫྮྯྰྴྶྷྸ]*?)([ྭྱྲླཱ]*?)([ིེཻོཽུ]*?)([གངདནབམའརལས]{0,1})([དས]{0,1})$/;

	var m = syl.match(r_only2); //2個字母
	if(m && syl.length <= 2) {
		return {syl : syl, pre : "",  root : m[1], super : "", sub : "", vowel : "", post : m[2], ppost : m[3]};
	}
	m = syl.match(r_only3up); //3or4以上字母
	if(m && 2 < syl.length < 5) {
		return {syl : syl, pre : m[1],  root : m[2], super : "", sub : "", vowel : "", post : m[3], ppost : m[4]};
	}
	return "ya";
//	m = syl.match(r_all);
//	if(m) {
//		if(m[2] && !m[3] && !m[4] && !m[5]) {
//			if(m[2].length <= 2 ) {
//				return {syl : syl, pre : m[1],  root : m[2][0], super : "", sub : "", vowel : "", post : m[6], ppost : m[7]};
//			}
//			if(2 < m[2].length <5) return {syl : syl, pre : m[1],  root : m[2][1], super : "", sub : "", vowel : "", post : m[6], ppost : m[7]};
//		}
//		return {syl : syl, pre : m[1],  root : m[2], super : "", sub : m[4], vowel : m[5], post : m[6], ppost : m[7]};

//	}


/*	var m = syl.match(r);
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
	return {err : 1}; */
}

if (typeof module !== "undefined") {
	module.exports = parseSyllable_advance;
} else {
	window.parseSyllable_advance = parseSyllable_advance;
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