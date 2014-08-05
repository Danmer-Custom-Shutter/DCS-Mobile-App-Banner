<?php
/*
Plugin Name: DCS Mobile App Banner
Plugin URI: http://m.danmer.com/
Description: Promoting Mobile App on Mobile Devices
Version: 1.1.5
Author: Bradford Knowlton
Author URI: http://bradknowlton.com/
License: GPLv2
GitHub Plugin URI: https://github.com/Danmer-Custom-Shutter/DCS-Mobile-App-Banner
GitHub Branch:     master
*/

function dcs_mobile_appl_banner_enqueue_scripts() { // Our own unique function
	wp_enqueue_script( 'dcs-mab-js', plugins_url( 'js/mobile-app-banner.js', __FILE__ ), array('jquery'),'',true  );

	wp_enqueue_style( 'dcs-mab-css', plugins_url( 'css/mobile-app-banner.css', __FILE__ ) );
}

//Hooks our custom function into WP's wp_enqueue_scripts function
add_action( 'wp_enqueue_scripts', 'dcs_mobile_appl_banner_enqueue_scripts' ); 


