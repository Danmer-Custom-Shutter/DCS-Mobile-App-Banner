jQuery(document).ready(function($) {
	// now you can use jQuery code here with normal $ shortcut formatting
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	var isIphone = ua.indexOf("iphone") > -1; //&& ua.indexOf("mobile");
	var isIpad = ua.indexOf("ipad") > -1; //&& ua.indexOf("mobile");
	if (isAndroid) {
		// Do something!
	}
	if (isIphone || isIpad) {
		// Do something!
		
		
		
	}
});