# Puteam's Movie Club

A search engine for movie synopses.

## Our Dream

We want to improve the user experience of movie lovers by suggesting movies they might be thinking of while they type the title.

We intend to query an API and use the results to populate a dropdown list.

![](https://media.giphy.com/media/l0ErRtQDgjMtQcjsI/giphy.gif)

## Installation Guide

Our app is hosted on Heroku:
[heroku link](https://fac-week4-movies.herokuapp.com/)

In order to run the app you must install:

- node (npm install)
- tap spec for testing
- npm i xmlhttprequest

## User Journey

The user should be able to:

- Load the app
- Type a movie title into the search field
- Be served a list of movies based upon their search
- Submit the search
- Receive a movie synopsis for the chosen movie

## Goals

- [x] Sit around the table
- [x] Decided on topic : Movies
- [x] Create an API key
- [x] Structure / Architecture
- [x] Initialise repo
- [x] Set up folder structure
- [x] Deployment on Heroku ("Hello World")
- [x] Set up project/server [mob]
- [x] Set up modules for handler, router, server [mob]
- [x] Set up basic HTML to check handler, router & server work
- [x] Hide API key
- [x] Add JSON file to src
- [x] Create an event listener

  - [ ] for input button
  - [ ] for key input

- [ ] API call to JSON file
- [x] Set up API call - backend

  - We can extract:
    - **title**
    - **overview**
    - vote average (rating)
    - poster path (to get image)
    - genres
    - Release Date

- [x] Add list container to html
- [x] Set up auto-fill functionality
  - [x] Add event listener key input (onkeydown)
- [x] Set up initial tests
- [x] Filter API content back into DOM
- [x] Basic CSS [LG]
- [x] Check tests + additional ones

## Stretch Goals

- [ ] Show the movie synopsis
- [ ] Only show most relevant suggestions in list
- [ ] Highlight on Hover
- [ ] Highlight difference between list items

## Problems We Had

- Connecting the front end API to the back end API
- Understanding how our handlers should accept URLs
- Connecting files throughout different modules and writing file paths

## Things We Learnt

- How to use an API on the back-end
- How to use an API call to take a string from the search-input and pass it to the back end
- How to set up the server, router and check endpoints
- Modularising code
- File structure
