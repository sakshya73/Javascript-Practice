var list = document.querySelectorAll('li');
for(var i=0;i < list.length;i++)
{
	list[i].addEventListener('mouseover',function(){
		this.style.color = "green";
	});
	list[i].addEventListener('mouseout',function(){
		this.style.color = "black";
	});
	list[i].addEventListener('click',function(){
		this.classList.toggle('done');
	});
}
