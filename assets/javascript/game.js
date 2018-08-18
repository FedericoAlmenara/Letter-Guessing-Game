
//These are the choices for the computer
    // JavaScript function that wraps everything
  

    var alphabet = ['a', 'b', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var userGuess = null;
   
    //This is how the computer makes a choice
   
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log("Computer Guess: " + computerChoice)
    console.log("Wins:", wins, "Losses: ", losses, "Guesses: ", guesses)


   
    //when a key is pressed it triggers this function
    document.onkeypress = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    // these are the various options
    if(userGuess === computerChoice){
        wins++;  

    } else {
        guesses--;
    }
    console.log(guesses);
    if(guesses===0){
        losses++;
        guesses=10;
        
    }
   
    $('#button-clear').click(function() {
        console.log(computerChoice)
    });
  
    //Down here is where I wanted to change the html document to display the wins and losses
    

 
    document.getElementById("Wins").innerHTML = wins;
    document.getElementById("Losses").innerHTML = losses;
    document.getElementById("Guesses").innerHTML = guesses;
}