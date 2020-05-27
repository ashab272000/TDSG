# TDSG

This project aims to create Top Down Shooter Game(TDSG) and with it a javascript package(Game Engine) to help create a TDSG.

The project is going to borrow code from an unfinished project in github. 
https://github.com/ashab272000/NAZAH_GAME
We will borrow some code to make the game.

# How to get this project

Use the following command to clone the project:

        git clone git@github.com:ashab272000/TDSG.git

Then use the command below to get all the node modules:

        npm i

If you want to test the game, you have to build the javascript bundle first. Please read the section below to understand how it works. Use the following command to build the bundle:

        npm run build

You can open the `index.html` under the `dist` folder to run the game.


# How the code is structured

We are using a transpiler named `Babel` that will convert our code to support older browsers.
Note that we are using ES6 which may not be supported in older browser.

We are also using `Webpack`, a module bundler, that will help us make our javascript more object-oriented.Normally, html only allows one javascript file, which is a problem when you have a big project like this. What `Webpack` does is, it will gather bunch of javascript files and bundles into one javascript file.

Here, we are going to use the './src' folder to write our code. We can then build our bundle to the './dist'
folder by using the following command in the command line: 

        npm run build

You can also build the bundle for development, where the game will update whenever we save our file. Note that, it will not create a bundle in our dist folder. Rather, it will create a temporary file where our developement is displayed. Use the following command for the development:

        npm run dev

`Webpack` also bundles images, fonts and css into one javascript. Please read the following documentation for `Asset-Management`.

With this you can finally start the project.
