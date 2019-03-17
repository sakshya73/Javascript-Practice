var p1 = document.querySelector('.p1');
var p2 = document.getElementsByClassName('p2')[0];

var p1display = document.querySelector('.p1display');
var p2display = document.querySelector('.p2display');

var playingFor = document.querySelector('.playingFor');
var inputnum = document.querySelector('.totalscores');

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

var resetButton = document.querySelector('.reset');

p1.addEventListener('click',function(){
	if(!gameOver)
	{
		if(p1Score < winningScore)
		{
			p1Score++;
			p1display.textContent = p1Score;
		}
		if(p1Score === winningScore){
			p1display.classList.add('winner');
			gameOver = true;
		}
	}
});

p2.addEventListener('click',function(){
	if(!gameOver)
	{
		if(p2Score < winningScore)
		{
			p2Score++;
			p2display.textContent = p2Score;
		}
		if(p2Score === winningScore)
		{	
			gameOver = true;
			p2display.classList.add('winner');
		}
	}
});

inputnum.addEventListener('change',function(){
	playingFor.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});
resetButton.addEventListener('click',function(){
	reset();
});

function reset()
{
	p1Score = 0;
	p2Score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
}