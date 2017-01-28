var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

  for (i=1;i<=5;i++)
  {var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic'+i+'.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e)
  {
  	var imgSrc = e.target.getAttribute('src');
  	displayedImage.setAttribute('src', imgSrc);  }
}

btn.onclick =function(e)
{
	if(e.target.getAttribute('class')=='dark')
	{
		e.target.setAttribute('class','light');
		e.target.textContent = "Lighten";
		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";

	}
	else 
	{
		e.target.setAttribute('class','dark');
		e.target.textContent='dark';
		overlay.style.backgroundColor = "rgba(0,0,0,0)";

	}
}


/* Wiring up the Darken/Lighten button */

