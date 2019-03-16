var p1 = document.querySelector('.p1');
var p2 = document.getElementsByClassName('p2')[0];

var p1display = document.querySelector('.p1display');
var p2display = document.querySelector('.p2display');

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;


p1.addEventListener('click',function(){
	if(!gameOver)
	{
		if(p1Score < winningScore)
		{
			p1Score++;
			p1display.textContent = p1Score;
		}
		if(p1Score === winningScore)
			gameOver = true;
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
			gameOver = true;
	}
});
