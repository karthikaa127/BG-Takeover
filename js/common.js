/********************************************************************************

  This tool is for changing the backround and take-over sections of the webpage

********************************************************************************/

jQuery(document).ready(function() {
		
	var bgHolderLeft = jQuery("#bg-takeover-left");
	var toHrefLeft = "https://www.google.co.in"
	var toAltLeft = "Left Link";
	var bgHolderRight = jQuery("#bg-takeover-right");
	var toHrefRight = "http://in.yahoo.com/"
	var toAltRight = "Right Link";
	setTakeoverDiv(bgHolderLeft, toHrefLeft, "_self", toAltLeft);
	setTakeoverDiv(bgHolderRight, toHrefRight, "_self", toAltRight);

});

function setTakeoverDiv(bgHolder, toHref, target, toAlt, toLocale) {
	var html = "<a href='" + toHref + "' target='" + target + "' alt='" + toAlt + "'><img src='' /></a>";
	bgHolder.append(html);
};