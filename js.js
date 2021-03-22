$(document).ready(function () {
    var GOOGLE_API_KEY = "AIzaSyCAweQh1DVUY2_SLuL76zGEN78p1ICyhiw";
    var rOptions = [];
    var prevArr = JSON.parse(localStorage.getItem("res")) || []; // array of searched cities

    // creates the button list of the last 10 searched cities
    function createPrevMenu() {
        let prevList = $("#prev-list").text("");
        if (prevArr.length > 0) {
            for (var i = 0; i < prevArr.length; i++) {
                var prevRes = prevArr[i];
                var resBtn = $("<button>").val(prevRes.place_id).text(prevRes.name).attr("type", "button");
                prevList.prepend(resBtn);
                resBtn.click(resBtnFunc);
            }
        }
    }

    // list of the last 10 searched locations
    createPrevMenu();

    // user can input zip code, city, state, or their address
    $("#choose").on("click", function (i) {
        i.preventDefault();
        $("#load").removeClass("hidden");
        rOptions = [];
        var location = $("#location").val();
        getLatLon(location);
    })

    // Gets the user input zip code and turns finds the latitude and longitude coordinates
    function getLatLon(location) {
        $.ajax({
            type: "GET",
            url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=${location}&key=${GOOGLE_API_KEY}`,
            datatype: "json",

            // to check the location is valid
            error: function (jqXHR, textStatus, errorThrown) {
                $("#error-modal").removeClass("modal_hidden");
                $("#load").addClass("hidden");
            },
            success: function (data) {
                let lat = data["results"][0]["geometry"]["location"]["lat"];
                let lon = data["results"][0]["geometry"]["location"]["lng"];
                let radius = parseInt($("#radius").val());

                // to make sure the radius is a valid number
                if (!$.isNumeric(radius)) {
                    $("#error-modal").removeClass("modal_hidden");
                    $("#load").addClass("hidden");
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
            success: function (data) {
                let resultsArr = data.results;
                makeResultsArr(resultsArr);

                // chooses a random restaurant from the user-specified results
                let randomNum = Math.floor(Math.random() * rOptions.length);
                let chosenRest = rOptions[randomNum];
                $("#load").addClass("hidden");
                modalDisplay(chosenRest);

                // adds to the previous searches bar. Only displays the previous 5 searches.
                prevArr.push(chosenRest);
                if (prevArr.length > 5) {
                    prevArr.shift();
                }
                localStorage.setItem("res", JSON.stringify(prevArr));
                createPrevMenu();
            }
        })
    }

    // makes the array of the desired criteria
    function makeResultsArr(resultsArr) {
        resultsArr.forEach(function (r) {
            let operating = r.opening_hours;
            if (operating !== undefined && operating.open_now) {
                if (r.rating >= parseInt($("#rating").val())) {
                    if (r.price_level <= parseInt($("#price").val())) {
                        // checkbox option
                        let barOpt = $("#bar").is(':checked');
                        if (barOpt) {
                            r.types.forEach(function (t) {
                                if (t === "bar") {
                                    rOptions.push(r);
                                }
                            })
                        }
                        else {
                            rOptions.push(r);
                        }
                    }
                }
            }
        })
    }

    // gets the different data from the API to display on the modal
    function modalDisplay(chosenRest) {
        $("#res-name").text(chosenRest.name);
        $("#res-icon").attr("src", chosenRest.icon);
        $("#address").text(chosenRest.vicinity);
        $("#res-rate").text("Rating: " + chosenRest.rating);

        $("#res-modal").removeClass("modal_hidden");
    }

    // modal may be closed by user by clicking the "X" in the upper-right corner of the modal
    $("#cors_modal_close").on('click', function (i) {
        $("#cors-modal").addClass("modal_hidden");
    })
    $("#res_modal_close").on('click', function (i) {
        $("#res-modal").addClass("modal_hidden");
    })
    $("#error_modal_close").on('click', function (i) {
        $("#error-modal").addClass("modal_hidden");
    })

    // clear button
    $("#clear").on('click', function (i) {
        prevArr = [];
        localStorage.removeItem("res");
        createPrevMenu();
    })

    // When one of the restaurant buttons is pressed, it displays the modal for the restaurant
    function resBtnFunc(event) {
        event.preventDefault();
        let placeId = $(this).val();
        $.ajax({
            type: "GET",
            url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${GOOGLE_API_KEY}`,
            datatype: "json",
            success: function (data) {
                modalDisplay(data.result);
            }
        })
    }
})
