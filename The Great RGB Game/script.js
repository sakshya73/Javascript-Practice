var numSquares = 6;

var squares = document.querySelectorAll('.square');
var squares = document.querySelectorAll('.square');
var squares = document.querySelectorAll('.square');

var colors = changeColors(6);

var rgbhead = document.getElementById('rgbheading');

var statusId = document.querySelector("#status");

var mainhead = document.querySelector('.heading');

var newcolor = document.querySelector('#newcolors');

var hardbtn = document.querySelector('#hardbtn');
var easybtn = document.querySelector('#easybtn');

hardbtn.addEventListener('click',function(){
	reset();
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");

	numSquares = 6;
	colors = changeColors(numSquares);
	pickedColor = pickRandom();
	rgbhead.textContent = pickedColor;
	for(var i=0;i<squares.length;i++)
	{
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}

});

easybtn.addEventListener('click',function(){
	reset();
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numSquares = 3;
	colors = changeColors(numSquares);
	pickedColor = pickRandom();
	rgbhead.textContent = pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
			squares[i].style.background = colors[i];
		else
			squares[i].style.display = "none";
	}

});
function reset()
{
	colors = changeColors(numSquares);
	pickedColor = pickRandom();
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background = colors[i];
	}
	this.textContent = "New Colors";
	rgbhead.textContent = pickedColor;
	mainhead.style.background = "steelblue";
	statusId.textContent = "";
}
newcolor.addEventListener('click',reset);

pickedColor = pickRandom();
rgbhead.textContent = pickedColor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListener('click',function(){
		clickedColor = this.style.background;
		if(pickedColor === clickedColor)
		{
			newcolor.textContent = "Play Again?";
			statusId.textContent = "Correct";
			mainhead.style.background = pickedColor;
			setAllColors(pickedColor);
		}
		else
		{
			statusId.textContent = "Try Again";
			this.style.background = "#232323";
		}
	})
}
function setAllColors(pickedColor)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background = pickedColor;
	}
}

function pickRandom()
{
	var pick = Math.floor(Math.random() * colors.length );
	return colors[pick];
}

function changeColors(num)
{
	var arr = [];
	for(var i=0;i<num;i++)
	{
		arr.push(changeColor());
	}
	return arr;
}

function changeColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
	return rgb;
}