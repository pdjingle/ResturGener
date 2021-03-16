$(document).ready(function () {
    var GOOGLE_API_KEY = "AIzaSyCAweQh1DVUY2_SLuL76zGEN78p1ICyhiw";

    // user can input zip code, city, state, or their address
    $("#choose").on("click", function(i) { 
        // i.preventDefault(); 
        var location = $("#location").val();
        console.log(location);
        getLatLon(location);
    })

    // Gets the user input zip code and turns finds the latitude and longitude coordinates
    function getLatLon(location) {
        $.ajax({
            type: "GET",
            url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=${location}&key=${GOOGLE_API_KEY}`,
            datatype: "json",

            success: function(data) {
                // to check the location is valid
                if (data["results"][0]=== undefined) {
                    alert("Input a valid location: zip, city, state, and/or address."); // TO-DO: NOT USE ALERTS. USE MODALS. ALSO, THE CALL TAKES TOO LONG BEFORE THE POPUP APPEARS. FIX SPEED
                    return;
                }

                let lat = data["results"][0]["geometry"]["location"]["lat"];
                let lon = data["results"][0]["geometry"]["location"]["lng"];
                let radius = parseInt($("#radius").val());

                // to make sure the radius is a valid number
                if (!$.isNumeric(radius)) {
                    alert("Select a desired Radius.") // TO-DO: CANNOT HAVE ALERTS! NEED TO MAKE THIS A MODAL
                    return;
                }

                radius = radius * 1609.344; // API is in meters, so multiply by 1609.344 to make the radius in miles
                searchRestaurant(lat, lon, radius);
            }
        })
    }

    // searches for a list of restaurants fitting the criteria
    function searchRestaurant(lat, lon, radius) {     
        $.ajax({
            type: "GET",
            url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=${radius}&type=restaurant&key=${GOOGLE_API_KEY}`,                                                          
            datatype: "json",
            success: function(data) {
                console.log(data);
                
            }
        })
    }

})