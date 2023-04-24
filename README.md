#  Project Management Application

This is a web application for managing data using a GraphQL API built with Node.js in the backend, and a React-based front-end using the Apollo Client library for interacting with the GraphQL API.


## Features
-   Data management: users can view, create, update, and delete projects.
-   Real-time updates: the application updates data in real-time using GraphQL subscriptions, which allow for server-to-client communication.

## Technologies used
-   Front-end: React, Apollo Client, Boostrap.
-   Back-end: Node.js, GraphQL, Express, MongoDB, Mongoose.
-   Development tools: Git, VS Code, npm.
## Getting started

### Prerequisites

Before running the application, you need to have the following software installed on your machine:

-   Node.js v14 or later.
-   MongoDB(Atlas).

### Installation

1.  Clone this repository to your local machine using `git clone`.
    
2.  Navigate to the `client` folder and run `npm install` to install the front-end dependencies.
    
3.  Navigate to the `server` folder and run `npm install` to install the back-end dependencies.
    
4.  Create a `.env` file in the `server` folder and add the following environment variables:
### Running the application

1.  Open a terminal and navigate to the `server` folder. (Server is a separate repo)[LINK HERE](https://github.com/jozzbruer/Project-Management-backend)
2.  Run `npm start` to start the server.
3.  Open another terminal and navigate to the `client` folder.
4.  Run `npm start` to start the front-end application.
5.  Open a web browser and navigate to `http://localhost:3001` to access the application.

## API Documentation

The GraphQL API documentation is available at `http://localhost:3000/graphql`.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1.  Fork this repository.
2.  Create a new branch with your changes: `git checkout -b my-feature-branch`.
3.  Make your changes and commit them: `git commit -m "Add some feature"`.
4.  Push your changes to your fork: `git push origin my-feature-branch`.
5.  Create a pull request on this repository.

![Screenshot 2023-04-24 at 12 01 30 AM](https://user-images.githubusercontent.com/21253158/233941050-3f6729df-115c-4667-89db-98989310d6a4.png)
