/* var cities = ["NYC", "SF","LA","ATX","SYD"]; 
var option = '';
for (var i=0;i<cities.length;i++){
   option += '<option>' + cities[i] + '</option>';
}

 Add options 
$('#city-type').append(option);


$('#city-type').change(function(){
    if($('#city-type').val() === 'NYC'){
        $('#body').attr('class', 'nyc');
    }
});

*/


$(document).ready(function() {


var cities = ['NYC', 'SF','LA','ATX','SYD']; 
	for (var i=0;i<cities.length;i++){
	$('#city-type').append('<option>' + cities[i] + '</option>');
}

$('#city-type').change(function() {

	var city = $('#city-type').val();
    if(city == 'NYC'){
    	$('body').attr('class','nyc');
    	}

    	else if(city == 'SF'){
    	$('body').attr('class','sf');
    	}

    	else if(city == 'LA'){
    	$('body').attr('class','la');
    	}

    	else if(city == 'ATX'){
    	$('body').attr('class','austin');
    	}

    	else if(city == 'SYD'){
    	$('body').attr('class','sydney');
    	}
    	
    });

});

