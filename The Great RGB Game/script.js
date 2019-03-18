var squares = document.querySelectorAll('.square');

var colors = [
				"rgb(255, 0, 0)",
				"rgb(255, 255, 0)",
				"rgb(0, 255, 0)",
				"rgb(0, 255, 255)",
				"rgb(255, 0, 255)",
				"rgb(0, 0, 255)"
			]

var rgbhead = document.getElementById('rgbheading');

var statusId = document.querySelector("#status");

pickedColor = pickRandom();
rgbhead.textContent = pickedColor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListener('click',function(){
		clickedColor = this.style.background;
		if(pickedColor === clickedColor)
		{
			statusId.textContent = "Correct";
		}
		else
		{
			statusId.textContent = "Try Again";
			this.style.background = "#232323";
		}
	})
}
function changecolor(pickedColor)
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