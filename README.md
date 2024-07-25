# pixflick

'pixflick' is a single-page application based on the ReactJS library where users can find or add their favorite movies. The app includes the following views and functionalities:

- `Home` view which is the main app view
- `Movies` view where the user can find the catalog with movies
- `Details` view where the user can see every movie's details
- `Add Movie` view where the user can add a movie if he has a registration and is logged into his profile
- `Edit Movie` view where the user can edit a movie if he is the creator of that movie
- `Delete Movie` option where the user can delete a movie if he is the creator of that movie
- `Add Comment` option where the logged-in users can write a comment for a movie
- `Profile` view with user information
- `Register` view where the user can make registration
- `Login` view where the user can log into his profile
- `Logout` option where the user can logout from his profile

## App Details

The app is based on:

- ReactJS
- JavaScript
- HTML
- CSS
- RESTful API
- SoftUni Practice Server as Database
- Gradient Magic Backgrounds
- Font Awesome Icons

## Project Content

In the repository you will find four folders:

- `client` folder contains the app's front-end part
- `server` folder contains the app's back-end part
- `styles` folder contains the app's initial CSS files
- `views` folder contains the app's initial HTML files

## How to Start/Stop the App

After downloading the application on your computer, you must first type `npm install` in your VS Code terminal to install `node_modules` folder. Then I suggest you to open two terminals in VS Code. Name the first one `client` and the other one `server` to distinguish them. In the `server` terminal, type `cd server` to enter the server folder, and then run the `node server.js` command to start the server. Then click on `client` terminal and type `cd client` command to enter the client folder. Then type `npm run dev` command to start the front-end part of the application. The following will appear in the `client` terminal:


```
VITE v5.3.1  ready in 1002 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Click on `http://localhost:5173/` to open the app in your browser. After you finish working with the application, click on `client` terminal and press the `Ctrl+C` command to stop the front-end part of the application. Then click on the `server` terminal and press the same `Ctrl+C` command to stop the server.