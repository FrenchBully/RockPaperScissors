
//This function determines a random to assign Rock, Paper, or Scissor as compter's choice.
function computerChoice() {
    var randNum = Math.floor((Math.random() * 10)/4);
    if (randNum === 0) {
        return "Rock";
    }
    else if (randNum === 1) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
    
}

var result ="";

//This is the function that compares the varous outcomes of the game.
function startUp(userInput) {   
var compuServe = computerChoice();
    
    if (compuServe === userInput) 
    { 
           result = document.getElementById('result').innerHTML = "A tie is better than nothing";
           
    }
    else if (userInput === "Rock") 
    {
        if (compuServe === "Paper") 
        {
            result = document.getElementById('result').innerHTML = "You Lost";

         
        }
        else 
        {
            result = document.getElementById('result').innerHTML = "You Won";

        }
    }    
    else if (userInput === "Paper") 
    {      
        
        if (compuServe === "Scissor") 
        {
            result = document.getElementById('result').innerHTML = "You Lost";
           

        }
        else 
        {
            result = document.getElementById('result').innerHTML = "You Won";

        }    
    } 
    else if (userInput === "Scissor") 
    {
        if (compuServe === "Rock") 
        {
            result = document.getElementById('result').innerHTML = "You Lost";

        }
        else 
        {
            result = document.getElementById('result').innerHTML = "You Won";
    

        }
    }
    document.getElementById('you').innerHTML = userInput;
    document.getElementById('computer').innerHTML = compuServe;
    counter();
   

  
}

// Function that adds up the results
var won =0;
var lost =0;
var tied =0;



function counter() 
{

    if (result === "You Won") 
    {
     won +=1;   
    }
    else if (result === "You Lost")
    {
      lost +=1;
    }
    else
    {
      tied +=1;   
    }
    
    
    

document.getElementById('winner').innerHTML = won;
document.getElementById('loser').innerHTML =lost;
document.getElementById('even').innerHTML = tied;
   
    
}

function hide() {
  // Get the DOM reference
  var contentId = document.getElementById("doIt");
  // Toggle 
  contentId.style.display == "block" ? contentId.style.display = "none" : 
contentId.style.display = "block"; 
}
