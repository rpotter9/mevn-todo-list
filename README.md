![MEVN ToDo List](https://raw.githubusercontent.com/rpotter9/assets/master/mevn-todo-list/mevn.png)

# MEVN ToDo List

> An app to demonstrate CRUD with a REST API using the MEVN stack

## Tech Used

Client/Frontend:
* Generated Vue project using [Vue CLI v4](https://cli.vuejs.org/)
* [VueJs (Vuex + Vue Router)](https://vuejs.org/)
* [Axios](https://github.com/axios/axios)
* [Buefy](https://github.com/buefy/buefy)

Server/Backend:
* [NodeJs](https://nodejs.org/en/)
* DB - [MariaDB](https://mariadb.com/kb/en/getting-started-with-the-nodejs-connector/)
* REST API - [Express](https://expressjs.com/)
* ORM - [Sequelize v6](https://sequelize.org/)

# Installation

### Pre-Requisites
> Below must be installed on your executing machine

* [MariaDB Server 10.5.5](https://mariadb.org/download/)
* Nodemon `npm i -g nodemon
---
## Setup

```bash
$ git clone https://github.com/rpotter9/mevn-todo-list.git
```

## Client

1. Change directory to `client`

    ```bash
    $ cd .\client\
    ```

2. Run npm install

    ```bash
    $ npm install
    ```

3. Run the client
    ```bash
    $ npm run serve
    ```

## Server


1. Change directory to `server`

    ```bash
    $ cd .\server\
    ```

2. Run npm install

    ```bash
    $ npm install
    ```

3. Create .env file in `/server` with the following (change as appropriate):

    ```env
    DB_NAME=my-vue-db-name
    DB_USER=root
    DB_PASSWORD=password
    ```

4. Run the server:

     ```bash
    $ npm start
    ```


# FAQs

### Q. Do you have a working demo?
> A. Not at the moment, but should be coming soon!

### Q. Where's Mongo?!     
> A. Every article in the MEAN, MEVN, MERN stack uses MongoDB. For me coming from a RDBMS background (MSSQL, MySQL), I wanted to use RDBMS instead so MariaDB was the choice! 🦦

### Q. Why so many files for which is, effectively, an app that only has one page?      
> A. I wanted to created a project that would allow me to experiment a folder structure, by the use of modules and not roles. I found many articles and documentation focused on a role structure, which I could only see troublesome when thinking about scalibility and maintenance; it also gets very confusing with many files with the same name open in vs code! So I took the module approach. By doing so, if I wanted to add a new module such as "User", this is relatively contained in its own folder and less likely to cause bugs with the amount of touches to existing files...well that's the idea anyway 😬

### Q. No tests? Where are your tests?
> A. Yup, I'm still looking for them too.       
This app was thrown up within a week and after spending 60+ hours in my spare time of learning VueJs, Node & Express, I needed to do something with it and put it down "on paper", rather than thinking about what I could be doing. JS testing is next on my list.

### Q. Neither project has any optimisation for production nor production has even been thought of.
> A. Correct. And for the moment, I don't intend it to be ready for production. This project is more of a playground on how I imagine a project might go, how it might structure.


# Things to take away & consider for next project

* Stick to either using plural or singuler for naming convention of files e.g. tasks.model.js or task.model.js
* Test, Test, TEST!! Must include testing on all areas 🙈
* Consistency with js code. There's a mixture on how modules are exported or wrapped up. Maybe use ESLint for this?
* Investigate more time with using SCSS. A lot more could be achieved with the use of variables that comes with Buefy. (I'm no web designer)

## License <a href="https://github.com/rpotter9/mevn-todo-list/blob/master/LICENSE"><img src="https://img.shields.io/github/license/rpotter9/mevn-todo-list?style=flat-square" /></a>

Code released under [WTFPL](https://github.com/rpotter9/mevn-todo-list/blob/master/LICENSE) license.

