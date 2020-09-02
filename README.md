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