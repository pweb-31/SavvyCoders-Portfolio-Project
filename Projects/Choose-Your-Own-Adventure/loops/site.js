var output = document.querySelector( "#output" );
var counter = 100;

while( counter > 0 ){
	if( counter % 15 === 0 ){
		console.log( "FizzBuzz" );
    }
	else if( counter % 5 === 0 ){
		console.log( "buzz" );
    }
	else if( counter % 3 === 0 ){
		console.log( "fizz" );
    }
	else{
		console.log( counter );
    }

	counter--;
}

output.innerHTML = ""
