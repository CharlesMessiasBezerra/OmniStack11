# Semana Omnistack 11.0 :rocket:

by [Rocketseat](https://rocketseat.com.br/)
a Project to build in one week, the backend, frontend and the mobile of an application called "Be the Hero".
"Be the Hero" is a platform that provides to NGO a place to show incidents e find "Heroes" that will save the day. The hero just needs to donate to supply the necessities of the NGO to solve the incident.

## Table of Contents

<!--ts-->

* [How to use](#how-to-use)
  * [Web](#web)
  * [Mobile](#mobile)
* [Tests](#tests)
* [Built with](#built-with)
* [Versioning](#versioning)
* [Authors](#authors)
* [License](#license)

<!--te-->


### How to use

After cloning the repository, you must run three different servers at the same time, running terminal inside of the directories, 'backend', 'frontend' and 'mobile'.
In each directory, run terminal: **npm run start** or **yarn start** whichever you prefer.

##### Web

The web application is dedicated to NGOs, where they can register themselves and manage the incidents.
On your browser, go to **http://localhost:3000**. The application must be running.

You must see this page.

![result](/gitImages/webhome.png)

And after you create and login with your NGO profile, you will see this page.

![result](/gitImages/webIncidents.png)

##### Mobile

The mobile application is dedicated to the Heroes, where they can find incidents to help and save the day.
First, you must configure the correct path to the server. In my case, I was running in a device, and put the IP from the server as the path, in case you run in an emulator, change the path to the localhost. To do it, just change the file './mobile/src/services/api.js'.
Use expo to test the mobile app. for more information see the [documentation](https://docs.expo.io).
When you run the mobile app you will see this:

![mobile](/gitImages/mobileIncidents.jpg) ![mobile](/gitImages/mobileHelp.jpg)

### Tests

Tests were made using [Jest](https://jestjs.io/). to run then, you must go to the backend repository in your terminal and run **npm run test** or **yarn test** whichever you prefer.

### Built with

* [HTML5](https://www.w3.org/html/)
* [CSS3](https://www.w3.org/Style/CSS/Overview.en.html)
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [React](https://pt-br.reactjs.org/)
* [SQLite3](https://www.sqlite.org/index.html)
* [Knex](http://knexjs.org/)
* [Axios](https://github.com/axios/axios)
* [Expo](https://expo.io/)
* [Jest](https://jestjs.io/)

### Versioning
I use [Git](https://git-scm.com/) for versioning.

### Authors

* **Diego Fernandes** [diego3g](https://github.com/diego3g)
* **Rocketseat** [Rocketseat](https://github.com/Rocketseat)
* **Erick Vieira** [vieiraerick](https://github.com/vieiraerick)

### License

This project is licensed under the MIT License - see the [License.md](LICENSE) file for details.
