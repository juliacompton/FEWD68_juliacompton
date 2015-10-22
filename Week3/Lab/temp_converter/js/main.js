var tempC = 20;

var tempF = tempC*9/5+32;

var thresh = 60;

  
  if(tempF > thresh) {
	document.body.setAttribute('style','background-color: grey');
 	document.write(tempF);
  };

  if(tempF < thresh) {
	document.body.setAttribute('style','background-color: blue');
    document.write(tempF);

  };

