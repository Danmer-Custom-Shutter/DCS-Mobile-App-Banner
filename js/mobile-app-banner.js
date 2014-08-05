jQuery(document).ready(function($) {
	// now you can use jQuery code here with normal $ shortcut formatting
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	var isIphone = ua.indexOf("iphone") > -1; //&& ua.indexOf("mobile");
	var isIpad = ua.indexOf("ipad") > -1; //&& ua.indexOf("mobile");
	if (isAndroid) {
		// Do something!
		$('#container').before('<div id="mobile-app-alert"><div class="dashicons dashicons-no-alt"></div><img src="/wp-content/plugins/DCS-Mobile-App-Banner/img/app-icon.png" class="app-logo" /><div>Shutter Shopper for iPhone<br/><a href="https://play.google.com/store/apps/details?id=com.chameleonpower.shuttershopper" target="_BLANK" class="view-link">View</a>Danmer Inc.<br/><div class="dashicons-row"><div class="dashicons dashicons-star-filled"></div><div class="dashicons dashicons-star-filled"></div><div class="dashicons dashicons-star-filled"></div><div class="dashicons dashicons-star-filled"></div><div class="dashicons dashicons-star-empty"></div></div><div class="small-text">FREE &mdash; On the App Store</div></div></div>');
		$('#mobile-app-alert').slideDown('slow');
		
	}
	if (isIphone || isIpad) {
		// Do something!
		
		$('#container').before('<div id="mobile-app-alert"><div class="dashicons dashicons-no-alt"></div><img src="/wp-content/plugins/DCS-Mobile-App-Banner/img/app-icon.png" class="app-logo" /><div>Shutter Shopper for iPhone<br/><a href="https://itunes.apple.com/us/app/shutter-shopper/id890489820?mt=8" target="_BLANK" class="view-link">View</a>Danmer Inc.<br/><div class="dashicons-row"><div class="dashicons dashicons-star-filled"></div><div class="dashicons dashicons-star-filled"></div><div class="dashicons dashicons-star-filled"></div><div class="dashicons dashicons-star-filled"></div><div class="dashicons dashicons-star-empty"></div></div><div class="small-text">FREE &mdash; On the App Store</div></div></div>');
		$('#mobile-app-alert').slideDown('slow');
		
	}
	
	$('#mobile-app-alert .dashicons-no-alt').on('click', function(){
		$('#mobile-app-alert').slideUp('slow');
	});
});