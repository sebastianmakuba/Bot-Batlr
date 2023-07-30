# Descrition of the Project
bot-batlr is an app that allows you to recruit different robots to your army by looking at their descriptions. To add a robot, you click on the "Add to My Army" button. 
### ports used
The app uses the default port 3000 to host its data. This is available through:
  http://localhost:3000/bots. 


 The project has three main components that work cohesively to ensure the desired outcome is obtained. These components include:

1. App.js
2. RobotsDisplay.js
3. ArmyRobot.js

## App.js
This is the main components that parents its child components(RobotsDisplay and Favorite Robot). It gives the app a simple flow of ideas by embracing the use of props in child components. It is where the main functionality is.

## RobotsDisplay.js
This component is responsible for displaying all the robots available in the server. Moreover, it bears the function that adds a robot to the army upon selection. The use of map has been extensively used to make a card for each component. 

## ArmyRobot.js
This component has all the robots enlisted for the army. It also has a functionality that allows us to permanently delete a robot from the server.


Author : Sebastian Makuba