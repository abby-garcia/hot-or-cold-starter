//Global Variables Here
var randomNum;
var count;




$(document).ready(function(){
	newGame();
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	// 
  	$("form").submit(function(){
  		var input = $('#userGuess').val();
  		$('#userGuess').val("");
  		if(validation(input)){
  			$('#feedback').text(coldOrHot(input));
  			count++;
  			$('#count').html(count);
  			$('#guessList').append("<li>" + input + "</li>");
  		}	


  		return false; // tells the form not to submit it 
  	});



});







// // When the page loads, JavaScript should start a new game. Since you'll need to be able to start a new game when the user clicks the "New Game" button, you'll want to create a newGame function that does everything necessary to start a new game.

function newGame(){
	numberGenerator();
	count = 0;
	$('#count').html(count);
	$('#feedback').html('Make Your Guess!');
	$('#guessList').html("");
	//

}



// // When a new game starts, a secret number between 1 and 100 should be generated that the user will have to guess. You should write a named function that takes care of this. You should try to start a new game without refreshing or reloading the page.


function numberGenerator(){
	randomNum = Math.floor((Math.random() * 100) + 1);
}



// // choose a range for cold, hot, very hot, very cold..

function coldOrHot(input){
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







// The game should track how many guess the user has made. Feedback about this should appear in span#count (which defaults to 0, when the page loads).





//for each time someone clicks  , the counter needs to go up 




// The game should also supply users with a list of the numbers they have guessed so far. The CSS for this game is set up in such a way that you can simply add each guessed number as an <li> to ul#guessList.







// You'll need to ensure that users provide valid inputs. Note that the guess text input field has the HTML 5 required flag set, so you won't have to worry about blank guesses being submitted (if the user submits a blank guess, they'll be prompted to supply an input). However, you will need to write code that ensures that the user has supplied a numeric input between 1 and 100.

function validation(num){ // what is the paramenter for this? i'll say "num" for now
	if(isNaN(num)){
		alert("Please Provide a Number");
		return false; 
	}
	else if(num < 1 || num > 100){
		alert("Please Provide a Number Between 1 and 100.");
		return false;
	}
	else{
		return true;
	}

}







// The starter template already contains a button in the upper right hand corner for starting a new game, however, this button does not currently do anything. You'll need to write code that allows users to start a new game without making additional calls to the server. Clicking "New Game" should trigger the JavaScript function that starts a new game.

$('.new').click(function(){
	newGame();
});
