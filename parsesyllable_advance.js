var parseSyllable_advance = function(syl, i) {
	//prescript, root, superscript, subscript, vowel, postscript, post-postscript
//	var r = /^([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ]+?)$/;
//	var r_vowel = /^([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ])([ིེཻོཽུ]+?)$/;
//	var r_sub = /^([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ])([ྭྱྲླཱ]+?)$/;

	var r_super1 = /^([གདབམའ]?)(ར)([ྐྒྔྕྗྙྟྡྣྦྨྫ])([ྭྱྲླཱ]*?)([ིེཻོཽུ]*?)([གངདནབམའརལས]?)([དས]?)$/;
	var r_super2 = /^([གདབམའ]?)(ལ)([ྐྒྔྕྗྟྡྤྦྷ])([ྭྱྲླཱ]*?)([ིེཻོཽུ]*?)([གངདནབམའརལས]?)([དས]?)$/;
	var r_super3 = /^([གདབམའ]?)(ས)([ྐྒྔྙྟྡྣྤྦྨྩ])([ྭྱྲླཱ]*?)([ིེཻོཽུ]*?)([གངདནབམའརལས]?)([དས]?)$/;

    var r_only2 = /^([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ])([གངདནབམའརལས]?)$/;
	var r_only3up = /^([གདབམའ]?)([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ])([གངདནབམའརལས]?)([དས]?)$/;
	var r_vowel_sub = /^([གདབམའ]?)([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ])([ྭྱྲླཱ]*?)([ིེཻོཽུ]*?)([གངདནབམའརལས]?)([དས]?)$/;

	var m = syl.match(r_only2); //2個字母以下
	if(m && syl.length <= 2) {
		return {syl : syl, pre : "",  root : m[1], super : "",
		 sub : "", vowel : "", post : m[2], ppost : ""};
	}
	m = syl.match(r_only3up); //3or4以上字母
	if(m && 2 < syl.length < 5) {
		return {syl : syl, pre : m[1],  root : m[2], super : "", sub : "", vowel : "", post : m[3], ppost : m[4]};
	}
	m = syl.match(r_super1); //上加1
	if(m) {
		m[3] = String.fromCharCode(m[3].charCodeAt(0)-80);
		return {syl : syl, pre : m[1],  root : m[3], super : m[2], sub : m[4], vowel : m[5], post : m[6], ppost : m[7]};
	}
	m = syl.match(r_super2); //上加2
	if(m) {
		m[3] = String.fromCharCode(m[3].charCodeAt(0)-80);
		return {syl : syl, pre : m[1],  root : m[3], super : m[2], sub : m[4], vowel : m[5], post : m[6], ppost : m[7]};
	}
	m = syl.match(r_super3); //上加3
	if(m) {
		m[3] = String.fromCharCode(m[3].charCodeAt(0)-80);
		return {syl : syl, pre : m[1],  root : m[3], super : m[2], sub : m[4], vowel : m[5], post : m[6], ppost : m[7]};
	}
	m = syl.match(r_vowel_sub); //母音下加
	if(m) {
		return {syl : syl, pre : m[1],  root : m[2], super : "", sub : m[3], vowel : m[4], post : m[5], ppost : m[6]};
	}



	return {syl : syl, mes : "can't parse"};
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