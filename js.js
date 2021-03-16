$(document).ready(function () {
    var GOOGLE_API_KEY = "AIzaSyCAweQh1DVUY2_SLuL76zGEN78p1ICyhiw";
    // var ZIP_API_KEY = "VaVw3X6KKy4JhdiXkFJg0NpNfTXUHWHQWkwRv3lbkE33RpxiVa6kTdXuncyzYeGds";

    $("#choose").on("click", function(i) { 
        // i.preventDefault(); 
        var city = $("#location").val();
        console.log(city);
        searchRestaurant(city);
        // getLatLon(zip);
    })

    // function getLatLon(zip) {
    //     $.ajax({
    //         type: "GET",
    //         url: `https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/${ZIP_API_KEY}/info.json/${zip}/degrees`,
    //         datatype: "json",
    //         success: function(data) {
    //             console.log(data);
    //         }
    //     })
    // }

    function searchRestaurant(city) {
    // function searchRestaurant(lat, lon, radius) {     
        $.ajax({
            type: "GET",
            // url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=${radius}&type=restaurant&key=${GOOGLE_API_KEY}`,
            url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+${city}&key=${GOOGLE_API_KEY}`,
                                                                 
            // async: true,
            datatype: "json",
            success: function(data) {
                console.log(data);
                
            }
        })
    }

    // getLatLon(53223);
    // searchRestaurant(43.0389, 87.9065, 50);




})