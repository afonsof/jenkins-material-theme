window.onload = function() {
//	jQuery('body table').last().addClass('footer-table');
//	jQuery('#main-table').wrap('<div id="main-table-wrap" />');
//	jQuery('#main-table').removeAttr('style');
//	jQuery('#main-table tbody').first().prepend('<tr><td colspan="2" id="rackspace-logo"></td></tr>');
//	jQuery('.behavior-loading').hide();
	$('right-top-nav').insert($('login-field').innerHTML);
//	tables = $$('body').childElements.grep(new Selector('table'));
//	lastTable = tables[tables.length-1].wrap('div', { 'class': 'main-table-wrap' });
	$$('body')[0].setStyle({
	  display: 'block'
	});
};

