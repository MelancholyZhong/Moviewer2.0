# Moviewer 2.0 (https://moviewer2-0.onrender.com/)

Movie application that allows users to browse information about specific movies such as year released, movie synopsis, cast etc.  In addition to general information, each movie profile includes a review section where users can share their thoughts on the movie with other users.  This application also allows users to add movies to their Favorites list and To Watch List, both of which can be viewed in the user's Dashboard.  In the Dashboard, users can manage their Favorites List and To Watch List.    

## Project Objective and Overview

The objective of this project is to iterate over our Project 3 website (Moviewer) and make improvements in terms of design, accessibility and usability. In order to make these improvements, we conducted six usability studies and asked participants to perform a series of tasks.  We then asked the participants to rate each of the tasks on a Likert Scale and give comments regarding the ratings they gave.  From the data that we gathered, we then created a list to identify, evaluate and prioritize which issues to fix.  For more details on the specific improvements that were made, please refer to the usability study report which will be linked below under Design Document, Demonstration, Slides and Usability Study Report section.      

## Screenshots (V1.0 and V2.0):

### Homepage before Login
V1.0:
![before-login](https://user-images.githubusercontent.com/97815716/203131365-59c43d0e-d8e6-4cf7-bd6a-a293d9673480.png)
######
V2.0:
![homepage_v2](https://user-images.githubusercontent.com/97815716/206814556-5a1f1f66-6201-41ed-abd3-ddbab5af21cb.png)
######
######
### Login 
V1.0:
![login-page](https://user-images.githubusercontent.com/97815716/203131538-ebf26e60-f527-4a3a-91f1-af8029439a73.png)
######
V2.0:
![Login-2 0](https://user-images.githubusercontent.com/97815716/206814765-83175990-a5f5-4076-9c5d-dd5503935811.png)
######
######
### Sign up 
V1.0:
![sign-up](https://user-images.githubusercontent.com/97815716/203132497-5987515e-31c0-4569-91fd-948178311069.png)
######
V2.0:
![Signup-2 0](https://user-images.githubusercontent.com/97815716/206814984-d68f3b85-30fb-4123-bb3d-4fa646189db2.png)
######
######
### Dashboard:
V1.0:
![dashboard](https://user-images.githubusercontent.com/97815716/203275926-ded885c8-1733-4f0e-8492-fc49b6e9041d.png)
######
V2.0:
![Dashboard-2 0](https://user-images.githubusercontent.com/97815716/206816419-49224543-abd6-4f4b-9b65-9b191a815902.png)
######
######
### Movie Profile:
V1.0:
![movie-profile](https://user-images.githubusercontent.com/97815716/203132047-d646d465-05a8-4a34-8178-60feb19c6859.png)
######
V2.0:
![Movie-profile-2 0](https://user-images.githubusercontent.com/97815716/206818041-e6c804e0-8843-469a-9963-4350c9aa8aed.png)
######
######
### Movie Review Section:
V1.0:
![movie-review](https://user-images.githubusercontent.com/97815716/203132162-6e341736-65e5-4a5e-bf09-b485e36137aa.png)
######
V2.0:
![Review-2 0](https://user-images.githubusercontent.com/97815716/206818047-f4dabe93-7785-4a09-9fbf-f97bd73fb765.png)
######

## Color Palette and Fonts Choice
### Color Palette
<img width="1021" alt="color-pallete" src="https://user-images.githubusercontent.com/97815716/206828517-4de0e369-0fe9-4eaa-85a1-f9b99b05a636.png">
Our original and main color that we chose for our website was bright orange which we decided to stick to.  When choosing the remaining colors for our color palette we first looked into the complementary color of orange: blue.  While we did like the color blue, we opted for a lighter variant since a darker blue color would clash with our bright orange color.  Next, we chose a warm color (blanchealmond) that would blend well with both orange and blue.  These are the main three colors that we used across the pages of our website.  The remaining two colors that we chose were used for our buttons.  The light turqoise color is used for the primary buttons (approval) while the dark red color is used for the remove button (cancel).  Lastly, we used our main color orange for buttons related to the Favorites List and the To Watch List.    

### Fonts
The font we used include the following
1. "Tangerine", serif for page titles and section titles related to movies.  For instance, the home page.
2. Verdana for the search query (text next to search bar)
3. Default font for elements in the navbar (Moviewer, Dashboard, Log In/ Log out) as well as the header and subheaders of the Dashboard to complement the style of the icons.


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
3. Clone this repository using `git clone https://github.com/MelancholyZhong/Moviewer2.0.git`
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

1. If you simply want to search for a movie, you can use the search function without logging in. In order to have access to your Favorites List and To Watch List, you will have to log in first.
2. If you don't have an account, you can click "sign up" to register a new account. Both login and sign up have validation input such as checking if credentials match or if account already exists when creating a new account.
3. Once logged in, you will be directed to the dashboard where both the Favorites list and To Watch List will be displayed.  You can manage movies in your Favorites List and To Watch List here.
4. To search for a movie, click on "Moviewer" label on the top left corner.  This will direct you to the search page. 
5. Once you search for a movie, each movie will have three icons: one for writing reviews, one for adding to Favorites List and one for adding to To Watch List.  Added movies will now show up in your lists in the Dashboard page.
5. Click logout to sign out.

## Authors and Project Link

- Yao Zhong
- Aaron Leung
- Project URL: https://moviewer2-0.onrender.com/

## Milestone links:

- 60%: https://github.com/MelancholyZhong/Moviewer/tree/f788dff65b70d6617d6e6aa46c71a7d59027feed
- 80%: https://github.com/MelancholyZhong/Moviewer/releases/tag/v1.0


## Design Document, Demonstration, Slides and Usability Study Report

- Design Document: https://github.com/MelancholyZhong/Moviewer2.0/blob/main/Zhong-Leung-%20design-document.pdf
- Demo video: Coming soon
- Slides: https://docs.google.com/presentation/d/1dGrEIgZgw8MIGKASa7Wfx0A393dWFfYCK0gXe4bMF6Q/edit?usp=sharing
- Usability Study Report: https://github.com/MelancholyZhong/Moviewer2.0/blob/main/Leung_Zhong_Usability_study_report.pdf

## Reference Link

This project was built as part of CS5610 Web Development course. For more information about the course see the following link:
https://johnguerra.co/classes/webDevelopment_fall_2022/
