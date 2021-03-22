# Group Project 1: Random Restaurant Generator

## Introduction to "Save Your Date: The Restaurant Decision Maker"
	Restaurant decision-maker now makes choosing a restaurant fun and easy. The user navigates to this location https://github.com/pdjingle/ResturGener and input the desired location and distance traveled. The user will also have an option to choose if the location will have an on-site bar. Then press the "choose my restaurant option". That will then pop up a notification within the browser of a location randomly generated via the program. If the user does not like that location they may choose to input the constraints again to generate another restaurant. 
    
* Functioning Website Link: https://pdjingle.github.io/ResturGener
    
* GitHub Repository Link: https://github.com/pdjingle/ResturGener
    
## Functionalitty

* User goes to this site: https://cors-anywhere.herokuapp.com/ and requests temporary access via the button.
* When the user searches a location, a mile radius, the minimum rating, and the maximum price level, they are given a random restaurant that fits that criteria.
    * User also has an optional "Bar" option if they want their restaurant to have a bar.
    * A button is created for the randomly generated restaurant, which is appended to the "Previous Searches" section. Previous searches is maxed out at 5 previously searched restaurants.
        * There is a clear button for users to clear the previous searches.
* A modal appears with the restaurant name, icon, address, and current rating. User also has the option fo text the information to them by putting in their phone number.
* User can click the X in the top right corner of the modal to leave it and start a new search.
* When viewing on smaller screens, the site becomes a long column rather than a row.
* Clicking on any of the subheaders will take the user to those sections.


## Tasks Completed

* To bypass the CORS issue, added https://cors-anywhere.herokuapp.com/ in front of each API URL, and users need to click on this link to ask for permission.
* Created IDs in the HTML file to reference via JQuery in the JS file.
* Created CSS styling using flexbox and Pure.css
* Used Pure.css to make the site layout on any UI
* In the JS file, the left column calls on localStorage to display all the buttons of the past 10 randomly generated restaurants before the user starts a new search.

* Used an array of up to length 10 to make sure no repeat buttons are made
* Created a button function that will search a restaurant fitting the user's criteria.
* The button function then calls on another function, which uses a Google Geocode API to get the latitude and longitude for that user-input location.

* Latitude and longitude is passed into another function that has a second Google API for finding restaurants. The user-specified radius is also put in this API, which will return an array of 20 restaurants in the location and radius.
    * The function then creates a new array to input restaurants that fit the rest of the user-specified criteria.
    * Using a random number function from 0-'the array length', a random restaurant is chosen from the array.
    * The chosen restaurant's information is set to verious elements in the modal to be displayed.
    * The restaurant is stored in an array in local storage for previously searched restaurants
    * If the program does not work, a modal indicating what the problem is will pop up.

* For local storage:
    * Created an array for the previous searches, put each chosen restaurant object into the array, saved the array to local storage.
        * The clear button clears the array, and clears the local storage for the array.
    * Displayed each search by creating a button with the value of the place_id and the text of the name.
        * Used an API that uses the place_id from the object to get the restaurant object again. Passed the restaurant object into the modal function to display the modal for the desired restaurant button.
    * Added a loader from W3 Schools because some searches take an extended period of time, and by incorporting that the user will know that the app is working 

## Known Issues

* The footer is not on the bottom of the desktop screen.

## Future Ideas

* Add more options in the search criteria. All of these options will we optional and will not trigger a modal alert.
    * cafes, stores, tourist, etc
* To get more specific results pertaining to food type, use another API with that information.
* Allow users to review the Restaurant Generator
* Display the restaurant website (if it has one) on the modal. Would need an API with that information.
    * Display images on the modal for the restaurant. Would also need an API with this information.
* Make mobile more appealing for users: Larger spaces between drop-down menus, change font, make font bigger, get rid of the footer.
* Allow users to remove or even rank their favorites
* Allow users to submit testimonials of their dining experiences, their experiences using the app, and its effect on their evenings/lives.
* Add a "Favorites" column for users to add their favorite restaurants.
* Add phone number feature to app, so the user can call directly to make reservations or order food 


## Website Assets

* Demo:
See in repo for both mobile and web versions 



* Empty Dashboard: 
![Empty Dash](./assets/empty-dash.png)

* Search Results: 
![Search Results](./assets/search-results.png)

* Saved Favorite Restaurant: 
![Saved Favorite Restaurant](./assets/fave-save.png)

* Mobile UI Display (iPhone X): 
![iPhone (mobile) display](./assets/mobile.png)


## Sources (APIs)

* Used APIs from Google: https://developers.google.com/apis-explorer
    * Location: https://developers.google.com/maps/documentation/geocoding/overview
    * Restaurants: https://developers.google.com/maps/documentation/places/web-service/search?hl=ru
    * Restaurants in LocalStorage: https://developers.google.com/maps/documentation/places/web-service/place-id

[Page link: https://pdjingle.github.io/ResturGener/](https://pdjingle.github.io/ResturGener/)
- - -
Copyright © 2021
Project: Restaurant Generator
Group 6: Karen Miller, Andrew Friedman, Jou Xiong 
Northwestern Coding Bootcamp. All rights reserved.
