var jackson;
var geocoder;

$(document).ready(function(){
		//fs = require('fs');
		
		getJsonFunc();
		
		//add an object to jackson
		$( "#addbutton" ).click(function() {
			var tmpval1 = $('#inpName').val();
			//console.log(tmpval1);
			var tmpval2 = $('#inpAddress').val();
			var tmpval3 = $('#inpRating').val();
			var tmpval4 = $('#inpPrice').val();
			var tmpval5 = $('#inpDescription').val();
			//var geocode = getGeolocation(tmpval2);
			var adjustedaddress = tmpval2.replace(/ /g,'+');
			var tempstring = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + adjustedaddress +"&key=AIzaSyAc62NykGU-apZKUy-fFLS56yWrIU2ZSdk";
			$.getJSON(tempstring, function(result){
			 	
			 	var temp = 
				{
					"name":tmpval1,
					"address":tmpval2,
					"lat":result.results[0].geometry.location.lat,
					"lon":result.results[0].geometry.location.lng,
					"rating":tmpval3,
					"price":tmpval4,
					"description":tmpval5,
					"isActive":true	
				}
				
				//console.log(temp);
				jackson.markers.push(temp);
				refreshJsonFunc();	
			 	
			});
			
			
		});
		
		
		//remove an object from jackson
		$( "#deletebutton" ).click(function() {
			indx = $('#objectid').val();
			var temparray = [];
			for (var i=0; i<indx; i++){
				temparray.push(jackson.markers.shift());
			}
			console.log(temparray);
			jackson.markers.shift();
			for (var i=0; i<indx; i++){
				var temp= temparray.pop();
				console.log(temp);
				jackson.markers.unshift(temp);
			}
			
			refreshJsonFunc();	
		});
		
		
		//save jackson to file
		$( "#savebutton" ).click(function() {
			
			$('#maintext').text(JSON.stringify(jackson));
		});
		
		


});
function refreshJsonFunc(){
	$('#maintext').text('');
	for (var i=0; i<jackson.markers.length; i++){
       		$('#maintext').append(i + ": " + jackson.markers[i].name + ", ");
   			$('#maintext').append(jackson.markers[i].address + ", ");
			$('#maintext').append(jackson.markers[i].lat + ", ");
			$('#maintext').append(jackson.markers[i].lon + ", ");
			$('#maintext').append(jackson.markers[i].rating + ", ");
			$('#maintext').append(jackson.markers[i].price + ", ");
			$('#maintext').append(jackson.markers[i].description + "<br>");
       }
	
}



function getJsonFunc(){
	$('#maintext').text('');
	//console.log("here!");
	$.getJSON("JsonFile.js", function(result){
		jackson = result;
		
		
		//console.log(jackson);
       for (var i=0; i<jackson.markers.length; i++){
       		$('#maintext').append(i + ": " + jackson.markers[i].name + ", ");
   			$('#maintext').append(jackson.markers[i].address + ", ");
			$('#maintext').append(jackson.markers[i].lat + ", ");
			$('#maintext').append(jackson.markers[i].lon + ", ");
			$('#maintext').append(jackson.markers[i].rating + ", ");
			$('#maintext').append(jackson.markers[i].price + ", ");
			$('#maintext').append(jackson.markers[i].description + "<br>");
       }
    });
}

function getGeolocation (address) {
	var adjustedstring = address.replace(/ /g,'+');
	var tempstring = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + adjustedstring +"&key=AIzaSyAc62NykGU-apZKUy-fFLS56yWrIU2ZSdk";
	 $.getJSON(tempstring, function(result){
	 	//console.log("I have IT!!!");
	 	//console.log(result);
	 	return result;
	 	
	 });
}

