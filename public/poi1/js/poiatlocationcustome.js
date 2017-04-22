var jsonFile =
{
	"markers":[
	{
		"name":"הבית ממול",
		"address":"דב גרונר 8, פתח תקווה",
		"lat":32.091949,
		"lon":34.893448,
		"rating":1,
		"price":1,
		"description":"בית מכוער בפתח תקווה, מה עוד אתה רוצה לדעת?",
		"isActive":true
	},
	{
		"name":"סופר פארם",
		"address":"וייצמן 53 תל אביב",
		"lat":32.085036,
		"lon":34.789210,
		"rating":4,
		"price":4,
		"description":"בית מרקחת אדיר עם כל הדברים הכי שווים. כמו בדיקות הריון וקונדומים! יאללה בואו!",
		"isActive":true
	},
	{
		"name":"בנק אגוד",
		"address":"וייצמן 32 תל אביב",
		"lat":32.085086,
		"lon":34.789564,
		"rating":2,
		"price":5,
		"description":"בנק אגוד, סתם בנק מעפן עם שם מוזר שאף אחד לא מבין מה המטרה שלו במדינה הזאת",
		"isActive":true
	}
	]
	
	
};


// implementation of AR-Experience (aka "World")

var World = {
	// true once data was fetched
	initiallyLoadedData: false,

	// POI-Marker asset
	markerDrawable_idle: null,

	// called to inject new POI data
	loadPoisFromJsonData: function loadPoisFromJsonDataFn() {
		
		/*
        jsonFile = $.getJSON( "JsonFile.json", function() {
          console.log( "success" );
        })
          .done(function() {
            console.log( "second success" );
          })
          .fail(function() {
            console.log( "error" );
          })
          .always(function() {
            console.log( "complete" );
          });

        // Perform other work here ...
		
		*/
        World.markerDrawable_idle = new AR.ImageResource("assets/marker_idle.png");
		alert("lat= " + jsonFile.markers[0].lat);
        var markerLocation = new AR.GeoLocation( jsonFile.markers[0].lat, jsonFile.markers[0].lon, 100.0);
        var markerImageDrawable_idle = new AR.ImageDrawable(World.markerDrawable_idle, 2.5, {
            zOrder: 0,
            opacity: 1.0
        });
        var markerObject = new AR.GeoObject(markerLocation, {
        			drawables: {
        				cam: [markerImageDrawable_idle]
        			}
        		});



		/*
        // Set another completion function for the request above
        jsonFile.complete(function() {
          console.log( "second complete" );
        });
		*/

		// Updates status message as a user feedback that everything was loaded properly.
		World.updateStatusMessage('1 place loaded');
	},

	// updates status message shown in small "i"-button aligned bottom center
	updateStatusMessage: function updateStatusMessageFn(message, isWarning) {

		var themeToUse = isWarning ? "e" : "c";
		var iconToUse = isWarning ? "alert" : "info";

		$("#status-message").html(message);
		$("#popupInfoButton").buttonMarkup({
			theme: themeToUse
		});
		$("#popupInfoButton").buttonMarkup({
			icon: iconToUse
		});
	},

	// location updates, fired every time you call architectView.setLocation() in native environment
	locationChanged: function locationChangedFn(lat, lon, alt, acc) {
		//alert("lacationChanged");
        //console.log("");
		/*
			The custom function World.onLocationChanged checks with the flag World.initiallyLoadedData if the function was already called. With the first call of World.onLocationChanged an object that contains geo information will be created which will be later used to create a marker using the World.loadPoisFromJsonData function.
		*/
		if (!World.initiallyLoadedData) {
			// creates a poi object with a random location near the user's location
			alert("initilize the world biatch!");
			World.loadPoisFromJsonData();
			World.initiallyLoadedData = true;
		}
	},
};

/* 
	Set a custom function where location changes are forwarded to. There is also a possibility to set AR.context.onLocationChanged to null. In this case the function will not be called anymore and no further location updates will be received. 
*/

//alert("Initial")
AR.context.onLocationChanged = World.locationChanged;


