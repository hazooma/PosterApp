Welcome to my solution to the task !


# Overview

# Getting started
Before you start you should have a recent version of `npm` and `node`
installed.
To start the server go into the `server` directory and run
```
  npm install
  npm start
```
To see whether the server works check <http://localhost:26062> and see if you
get `Hello World` message.

Before using the app . make sure of creating the database and inserting some data into it 
- Migrations && Seeding 
```
knex migrate:latest
knex seed:run
```
To run the tests go run
```
npm test
```

# Environment -
The seeded data used to form the current state of the app . 

# Tables -
- `products` represents the products the the company provides either `poster` or `forex` . 
by default we have 2 products seeded in the databas `{name:"poster",id:1}``{name:"forex",id:2}`
- `countries` represents the counries the the company can deal with.
by default we have 4 countries seeded in the database with differend Ids .`{name:"Germany",id:1}
{name:"Italy",id:2}{name:"Fraance",id:3}{name:"Austria",id:4}`

- `delievery_times` represents the time of delivery between two countries 
also give data in the task are seeded .
-`printers` represents the printers that the company have 
-`orders` represnts the orders done by the company .
