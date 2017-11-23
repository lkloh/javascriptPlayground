
$(document).ready(function() {

	var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];

    $('#normal_autocomplete').autocomplete({
        source: availableTags
    });

    var myIframe = document.getElementById('disfunctional_iframe').contentWindow.document;
    myIframe.open();
    myIframe.write('<html><head></head><body>Disfunctional: <input id="disfunctional_autocomplete"> </body></html>');
    $('#disfunctional_autocomplete').autocomplete({source: availableTags});

    var workingIframe = document.getElementById('working_iframe').contentWindow.document;
    workingIframe.open();
    workingIframe.write(
    '<html>' +
        '<head>' + 
            '<script src="./external/jquery/jquery.js"></script>' +
            '<script src="./jquery-ui.min.js"></script>' +
        '</head>' +
        '<body> Working: <input id="working_autocomplete"> </body>' + 
    '</html>');


});