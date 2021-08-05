# This project is written in node-express and used postgresql as database

Before running application don't forget to add configs.env file inside config folder, your env file should be like this

| KEY            | VALUE                     | DESCRIPTION                                                              |
| -------------- | ------------------------- | ------------------------------------------------------------------------ |
| PORT           | number                    | default port is 5000                                                     |
| NODE_ENV       | development or production | set to production before deploying                                       |
| DB_NAME        | string                    | required, database name creted before                                    |
| DB_USERNAME    | string                    | default username is postgres                                             |
| DB_PASSWORD    | string                    | required its set when installing postgresql ( but can be changed later ) |
| DB_HOST        | string                    | deafult database host is localhost                                       |
| DB_DIALECT     | string                    | should be set to postgres                                                |
| JWT_SECRET     | string                    | must be set (more than 35 characters is adviced)                         |
| JWT_EXPIRES_IN | string                    | 30d, 1y, 60m ( write in this mode )                                      |

And then install project dependencies (node_modules):

```cmd
npm install
```

To create admin user, run command from below in your terminal

```cmd

npm run data:import
```

To destroy all users from database, run command from below in your terminal

```cmd
npm run data:destroy
```

To run app in development mode

```cmd
npm run dev
```

To run app in production mode

```cmd
npm start
```

## API DOCS

HTTP requests available

POST: /auth/login
POST: /contacts
GET: /admingate/contacts (\*token required)

For more information check postman_collectoins
