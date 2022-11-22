# Moviewer

Movie recommendation application that recommends movies based on the user's Favorite List. Users can search for movies to add to their favorite list and watch list. Searched movies will show details regarding the movie (runtime, genre, rating). Additionally, users can post reviews on movies they have watched.

## Project Objective

Continue to use Node, Node Express, Mongo and HTML5 to build a backend application but use React with hooks to build the frontend.

Before Login:
![before-login](https://user-images.githubusercontent.com/97815716/203131365-59c43d0e-d8e6-4cf7-bd6a-a293d9673480.png)

Login Page:
![login-page](https://user-images.githubusercontent.com/97815716/203131538-ebf26e60-f527-4a3a-91f1-af8029439a73.png)

Sign up:
![sign-up](https://user-images.githubusercontent.com/97815716/203132497-5987515e-31c0-4569-91fd-948178311069.png)

Dashboard:
![dashboard](https://user-images.githubusercontent.com/97815716/203275926-ded885c8-1733-4f0e-8492-fc49b6e9041d.png)

Movie Profile:
![movie-profile](https://user-images.githubusercontent.com/97815716/203132047-d646d465-05a8-4a34-8178-60feb19c6859.png)

Movie Review Post:
![movie-review](https://user-images.githubusercontent.com/97815716/203132162-6e341736-65e5-4a5e-bf09-b485e36137aa.png)

## Getting Started

### Tech Requirements

- Visual Studio Codes
- React
- Node.js
- Node Express
- HTML5
- CSS
- Javascript

### Installing

1. Download Visual Studio Codes and Node.js
2. Download extensions for Prettier, ESLint and Live Server in Visual Studio Code
3. Clone this repository using `git clone https://github.com/MelancholyZhong/Moviewer.git`
4. To install node modules use command `npm install`

### Running project

To start the project, run

```
     cd server
     yarn install
     cd frontend
     yarn install && yarn build
     cd ..
     yarn run initMovies
     yarn start
```

### Instructions to use

1. If you simply want to search for a movie, you can use the search function without logging in. In order to have access to favorites list and to watch list, you will have to log in first.
2. If you don't have an account, you can click "sign up" to register a new account. Both login and sign up have validation input such as checking if credentials match or if account already exists when creating a new account.
3. Once logged in, you will be directed to the dashboard which contains favorite list and to watch list. You can update your favorite list and watch list here.
4. Click logout to sign out.

## Authors and Project Link

- Yao Zhong
- Aaron Leung
- Project URL: Coming soon

## Design Document, Demonstration, Slides

- Design Document: https://github.com/MelancholyZhong/Moviewer/blob/main/Zhong-Leung-%20design-document.pdf
- Demo video: https://www.youtube.com/watch?app=desktop&v=UqtbV2skJlk&feature=youtu.be
- Slides: https://docs.google.com/presentation/d/1_BniTUwzlQkSrHP0Sofj4VP2siLdlQjFY3Zsdye4P34/edit#slide=id.p

## Reference Link

This project was built as part of CS5610 Web Development course. For more information about the course see the following link:
https://johnguerra.co/classes/webDevelopment_fall_2022/
