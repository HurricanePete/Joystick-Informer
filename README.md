# Joystick Informer
Fullstack, React Capstone project for Thinkful - Search, save, buy, and stay up to date with console games

## Table of Contents

- [API Docs](#API_Docs)
- [Screenshots](#screenshots)
- [Summary](#summary)
- [Technologies](#technologies)

## API Docs

The RESTful API serves several endpoints:
- requests to /games will use the IGDB api to search for games by keyword, id, and recent news
- requests to /pricing will use eBay and Amazon's apis to try and collect pricing information based on game title, platform, and release date
- requests to /users will try and create a a new user with the supplied username and password
- requests to /auth will either create a JWT or refresh a current one
- authorized requests to /api/dashboard will serve a user watchlist or update an existing watchlist


## Screenshots 

![Game View](/public/images/JoystickInformer.JPG "Game View")


## Summary

Joystick Informer is an app that allows users to search for, save, and buy console video games. From the landing page, users can either sign-up for a free account, or jump right in. From the home page, users can see live updates of recent gaming-related news or search for their favorite games by keyword. Clicking on an individual game will open a detailed view of the game as well as display pricing options from eBay and Amazon. Clicking on one of these pricing options will bring the user to the corresponding items page on the merchant site. After creating an account, users can also save their favorite games to a watchlist and see personalized recommendations based on their tastes.

## Technologies

- HTML
- CSS
- JavaScript
- React
- Redux
- Node.js
- MongoDB
