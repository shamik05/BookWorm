# BookWorm
![GitHub License](https://img.shields.io/badge/License-None-blue)
## Description
This is a **M**ongoDB **E**xpress **R**eact **N**ode.js app to search for books with the Google API. Users are offered a search and save page. The search page displays any search results individually displayed with its relevant info. Users have the option to visit the book's purchase page in the Google store or save the book to a database. Next, the saved page displays all books that have been saved with a similar visit option. Also, the users can delete the book to remove it from the saved list. Lastly, the app also supports websocket functionality by broadcasting when a book has been saved. Any clients/browsers connected to the app are able to receive this message. The app's backend is built with node and the express framework. Websocket functionality is done through the socket.io package. The database choice is MongoDB with api functionality done through mongoose. The front end is built with the create-react app and bootstrap for styling. Finally, the app is hosted on heroku [here](https://bookwormmern.herokuapp.com/).
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
  * [Search](#Search)
  * [Save](#Save)
  * [View](#View)
  * [Alert](#Alert)
* [License](#License)
* [Contributing](#Contributing)
* [Questions](#Questions)
## Installation
Download or clone the repo to a working directory and extract its contents. Use a **C**ommand **L**ine **I**nterface to install necessary dependencies by running the following command:
```
npm i
```
## Usage 
Type the following in any CLI to run the app. 
```
npm start
```
Each module's functions have also been demo-ed below.

### Search

![Search](assets/search.gif)


### Save

![Saved](assets/saved.gif)


### View

![View](assets/view.gif)


### Alert

![Alert](assets/alert.gif)

## License 
The project is currently licenseless.
## Contributing
Message the owner on github or by email.
## Questions 
If you have any questions about the repo, open an issue or contact me directly at shamik05@hotmail.com. You can find more of my work at [shamik05](https://github.com/shamik05/).