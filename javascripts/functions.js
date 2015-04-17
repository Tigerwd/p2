var isArmstrong = function(n){
	"use strict";
	var sum = 0;
	//convert to string
	n= String(n);
	//traverse n
	for(var i=0; i<n.length; ++i){
		sum = sum + Math.pow(n[i], n.length);
	}
	if(n==sum){
	return true;
	}
	else return false;
};

var allArmstrongs = function(){
	var result = "";
	var isArmstrong = function(n){
	"use strict";
	var sum = 0;
	//convert to string
	n= String(n);
	//traverse n
	for(var i=0; i<n.length; ++i){
		sum = sum + Math.pow(n[i], n.length);
	}
	if(n==sum){
	return true;
	}
	else return false;
};
	for (var i =1; i<= 99999; i++){
		if(isArmstrong(i)){
			result=result+ i + " "
		}	
	}
	return result;
};

var allSubstrings1 = function(s){
	//Enter s within quotation marks ""
	"use strict";
	var result = "";
	for (var i = 0; i<s.length; i++){
		for(var y=i+1; y<= s.length-i; ++y){
			var sa = s.substring(i, y);
			result= result + sa + ", ";
		}
	}
	return result;
};

var allSubstrings2 = function(s){
	//Enter s within quotation marks ""
	"use strict";
	var substrarray = [];
	
	for (var i = 0; i<s.length; i++){
		for(var y=i+1; y<= s.length-i; ++y){
			var sa = s.substring(i, y);
			substrarray.push(sa)
		}
	}
	return substrarray;
};

var maxWord = function(s){
	//Enter s within quotation marks ""
	"use strict";
	var string = s.split(" ");
    var wordlen = 0;
    var word = null;

    for (var i = 0; i < string.length; i++) {
        if (wordlen < string[i].length) {
            wordlen = string[i].length;
            word = string[i];
        }
    }
    return word;
};