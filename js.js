$(document).ready(function () {
    var GOOGLE_API_KEY = "AIzaSyDCYsuUyZg_pgQxwlajWhMgIDO2DvAw7TA";
    var ZIP_API_KEY = "VaVw3X6KKy4JhdiXkFJg0NpNfTXUHWHQWkwRv3lbkE33RpxiVa6kTdXuncyzYeGds";

    $("#choose").on("click", function(i) { 
        // i.preventDefault(); 
        var zip = $("#czip").val();
        console.log(zip);
        getLatLon(zip);
    })

    function getLatLon(zip) {
        $.ajax({
            type: "GET",
            url: `https://www.zipcodeapi.com/rest/${ZIP_API_KEY}/info.json/${zip}/degrees`,
            datatype: "json",
            success: function(data) {
                console.log("getLatLon: " + data);
            }
        })
    }


    function searchRestaurant(lat, lon, radius) {     
        $.ajax({
            type: "GET",
            url: `https://maps.googleapis.com/maps/api/place/search/xml?location=${lat},${lon}&radius=${radius}&sensor=false&key=${GOOGLE_API_KEY}&types=restaurant`,
            datatype: "json",
            success: function(data) {
                console.log("search: " + data);
            }
        })
    }

    searchRestaurant(37.423021, -122.083739, 5);

})