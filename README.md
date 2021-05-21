# Frontend Coding Challenge

May 21, 2021

## Project Scope

1. A user is searching for images using keyword(s) on an application.
1. The application is makes call to the Imgur Gallery Search API get data.
1. Returned data must be related to the user's keyword and should be displayed in a tastful manner.
1. The user can scroll over the results and click on the images to bring them in full screen for a great viewing experience.

## Solution formulation

Here's the main logic of my application:

1. The Gallery Search API call returns an array of gallery objects based on the user's input.
1. Grab all of the image objects each gallery has and put them into a single array.
1. Using the single array with image objects, display the images in a grid.
1. When the user clicks on the image grid item, the image will be shown in a modal enlarged.

## Libraries/Tools used

- Written in JavaScript (ES6) and uses React (via [Create React App](https://github.com/facebook/create-react-app)) and React Hooks.
- Written in functional components
- The app uses Axios, FontAwesome, and Material-UI

## How to setup

During development, ngrok was used to solve the CORS issue

In the project directory, run the following commands to setup:

1. create a .env in the root directory and add Client-Id for Imgur API call.
   Set 'REACT_APP_CLIENT_ID' equal to the client-id.
1. cd image-search-app
1. yarn install
1. yarn start
1. use ngrok and connect to port 3000

## Decisions

1. I wanted the image search app to be very minimalistic for various reasons; first, because I wanted to make sure I cover all of the items listed in the challenge handout; second, image search apps generally return a lot of images so I wanted keep the application simple so that it's not too straining to look at.
1. I created functional components and kept the jsx and associated css in the same folders so that it is easier to make changes and maintain.
1. I chose Axios as my HTTP client instead of fetch(). Fetch() can certainly do things that Axios does, but I really like that Axios is more compatible with browsers and requires less code.
1.
1. Query parameters used in the API call varies depending on the input user provides. This was done to return most accurate data as possible so that the user can find the "perfect image".
1. Thank you Rahul for answering 'yes' to the question I had about not including gif files as images. However, I ended up using .gif files because <img> tag is able to use the .gif file as a source.
1. I used lazy loading to render the images so that the learner doesn't have to wait until all of the images have been loaded.
1. I added error-handling in case there is a network issue with the API call.

## Improvements if more time permitted

1. Implement search filters so that user can refine their searches using such as sort and window parameters
1. If this was a bigger project, then I would have made good use of Material-UI components or tools or similar sort to speed up the work.
1. Definitely test, test, and test.
