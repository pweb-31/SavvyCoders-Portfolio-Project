//$( "button.submit-post" ).on( "click", function (){
//    console.log("i clicked the button...")
//} );

//$( "button.submit-post" ).on( "click", function (){
//  var post = $( "textarea.blog-poster" ).val();

// var $input = $( "textarea.blog-poster" );
// var $submit = $( "button.submit-post" );
// var posts = [];

// var publishPostCallback = function() {
//  for( var i = 0; i < posts.length; i++){
//    $content
//    .append( "<section class='post'>" + posts[i] + "<section>" )
//    .append( "<hr>");
//  };
//};

//var addPublishPostButton = function(){
//  $submit.before( "<button class='publish-post'>Publish Now</button>" );

//  $( "button.submit-post" ).on( "click", publishPostCallback );
//};

//  if( post ){

//  posts.push( post );

//  $input.val( "" );

//$submit.on( "submit:post", function(){
//    var post = $input.val();

//      posts = [];

//    $( "button.publish-post" ).remove();
//      } );

//      var $input = $( "textarea.blog-poster" );
//      var $submit = $( "button.submit-post" );
//      var $content = $( ".container" );
//      var posts = [];

//      var publishPostCallback = function(){
//          for( var i = 0; i < posts.length; i++ ){
//              $content
//                  .append( "<section class='post'>" + posts[i] + "</section>"  )
//                  .append( "<hr>" );
//          }
//  using "arrow" function
//      var publishPostCallback = function(){
//        posts.forEach(
//        ( post ) => $content
//            .append( "<section class='post'>" + post + "</section>"  )
//            .append( "<hr>" )
//        );

//      var getPostHTML = function( post ){
//        return "<section> class='post'>" + post + "</section><hr>"
//      }

//      var publishPostCallback = function(){
//        var parsedPosts = posts
//          .filter(
//            ( post ) => post.length > 10
//        );
//        $content.append( parsedPosts );


//          posts = [];

//          $( "button.publish-post" ).remove();
//        };

//      var addPublishPostButton = function(){
//          $submit.before( "<button class='publish-post'>Publish Now</button>" );

//          $( "button.publish-post" ).on( "click", publishPostCallback );
//      }

//      $submit.on( "click", function(){
//          var post = $input.val();

//          if( post ){
//              posts.push( post );

//              $input.val( "" );

//              $( this ).trigger( "submit:post" );
//          }
//      } );

//      $submit.on( "submit:post", function(){
//          if( posts.length === 1 ){
//              addPublishPostButton();
//          }
//      } );

      var $input = $( "textarea.blog-poster" );
      var $submit = $( "button.submit-post" );
      var $content = $( ".container" );
      var posts = [];
      var request = $.ajax( {
          "url": "http://jsonplaceholder.typicode.com/posts"
      } );

      var $titleInput = $( "input.blog-title" );

      var getPostHtml = function( post ){
          return "<section class='post'>" + post + "</section><hr>";
      }

      var appendPosts = function( posts ){
          var parsedPosts = posts
              .filter(
                  ( post ) => post.length > 10
              )
              .map( getPostHtml );

          $content.append( parsedPosts );
      }

      var publishPosts = function(){
          appendPosts( posts );

          posts = [];

          $( "button.publish-post" ).remove();
      }

      var addPublishPostButton = function(){
          $submit.before( "<button class='publish-post'>Publish Now</button>" );

          $( "button.publish-post" ).on( "click", publishPosts );
      }

      request.then( function( postData ){
          var newPosts = postData.map(
              ( post ) => post.body
          );

          appendPosts( newPosts );
      } );

      $submit.on( "click", function(){
          var post = $input.val();

          if( post ){
              posts.push( post );

              $input.val( "" );

              $( this ).trigger( "submit:post" );
          }
      } );

      $submit.on( "submit:post", function(){
          if( posts.length === 1 ){
              addPublishPostButton();
          }
      } );
