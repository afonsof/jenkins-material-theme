var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.10.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

window.onload = function() {
	jQuery.noConflict();
	jQuery('#right-top-nav').append(jQuery('#login-field').html());
	jQuery('body table').last().addClass('footer-table');
	jQuery('#main-table').wrap('<div id="main-table-wrap" />');
	jQuery('#main-table').removeAttr('style');
	jQuery('#main-table tbody').first().prepend('<tr><td colspan="2" id="rackspace-logo"></td></tr>');
	jQuery('.behavior-loading').hide();
	jQuery('body').show();
};

