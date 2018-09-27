"use strict";
const he = require('he');
exports.dequy = function(list,parent=0){
var newcategory = [];
if(list){
for (var key in list) {
	var i = list[key];
	if(i.parent_id == parent){
		if(i.parent_id == parent){
			let sub = this.dequy(list,i.id);
			newcategory.push({
				id:i.id,
				name:i.name,
				description:i.description,
				keyword:i.keyword,
				sub:sub
			})
		}
	}
}}
return newcategory;
}
exports.xoadau = function(string){
var str= string.toLowerCase();
str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
str= str.replace(/đ/g,"d");
str= str.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'| |\"|\&|\#|\[|\]|~/g,"-");
str= str.replace(/-+-/g,"-"); 
str= str.replace(/^\-+|\-+$/g,"");
return str;
}
exports.cutString = function(text,lenght){
	text = text.replace(/<(.|\n)*?>/g, '');
	var newText = text.substr(0, lenght);
	newText = newText.substr(0, Math.min(newText.length, newText.lastIndexOf(" ")));
	return he.decode(newText);
}