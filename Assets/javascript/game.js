    
    // Words To Chose From
    var Words = ["Batman", "Superman", "Ironman", "Spiderman", "Thanos", "WonderWoman", "Aquaman", "Thor", "Flash", "CaptainAmerica"];

    // Tries
    var Tries = 10;
    
    // Wins
    var Wins = 0;

    // Loses
    var Loses = 0;

    // Letters The User Tries
    var GuessedLetter = [], arr, Letter;

    // Choose The word
    var Guess = Words[Math.floor(Math.random()*Words.length)];
    
    // Testing Stats Updates
    var Stats = ["Wins = " + Wins, "Loses = " + Loses, "Tries = " + Tries];

    // Print Word
    function Print() {
        document.getElementById("Word").innerHTML = "";
        var Div = document.createElement("div");
        for (var i = 0; i < Guess.length; i++) {
            var Hidden = [];
            Hidden[i] = document.createTextNode("_ ");
            Div.appendChild(Hidden[i]);
            document.getElementById("Word").appendChild(Div);
            console.log("_ ");
        } //For
        Guess = Guess.toLowerCase();
        arr = Guess.split('');
    }//Function

    // User Guess
    var NewWord = [];
    var Correct = false;
    document.onkeyup = function(event) {
        if ((Tries > 1) && (Correct == false)) {
            var Good = false;
            Letter = event.key;
            // Check If Letter Is Correct
            for (var i = 0; i < arr.length; i++) {
                if (Letter === arr[i]) {
                    Good = true;
                    New();
                    NewWord.push(Letter);
                    Group();
                    Complete();
                } // If
            } // For
            if (Good == false) {
                Try();
                Group();
            }
        } // If
        else if (Tries <= 1) {
            LFunction();
        } // Else
    }// Function

    // Check If The Word Is Completed
    function Complete() {
        if (NewWord.length === arr.length) {
            Correct = true;
            Group();
            WFunction();  
        } 
        else {
            Correct = false;
        } 
    }

    // Reset Game
    function Reset() {
        Tries = 10;
        GuessedLetter = [];
        Correct = false;
        NewWord = [];
        Guess = Words[Math.floor(Math.random()*Words.length)];
        document.getElementById("Tries").innerHTML = ("Tries = " + Tries);
        document.getElementById("Letter").innerHTML = ("Guessed Letters = [" + GuessedLetter + "]");
        Print();
    } 

    // Wins Function
    function WFunction() {
        Wins++;
        alert("You Win!");
        document.getElementById("Wins").innerHTML = ("Wins = " + Wins);
        Reset();        
    }

    // Loses Function
    function LFunction() {
        Loses++;
        alert("You Lose!");
        document.getElementById("Loses").innerHTML = ("Loses = " + Loses);
        Reset();
    }

    // Tries Function 
    function Try() {
        if (GuessedLetter.indexOf(Letter) === -1) {
        Tries--;
        document.getElementById("Tries").innerHTML = ("Tries = " + Tries);
        console.log("Tries = " + Tries);
        }
    }

    // Guessed Letters
    function Group() {
        var Div = document.createElement("div");
        if (GuessedLetter.indexOf(Letter) === -1) {
            GuessedLetter.push(Letter);
            document.getElementById("Letter").innerHTML = ("Guessed Letters = [" + GuessedLetter + "]");
            console.log("Guessed Letters = [" + GuessedLetter + "]");
        } else if (GuessedLetter.indexOf(Letter) > -1) {
            console.log("Guessed Letters = [" + GuessedLetter + "]");
        }
    }

    // Rewrite Word
    function New() {
            if (arr.indexOf(Letter) === -1) {
                console.log("_ ");
                document.getElementById("Word").innerHTML = ("_ ");
            } // If
            else if (arr.indexOf(Letter) > -1) {
                console.log(Letter);
                arr.indexOf(Letter) == Letter;
                document.getElementById("Word").innerHTML = arr;
            } // Else
    }

    // Main
    function Display() {
        var Div1 = document.createElement("div");
        var Div2 = document.createElement("div");
        var Div3 = document.createElement("div");
        var TWins = document.createTextNode(Stats[0]);
        Div1.appendChild(TWins);
        document.getElementById("Wins").appendChild(Div1);

        var TLoses = document.createTextNode(Stats[1]);
        Div2.appendChild(TLoses);
        document.getElementById("Loses").appendChild(Div2);

        var TTries = document.createTextNode(Stats[2]);
        Div3.appendChild(TTries);
        document.getElementById("Tries").appendChild(Div3);
        console.log("Wins = " + Wins);
        console.log("Loses = " + Loses);
        console.log("Tries = " + Tries);
    }

    Print();
    Display();
    console.log("Guessed Letters = []");

    //Display The Letters
    var Div = document.createElement("div");
    var Default = document.createTextNode("Guessed Letters = []");
    Div.appendChild(Default);
    document.getElementById("Letter").appendChild(Div);