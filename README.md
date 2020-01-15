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
also given data in the task are seeded 

- `printers` represents the printers that the company have ,given data in the task are seeded 
- `orders` represnts the orders done by the company .
# Endpoints -

- `localhost:26062/printersInfo` gets all the printers with Info in the systme (GET)
- `localhost:26062/countries/:id/printers` Get all the printers in a country , remeber the seeded country ids (GET)
- `localhost:26062/countries/:id/orders` Get all orders that were shipped to a specific country (GET)
- `localhost:26062/printers/:id/orders` Get orders for specific printer (GET)
- `localhost:26062/orders` create order (POST) .
--------------------------------------------------------------------

 # Make order 
 - input: ` {product_id :the id of product requested ,destination : destination country }` .
 - The end point will assign the order  to the nearest printer and make an order ! the magic happens here 
 so for example making order with those , `product_id:1` means a `poster` and  `destination:4` which is Austria ! , 	the app will select the printer number 2 to make it and the order will be issied by it because it takes lkess time to 	   deliver it !
`{
	"product_id":1,
	"destination":4
}
`




