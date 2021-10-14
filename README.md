# LaundryConnect 2.0!

URL: https://laundry-connect-2.herokuapp.com/


This project is an improvement of the current LaundryConnect website. LaundryConnect is the service which provides data on the current progress of laundry machines at WPI; however, the website does not look great and it is hard to navigate (as shown below).

Our group decided we needed to improve the user interface and add functionality to save your favorite locations on campus.

These are some of the things we added:
- Added each laundry location with a drop down menu showing all machines and their availabilities
- Added a color code with five different colors showing the status of the machines
- Added an update time which shows when the page was last updated.
- Shows all washers and dryers with cards that show the machine's information.
  - Shows the time left if the machine is in use
  - Shows 'Avaliable' if the machine is available
  - Shows 'Ready for Pickup' if the cycle has finished
  - Shows 'Offline' if the machine is off or out of order
- Has a log-in feature with allows users to save their favorite locations
  - Users can hit the star icon to save their favorite locations and see them under the 'FAVORITE LOCATIONS' tab

**This is the original LaundryConnect**

![FrontLC](./images/laundryconnect1.png)
![SpecLC](./images/laundryconnect1main.png)

**This is the new and improved version of LaundryConnect**

![LaundryConnect2](./images/laundryconnect2.png)

## Accessibility
![LaundryConnectLighthouseReport](./images/LaundryConnectLighthouseReport.png)
In order to provide an accessible experience for all users, we used a grid layout within Material UI so that components render correctly on both desktop and mobile. We put a large focus on making sure mobile users in particular were able to use our website since most users will be viewing our website on their phones from within the laundry room. We also made sure to contain all list items within their respective lists and follow an ordered structure from h1 to h6 in order to make our website accessible for users with screenreaders and other assistive devices.

## Additional information needed to use the project

**Login**:
- *Username*: Admin
- *Password*: Admin

## Technologies used and how they were used

**MongoDB**: MongoDB was the main database we used. This is where all the LaundryConnect data is sent.

**Node**: Node was used for our backend server which retrieved and sent data between the database and the client.

**React**: React was the frontend framework used to model our entire website and refresh data.

**Mongoose**: Mongoose allowed us to easily access the data from the MongoDB database. Allowed for convenience with our data.

**Express**: Express was the middleware we used to handle server logic and dataflow. It processed the JSON data sent with POST requests and also GET requests.

**Material UI**: Material UI was used as our frontend framework which had many React components. This allowed us to add flair to our website and make it look clean. It also allowed us to implement mobile accessibility.

**Heroku**: This is where our website is hosted.

**Session Storage**: This is how the user logins are stored and saved so the website will keep users signed on.


## Technical Achievements

We fully implemented a new laundry system for WPI students. Due to our personal experience with using WPI's laundry service, we saw many problems with it and wanted to improve this. 

A technical achievement for this is implementing a webscraper to frequently retrieve data from the Laundry service and update the Mongo database with this data, then display this information with react on the website so users can see realtime updates of the current WPI laundry availability.

As a result of the achievements above, we created a better structured and better visualization of WPI's laundry system which is easier and more intuitive to use. Due to the nature of react and the Material UI components, this website is more accessible on mobile than the original LaundryConnect was.

Based on the feedback from the various students and professors, they were very appreciative of our reimplementation of WPI's laundry website.

## Challenges faced in this project

- Development of the webscraper
- Implementing the ability to favorite locations
- Updating the website anytime the database received data from the webscraper

## Contributions

**Owen McGinley**:
- Developed the webscraper for the laundry data
  - Hosted webscraper on personal server
  - Implemented auto data fetching every two minutes
- Worked on backend
- Did frontend UI touchups

**Michael Zeolla**:
- Developed the webscraper for the laundry data
  - Pushed the webscraper data to mongo
- Worked on frontend
  - Built the basic structure of the website
  - Implemented the favoriting feature
  - Designed the basic UI for the website
- Developed the website backend
  - Created user login, registration
  - Implemented the ability to get data from the Mongo server
  - Implemented Mongoose data structure
  - Implemented the favoriting feature
  - Implemented autorefreshing for the website
  - Deployed website on Heroku
