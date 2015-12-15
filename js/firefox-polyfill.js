Q(window).load(function(){
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) { // Firefox only
        var items = document.getElementsByTagName("IMG"); // Get all <img/>

        for (var i = items.length; i--;) {
            var elStyle = window.getComputedStyle(items[i]).mask;
            var svgCode = atob(elStyle.substring(31, elStyle.length - 2));
            
            if (svgCode.charAt(0) == '<') { // If base64 mask decoded successfully
                var l = svgCode.indexOf('>'); // End of <svg>
                var m1 = '<clipPath clipPathUnits="userSpaceOnuse" id="svgicon_' + i + '">';
                var path = svgCode.substring(l + 1, svgCode.length - 6);

                var svgElem = Q(svgCode.substring(0, l + 1) + m1 + path + '</clipPath></svg>');
                svgElem.find('path[fill=none]').remove();
                Q(document.body).append(svgElem);

                items[i].style.clipPath = 'url(#svgicon_' + i + ')';
            }
        }
    }
});
