  console.log ($("h1")
)
  var $title = $( "h1" );
  var $output = $( "#output");
  var userColor = prompt ( "What color heading would you like?" );

  $title.animate ( {
      "font-size": "500%"
    }, {
      "duration": 2000,
      "complete": function() {
        $title.css ({
          "color": userColor,
          "text-align": "right",
          "font-weight": "bolder"
        } )
      }
  } );

  $title.animate ( {
      "font-size": "200%"
  }, {
      "duration": 4000,
      "complete": function() {
        $title.css ({
          "color": "black",
          "text-align": "center",
          "font-weight": "bolder"
        } )
      }
  } );


  $title.text ( "An even sweeter header!" );
  $output.html ( "<ol><li>step one</li><li>step two</li><li>step three!</li></ol>" );

  console.log ($title.text() );
  console.log ($output.text() );
  console.log ($output.html() );

  //$output.append ( "A text add-on!" );
  //$output.append ( "<h3>An awesome sub-heading</h3>" )

  $( " #output > ol ").prepend(
    $( "<li>" ).text( "step zero")
  );

  $( " #output > ol ").append(
    $( "<li>" ).text( "step four as an appendage" )
  );
