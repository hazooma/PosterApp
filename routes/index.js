import express from 'express';
import {
  getAllPrinters,
  getAllPrintersWithCountryInfo,
  makeOrder,
  getPrinterOrders,
} from '../controllers/PostersController';
const router = express.Router();

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
router.get('/printers', getAllPrinters);

// get all printers with Info
router.get('/printersInfo', getAllPrintersWithCountryInfo);

// get all printers in a country with id=1 for example
router.get('/getPrintersInCountry', getAPrinterInfo);

// get orders for specific printer
router.get('/getPrinterOrders', getPrinterOrders);

// create order
router.get('/makeOrder', makeOrder);
export default router;
