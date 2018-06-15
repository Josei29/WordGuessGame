    // Words To Chose From
    var Words = ["Batman", "Superman"];

    // Tries
    var Tries = 10;
    
    // Wins
    var Wins = 0;

    // Loses
    var Loses = 0;

    // Letters The User Tries
    var GuessedLetter = [];

    // Choose The word
    var Guess = Words[Math.floor(Math.random()*Words.length)];

    // Print Word
    function Print() {
        for (var i = 0; i < Guess.length; i++) {
            document.write("_ ");
        } //For
        Guess = Guess.toLowerCase();
    }//Function

    // User Guess
    document.onkeyup = function(event) {
        var Letter = event.key;
        // Check If Letter Is Correct
        if (Tries > 0) {
            for (var i = 0; i < Guess.length; i++) {
                if (Letter === Guess[i]) {
                    console.log(Letter);
                } // If
                else {
                    return Tries--;
                } //else
            } // For
        } //If
        else {
            Loses++;
        }
    }//Function

    // Wins Function
    function WFunction() {
        console.log(Wins);
    }

    // Loses Function
    function LFunction() {
        console.log(Loses);
    }

    Print();
    WFunction();
    LFunction();
    console.log(Tries);

