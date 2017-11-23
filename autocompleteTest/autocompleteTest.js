
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

    $('#normal_autocomplete').autocomplete({source: availableTags});

    var myIframe = document.getElementById('disfunctional_iframe').contentWindow.document;
    myIframe.open();
    myIframe.write('<html><head></head><body>Disfunctional: <input id="disfunctional_autocomplete"> </body></html>');
    $('#disfunctional_autocomplete').autocomplete({source: availableTags});
    myIframe.close();

    var workingIframe = document.getElementById('working_iframe').contentWindow.document;
    workingIframe.open();
    workingIframe.write(
    '<html>' +
        '<head>' + 
            '<script src="./external/jquery/jquery.js"></script>' +
            '<script src="./jquery-ui.min.js"></script>' +
            '<script>' +
                'console.log("YOLO")' +
                '$("working_autocomplete").css("color", "red");' +
            '</script>' +
        '</head>' +
        '<body> Working: <input id="working_autocomplete"> </body>' + 
    '</html>');
    workingIframe.close();

    var $html = "<html><head id='myhead'><title>titleTest</title></head><body class='my_awesome_body'><a href='test0'>test01</a><a href='test1'>test02</a><a href='test2'>test03</a></body></html>";
    var re_head = new RegExp("<head[^>]*>\s*((?:.|\n)*?)</head>", "i");
    var re_body = new RegExp("<body[^>]*>(.*?|\n)<\/body>", "i");
    console.log(re_head.exec($html)[1]);
    console.log(re_body.exec($html)[1]);

});