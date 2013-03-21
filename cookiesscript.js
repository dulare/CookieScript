/*!
 * Cookie Policy script v0.0.1
 * 
 * Copyright 2013 Pawel Dulak
 * Released under the MIT license
 */

var CookieScriptFirstLineOfText = 'By using this page you are agree to for the <a href="cookiespolicy.htm">Cookies Policy</a> and usage of cookies. Some of them can be already placed in your browser folder.';
var CookieScriptSecondLineOfText = 'Understood, do not show this window again.';

function CookieScriptSetCookie(c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function CookieScriptGetCookie(c_name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name) {
			return unescape(y);
		}
	}
}

function CookieScriptInsertDiv() {
	$('body').append('<div id="cookiesDiv"><p>' 
					+ CookieScriptFirstLineOfText 
					+ '</p><p><a href="cookiespolicy.htm?accepted" id="cookiesPolicyAccepted">' 
					+ CookieScriptSecondLineOfText 
					+ '</a></p></div>');	
}

$(document).ready(function() {
	if (CookieScriptGetCookie('cookiesPolicyAccepted')) {
		//nothing to do, policy accepted
	} else {
		CookieScriptInsertDiv();
		
		$('#cookiesDiv').fadeIn();
	
		$('#cookiesPolicyAccepted').click(function() {
			CookieScriptSetCookie('cookiesPolicyAccepted','1',9999);
			$('#cookiesDiv').fadeOut();
			return false;
		}) 
	}
});
 
