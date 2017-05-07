$(document).ready(function(){
	
		getJsonFunc();
		
		$( "#addbutton" ).click(function() {
			getJsonFunc();	
		});
		
		
		


});

function getJsonFunc(){
	$('#maintext').text('');
	console.log("here!");
	$.getJSON("JsonFile.js", function(result){
       for (var i=0; i<result.markers.length; i++){
       		$('#maintext').append(result.markers[i].name + ", ");
   			$('#maintext').append(result.markers[i].address + ", ");
			$('#maintext').append(result.markers[i].lat + ", ");
			$('#maintext').append(result.markers[i].lon + ", ");
			$('#maintext').append(result.markers[i].rating + ", ");
			$('#maintext').append(result.markers[i].price + ", ");
			$('#maintext').append(result.markers[i].description + "<br>");
       }
    });
}
