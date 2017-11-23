
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

    var myIframe = document.getElementById('my_iframe').contentWindow.document;
    myIframe.open();
    myIframe.write('<html><head></head><body>input: <input id="input_autocomplete"> </body></html>');

    $('#input_autocomplete').autocomplete({
        source: availableTags
    });

});