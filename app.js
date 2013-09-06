document.observe("dom:loaded", function() {
	$('footer').insert($('right-top-nav').innerHTML);
	$('right-top-nav').update($('login-field').innerHTML);
	
	tables = $$('body table');
	tables[tables.length-1].toggleClassName('footer-table');
	
	$('main-table').wrap('div', { 'id': 'main-table-wrap' });
	
	$('main-table').style = null;
	
	logoRow = new Element('tr').update('<td colspan="2" id="rackspace-logo"></td>');
	$$('#main-table tbody :first-child')[0].insert({
		before: logoRow
	});
});
