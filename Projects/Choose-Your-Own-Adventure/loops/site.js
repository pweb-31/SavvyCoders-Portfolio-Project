var output = document.querySelector( "#output" );
var outputList = "<ul>";
var counter = 100;

while( counter > 0 ){
	if( counter % 15 === 0 ){
		outputList += "<li>FizzBuzz</li>";
    }
	else if( counter % 5 === 0 ){
		outputList += "<li>Fizz</li>";
    }
	else if( counter % 3 === 0 ){
		outputList += "<li>Buzz</li>";
    }
	else{
		outputList += "<li>" + counter +"</ul>";
    }

	counter--;
}

outputList += "</ul>";

output.innerHTML = outputList;

//rock, paper, scissors

var runRound = function(){
	var userChoice = prompt( "what would you like to play?  Rock, paper or scissors?")
	var rng = Math.random();
	var computerChoice = "Scissors";
	var winner = "computer";

	if( rng < 0.33 ){
		computerChoice = "Rock";
	}
	else if( rng < 0.66 ){
		computerChoice = "Paper"
	}

	if ( computerChoice === "Scissors" && userChoice === "Rock"){
		winner = "user";
	}
	else if ( computerChoice === "Paper" && userChoice === "Scissors"){
		winner = "user";
	}
	else if (computerChoice === "Rock" && userChoice === "Paper"){
		winner = "user";
	}

	if ( computerChoice === userChoice ){
			alert( "There is a tie!" );
			runRound();
	}
	else{
			alert( "the winner was " + winner );
	}
}

var roundCounter = 1;

while( roundCounter <= 5){
	runRound();

	roundCounter ++;
}
