jQuery(function($){
	if (window.location.pathname == "/login" ) {
		var welcomeMessage 	= 'Welcome to Jenkins - CI Server';
		var mainPanel 		= $( '#main-panel' );
		var sidePanel 		= $( '#side-panel' );

		var usernameLabel 	= $('input[name="j_username"]').closest('td').prev('td').addClass('input-label');
		var passwordLabel 	= $('input[name="j_password"]').closest('td').prev('td').addClass('input-label');
		var signupContainer	= $('a[href=signup]').closest('div').addClass('signup-container');
		var loginButton		= $('#yui-gen1-button').addClass('login-button');
		var buttonSpan		= $('.submit-button');

		var loginContainer  = $( '#main-panel div:first' ).addClass( 'login-container' );

		var loginForm 		= $( 'form[name="login"]' ).length;

		if (loginForm) {

			usernameLabel.text( 'Username' );
			passwordLabel.text( 'Password' );

			loginContainer.removeAttr( 'style' );

			loginContainer.wrap ( createDiv( 'login-outer'    ) );
			loginContainer.wrap ( createDiv( 'login-wrapper'  ).prepend(' <h2> ' + welcomeMessage + ' </h2> '));
			buttonSpan.wrap 	( createDiv( 'button-wrapper' ) );

			$( '.login-container div:last' ).removeAttr( 'style' );
		}

		function createDiv ( name ) {
			return $('<div />', {
			"class": name
			});
		}
	}

	$('#header .logo').on('click', function() {
	        window.location.href = $('#jenkins-home-link').attr('href');
	});

	//<div class="maintenance">pServer Maintenance scheduled  11:00PM to 12:00AM on 11/11/11</div>
	$( "#header" ).append( "<div class=\"maintenance\">pServer Downtime from 11:00PM to 12:00AM on 11/11/11</div>" );
	//Blinking effect
	$('#header .maintenance').each(function() {
    var elem = $(this);
    setInterval(function() {
        if (elem.css('visibility') == 'hidden') {
            elem.css('visibility', 'visible');
        } else {
            elem.css('visibility', 'hidden');
        }
    }, 1500);
	});
});
