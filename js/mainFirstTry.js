


//User needs to inputs choice (rock, paper, scissor)

//console.log(userInput);
function cC() {
var randNum = Math.random();
	if (randNum < 0.3 ) 
		{
			 randNum = "Rock";
		} 
		else if (randNum > 0.3 && randNum < 0.7) 
		{
			 randNum = "Paper";
		} 
		else 
		{
			 randNum = "Scissor";
		} 
	return randNum;
}



//if statement that randomly selects 
function compare(userInput) 
	{
	var computerChoice = cC(); 
	if (computerChoice === userInput) 
	{

	document.getElementById('result').innerHTML = "You picked " + userInput + "and the computer picked " + computerChoice + " so it's a tie";
	} 
	else if (userInput === "Rock") 
	{
		if (computerChoice === "Paper")
		{			

	document.getElementById('result').innerHTML = "You lose"; 
		}
		else if (computerChoice === "Scissor") 
		{	

	document.getElementById('result').innerHTML = "You lose"; 
		}	
		else 
		{	

	document.getElementById('result').innerHTML = "You tied";
		}
	}
	else if (userInput === "Paper") 
	{
		if (computerChoice === "Scissor")
		{	
		document.getElementById('result').innerHTML = "You lose"; 
		}
		else if (computerChoice === "Rock") 
		{
		document.getElementById('result').innerHTML = "You win";
		}	
		else 
		{
		document.getElementById('result').innerHTML = "You tied";
		}
	}
	else if (userInput === "Scissor") 
	{
		if (computerChoice === "Paper")
		{	
			document.getElementById('result').innerHTML = "You win";
		}
		else if (computerChoice === "Rock") 
		{	
			document.getElementById('result').innerHTML = "You win";
		}	
		else 
		{
			document.getElementById('result').innerHTML = "You tied";
		}
		

	}	

}
