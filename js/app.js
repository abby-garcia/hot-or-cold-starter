
// $(document).ready(function(){
	
// 	/*--- Display information modal box ---*/
//   	$(".what").click(function(){
//     	$(".overlay").fadeIn(1000);

//   	});

//   	/*--- Hide information modal box ---*/
//   	$("a.close").click(function(){
//   		$(".overlay").fadeOut(1000);
//   	});

// });


// // When the page loads, JavaScript should start a new game. Since you'll need to be able to start a new game when the user clicks the "New Game" button, you'll want to create a newGame function that does everything necessary to start a new game.

function newGame(){
	//generate new number
	// restart counter
	//clear out feedback
	//clear out <li> with guess
	//

}



// // When a new game starts, a secret number between 1 and 100 should be generated that the user will have to guess. You should write a named function that takes care of this. You should try to start a new game without refreshing or reloading the page.

function numberGenerator(){
	var randomNum = Math.floor((Math.random() * 100) + 1);
    return randomNum;
}




// // The user should get feedback about each guess – if it was too low, too high, or just right. This means that you'll need to write a named function that takes a user guess and determines which feedback to provide.




function feedback(){
	if(input < randomNum){ // how to I get their input answer? There are two inputs on the html and I only want the first one. 
		return "too low!";
	}
	else if(input > randomNum){
		return "too high!"
	}
	else{
		return "just right!"
	}

}


// // choose a range for cold, hot, very hot, very cold..

function coldOrHot(){
	if(input > randomNum + 10 || input < randomNum - 10){
		return "Cold!";
	}
	else if(input > randomNum + 5 || input < randomNum - 5){
		return "Hot!!";
	}
	else if(input > randomNum + 3 || input < randomNum - 3){
		return "Very Hot!";
	}
	else{
		return "Very Cold!";
	}

}



// // Feedback about the guess should appear in div#feedback. By default, when the page loads, the text in this field is set to "Make Your Guess!"

$('#feedback').text(coldOrHot());





// The game should track how many guess the user has made. Feedback about this should appear in span#count (which defaults to 0, when the page loads).

var count = 0;

$('#count').on("click"(function (){
	count++;
}

//for each time someone clicks  , the counter needs to go up 




// The game should also supply users with a list of the numbers they have guessed so far. The CSS for this game is set up in such a way that you can simply add each guessed number as an <li> to ul#guessList.







// You'll need to ensure that users provide valid inputs. Note that the guess text input field has the HTML 5 required flag set, so you won't have to worry about blank guesses being submitted (if the user submits a blank guess, they'll be prompted to supply an input). However, you will need to write code that ensures that the user has supplied a numeric input between 1 and 100.

function validation(num){ // what is the paramenter for this? i'll say "num" for now
	if(num === NaN){
		prompt("Please Provide a Number");
	}
	else(num < 1 || num > 100){
		prompt("Please Provide a Number Between 1 and 100.")
	}
}







// The starter template already contains a button in the upper right hand corner for starting a new game, however, this button does not currently do anything. You'll need to write code that allows users to start a new game without making additional calls to the server. Clicking "New Game" should trigger the JavaScript function that starts a new game.

$('.new').click(function(){
	newGame();
});
