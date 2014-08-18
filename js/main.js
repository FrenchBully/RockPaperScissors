
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


//This is the function that compares the varous outcomes of the game.
function startUp(userInput) {   
var compuServe = computerChoice();
    if (compuServe === userInput) 
    { 
            document.getElementById('result').innerHTML = "A tie is better than nothing";
    }
    else if (userInput === "Rock") 
    {
        if (compuServe === "Paper") 
        {
            document.getElementById('result').innerHTML = "You Lost";
          
        }
        else 
        {
            document.getElementById('result').innerHTML = "You Won";
        
        }
    }    
    else if (userInput === "Paper") 
    {      
        
        if (compuServe === "Scissor") 
        {
            document.getElementById('result').innerHTML = "You Lost";
            
        }
        else 
        {
            document.getElementById('result').innerHTML = "You Won";

        }    
    } 
    else if (userInput === "Scissor") 
    {
        if (compuServe === "Rock") 
        {
            document.getElementById('result').innerHTML = "You Lost";
           
        }
        else 
        {
            document.getElementById('result').innerHTML = "You Won";

        }
    } 
    
  
    document.getElementById('you').innerHTML = userInput;
    document.getElementById('computer').innerHTML = compuServe;
 
 


    
}



















