var birthday = new Date('December 16, 1997 00:00:00')
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs); // miliseconds from epoch
var age = Math.abs(ageDate.getUTCFullYear() - 1973).toString();
var finished_typing = false;
var filled = false;

// set up text to print, each item in array is new line
var aText = new Array(
"> Hello!", 
"> My name is Oliyad, I am " + age + " years old.", 
"> I love programming and challenges.",
"> I am majoring in Computer Engineering .",
"> I will be joining one of the well-known Ethiopian telecommunication companies (Ethiotele or Safaricom) as an intern Engineer in the next 6-7 months.",
"> I am fluent in English, with a deep understanding of advanced grammar, and my spoken proficiency is slightly lower but still above intermediate level.", 
"> Additionally, I am a native speaker of Amharic.",
"> If you want to know more about me, you are in the right place :)"

);
var iSpeed = 15; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function fill_typewriter() {
	var destination = document.getElementById("typedtext");
	var text = "";
	for (var i = 0; i < aText.length; i++) {
		text += aText[i] +  '<br />';
	}
	destination.innerHTML = text;
	filled = true;
}

function typewriter() {
	sContents =  ' ';
	iRow = Math.max(0, iIndex-iScrollAt);
	var destination = document.getElementById("typedtext");
	while ( iRow < iIndex ) {
    	sContents += aText[iRow++] + '<br />';
   	}
	if (finished_typing == false) {
		destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
	}
   	if ( iTextPos++ == iArrLength ) {
    	iTextPos = 0;
    	iIndex++;
    	if ( iIndex != aText.length ) {
			iArrLength = aText[iIndex].length;
			if (finished_typing == false) {
				setTimeout("typewriter()", 500);
			} 	
    	}
		else {
			finished_typing = true;
			filled = true;
			showcontent();
			destination.innerHTML = destination.innerHTML.replace("_", "");
		}
   	} 
	else {
		if (finished_typing == false) {
			setTimeout("typewriter()", iSpeed);
		} 	
   	}

  }
