import express from 'express';
const router = express.Router();
import knex from '../data/db';
import { addDays } from '../helpers/Datehelper';
/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Hello World');
});

router.get('/test', (req, res) => {
  knex
    .from('printers')
    .select('name')
    .then(ans => {
      res.status(200).send(ans);
    });
});

// get all printers
router.get('/printers', (req, res) => {
  knex
    .from('printers')
    .select('name', 'phone', 'email', 'country_id')
    .then(ans => {
      res.status(200).send(ans);
    });
});

// get all printers with Info
router.get('/printersInfo', (req, res) => {
  knex('printers')
    .join('countries', 'printers.country_id', '=', 'countries.id')
    .select(
      'printers.name',
      'printers.phone',
      'printers.email',
      'countries.name as countryName'
    )
    .then(ans => {
      res.status(200).send(ans);
    });
});

// get all printers in a country with id=1 for example
router.get('/getPrintersInCountry', (req, res) => {
  knex('printers')
    .where('country_id', '=', '1')
    .select('name', 'phone', 'email')
    .then(ans => {
      res.status(200).send(ans);
    });
});

// get orders for specific printer
router.get('/getPrinterOrders', (req, res) => {
  const printer_id = 1;
  knex('printers')
    .where('printers.id', '=', printer_id)
    .join('orders', 'orders.printer_id', '=', 'printers.id')
    .join('products', 'orders.product_id', '=', 'products.id')
    .join('countries', 'countries.id', '=', 'orders.country_id')
    .join(
      'countries AS printerCountry',
      'printerCountry.id',
      '=',
      'printers.country_id'
    )

    .select(
      'orders.name as OrderName',
      'orders.toBeDelivered_At as DeilveredAt',
      'printers.email as PrinterEmail',
      'products.name as ProductOrdered',
      'printers.name as PrinterName',
      'countries.name as Destination',
      'printerCountry.name as shippedFrom'
    )
    .then(ans => {
      res.status(200).send(ans);
    });
});

// create order
router.get('/makeOrder', (req, res) => {
  const product_id = 1; // product_id
  const destination = 1; // country_id

  knex('printers')
    .join('product_printers', 'printers.id', '=', 'product_printers.printer_id')
    .where('product_printers.product_id', '=', product_id)
    .join(
      'delievery_times',
      'delievery_times.source',
      '=',
      'printers.country_id'
    )
    .where('delievery_times.destination', '=', destination)
    .orderBy('delievery_times.period', 'asc')
    .limit(1)
    .then(ans => {
      if (!ans) {
        res.status(201).send("We Can't do this Order");
      }
      knex('orders')
        .insert(
          {
            product_id: product_id,
            printer_id: ans[0].printer_id,
            country_id: destination,
            toBeDelivered_At: addDays(ans[0].period).toString(),
            name: 'product cool',
          },
          'order'
        )
        .then(order => {
          res
            .status(200)
            .send({ response: 'Order Created Successfully !', order });
        });
    });
});
export default router;