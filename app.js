/**
 * Canon for Jenkins Javascript Overrides
 *
 * Leverages Jankins-included Prototype.js
 *
 * @author Rackspace Web Team
 * @version 0.1
 */
document.observe("dom:loaded", function () {
    // Copy auto-refresh link into footer
    $('footer').insert($('right-top-nav').innerHTML);
    // Replace auto-refresh link in breadcrumb with login links
    $('right-top-nav').update($('login-field').innerHTML);
    // Gather tables
    var tables = $$('body table');
    // Add footer-table class to last (footer) table
    tables[tables.length - 1].toggleClassName('footer-table');
    // Wrap main table with wrapper div to provide textures background between header and footer
    $('main-table').wrap('div', { 'id': 'main-table-wrap' });
    // Clear style attribute for main table
    $('main-table').setStyle({background:"none"});
    // Create table row with Rackspace logo and search field cells
    var logoRow = new Element('tr').update('<td colspan="2" id="rackspace-logo"></td><td id="search-wrap"></td>');
    // Prepend logo row to main table body
    $$('#main-table tbody :first-child')[0].insert({
        before: logoRow
    });
    // Copy search form into search-wrap
    $('search-wrap').update($$('#top-panel table td:nth-child(2)')[0].innerHTML);
    // Grab searchbox
    var searchbox = $$('#search-wrap #searchform #search-box')[0];
    // Set search field input type to text
    searchbox.type = 'text';
    // Clear style attribute for search field
    searchbox.style = null;
    // Click logo, go home.
    $('rackspace-logo').on('click', function(){ location = '/'; });
});
