# Project 1: Random Restaurant Generator

## To-Do 3/20/21 (in order of importance)
* get local storage to work for favorites
* add modal for errors, and delete alerts.
* make presentation
* make readMe
    * type intro
* cors before every session
    * we could make a modal with the link for users to activate the cors permission
* Andrew: ReadMe: explain what you did for the Modal functionality in "Tasks Completed"

______________________________________

* Functioning Website Link: https://pdjingle.github.io/ResturGener/?
    * Displays an interactive weather dashboard.
* GitHub Repository Link: https://github.com/pdjingle/ResturGener
* Project Presentation Link: 

## Functionalitty

* User goes to this site: https://cors-anywhere.herokuapp.com/ and requests temporary access via the button.
* When the user searches a location, a mile radius, the minimum rating, and the maximum price level, they are given a random restaurant that fits that criteria.
    * User also has an optional "Bar" option if they want their restaurant to have a bar.
    * A button is created for the randomly generated restaurant, which is appended to the "Previous Searches" section.
* A modal appears with the restaurant name, icon, address, and current rating. Users have the option of adding the restaurant to their "Favorites" list. User also has the option fo text the information to them by putting in their phone number.
* When the "Yes. Add as a favorite." button is clicked, a button for the restaurant appears in the Favorites section.
* User can click the X in the top right corner of the modal to leave it and start a new search.
* When viewing on smaller screens, the site becomes a long column rather than a row. See screenshot below.
    * Clicking on any of the subheaders will take the user to those sections.


## Tasks Completed

* Created IDs in the HTML file to reference via JQuery in the JS file.
* Created CSS styling using flexbox and Pure.css
    * Used Pure.css to make the site layout on any UI
* In the JS file, the left column calls on localStorage to display all the buttons of the past 10 randomly generated restaurants before the user starts a new search.
    * Used an array of up to length 10 to make sure no repeat buttons are made
* Created a button function that will search a restaurant fitting the user's criteria.
    * The button function then calls on another function, which uses a Google Geocode API to get the latitude and longitude for that user-input location.
    * Next, the latitude and longitude is passed into another function that has a second Google API for finding restaurants. The user-specified radius is also put in this API, which will return an array of 20 restaurants in the location and radius.
        * The function then creates a new array to input restaurants that fit the rest of the user-specified criteria.
        * Using a random number function from 0-'the array length', a random restaurant is chosen from the array.
        * The chosen restaurant's information is set to verious elements in the modal to be displayed.
        * The restaurant is stored in an array in local storage for previously searched restaurants.
* The modal [ANDREW: EXPLAIN WHAT YOU DID FOR THE MODAL]
    * When the blue button is clicked, the information is saved in local storage for the "Favorite Restaurants" array. This restaurant is also displayed on the "Favorite Restaurants" section.
    * If the program does not work, a modal indicating what the problem is will pop up.
* For local storage:
    * Created an array for the previous searches, put each chosen restaurant object into the array, saved the array to local storage.
        * Did the same thing for "favorites," but favorites is only triggered when the favorites button is pressed.
    * Displayed each search by creating a button with the value of the place_id and the text of the name.
        * Used an API that uses the place_id from the object to get the restaurant object again. Passed the restaurant object into the modal function to display the modal for the desired restaurant button.
* To bypass the CORS issue, added https://cors-anywhere.herokuapp.com/ in front of each API URL, and users need to click on this link to ask for permission.


## Known Issues

* The footer is not on the bottom of the screen.
* On mobile, when the local storage columns get too long, the modal only appears on the top rather than on the main display
* On desktop, when the local storage columns get too long, the modal is stretched, leaving a large gap between the name and the icon.
* The favorite restaurants gets buggy
    * When clicking on the "Favorite" button more than once, it causes an error in the local storage.
    * When clicking on a Favortie Restaurant after searching up a new restaurant, and then clicking on Favorite for the Favorite Restaurant, then the recently searched one is added. Refreshing the page prevents this from occurring.
        * ie. Having Starbucks in the favorites. Searching Pizza Hut. Clicking on Starbucks in the Favorite's section, clicking on "Favorites" button. This brings up "Pizza Hut" into the Favorites rather than informing the user that the restaurant is already there.
    * When there's an error in the local storage from any of these situations, the modal cannot be closed.


## Future Ideas

* Add more options in the search criteria. All of these options will we optional and will not trigger a modal alert.
    * cafes, stores, tourist, etc
* To get more specific results pertaining to food type, use another API with that information.
* Allow users to review the Restaurant Generator
* Display the restaurant website (if it has one) on the modal. Would need an API with that information.
    * Display images on the modal for the restaurant. Would also need an API with this information.
* Make mobile more appealing for users: Larger spaces between drop-down menus, change font, make font bigger, get rid of the footer.
* Allow users to remove or even rank their favorites


## Website Assets

* Demo:

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

- - -
© 2021 Restaurant Generator, (Karen Miller, Andrew Friedman, Jou Xiong) Northwestern Coding Bootcamp





## Application Requirements

Your project should fulfill the following requirements:

* Use a CSS framework other than Bootstrap. !!!!!!!!

* Be deployed to GitHub Pages.

* Be interactive (i.e., accept and respond to user input).

* Use at least two server-side APIs.

* Does not use alerts, confirms, or prompts (use modals).

* Use client-side storage to store persistent data.

* Be responsive.

* Have a polished UI. CSS !!!!!!!

* Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

* Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).


## Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/1_u8TKy5zW5UlrVQVnyDEZ0unGI2tjQPDEpA0FNuBKAw/edit?usp=sharing) to address the following: 

* Elevator pitch: a one minute description of your application

* Concept: What is your user story? What was your motivation for development?

* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

* Demo: Show your stuff!

* Directions for Future Development

* Links to the deployed application and the GitHub repository


## Grading Metrics 

| Metric                | Weight | 
| ---                   | ---    |
| Technical Criteria    | 25%    |
| Concept               | 10%    |
| Deployment            | 20%    |
| Repository Quality    | 10%    |
| Application Quality   | 15%    |
| Presentation          | 10%    |
| Collaboration         | 10%    |


## Grading Requirements

This project is graded based on the following criteria:

### Technical Acceptance Criteria: 25%

* Satisfies the following code requirements:

	* Application uses at least two server-side APIs.

    * Application uses client-side storage to store persistent data.

    * Application doesn't use JS alerts, prompts, or confirms (uses modals instead).

    * Application uses a CSS framework other than Bootstrap.

    * Application is interactive (accepts and responds to user input)

### Concept 10%

* Application should be a unique and novel idea.

* Your group should clearly and concisely articulate your project idea.

### Deployment: 20%

* Application deployed at live URL and loads with no errors.

* Application GitHub URL submitted.

### Repository Quality: 10%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a quality README file with description, screenshot, and link to deployed application.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application is responsive.

### Presentation 10%

* Your group should present using Powerpoint or a similar presentation software.

* Every group member should speak during the presentation.

* Your presentation should follow the [Project Presentation Template](https://docs.google.com/presentation/d/1_u8TKy5zW5UlrVQVnyDEZ0unGI2tjQPDEpA0FNuBKAw/edit?usp=sharing).

### Collaboration 10%

* There are no major disparities in the number of GitHub contributions between group members.


## Submission on BCS

Each member is required to submit the following:

* The URL of the deployed application.

* The URL of the GitHub repository.


[Page link: https://pdjingle.github.io/ResturGener/](https://pdjingle.github.io/ResturGener/)
