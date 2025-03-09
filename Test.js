function questionOne(x) {
	var score = 0;
	if(x==2) {
	document.getElementById("sug1").innerHTML= "Correct!";
	score = 1;
	}
	else {
	document.getElementById("sug1").innerHTML= "Wrong...";
	}
}

function questionTwo(x) {
	var score = 0;
	if(x==3) {
	document.getElementById("sug2").innerHTML= "Correct!";
	score = 1;	
	}
	else {
	document.getElementById("sug2").innerHTML= "Wrong...";
	}
}

function questionThree(x) {
	var score = 0;
	if(x==1 || x==2) {
	document.getElementById("sug3").innerHTML= "Correct!";
	score = 1;
	}
	else {
	document.getElementById("sug3").innerHTML= "Wrong...";
	}
}

function questionFour(x) {
	var score = 0;
	if(x==3) {
	document.getElementById("sug4").innerHTML= "Correct! <br>You can also meal prep ahead of time so that the only thing you'll do is reheat it!";
	score = 1;
	}
	else {
	document.getElementById("sug4").innerHTML= "Wrong...";
	}
}

function questionFive(x) {
	var score = 0;
	if(x==2 || x==3) {
	document.getElementById("sug5").innerHTML= "Correct!";
	score = 1; 
	}
	else {
	document.getElementById("sug5").innerHTML= "Wrong...";
	}
}

function Score(point) {
	point = point + point;
}




