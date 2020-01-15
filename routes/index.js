import express from 'express';
import {
  getAllPrinters,
  getAllPrintersWithCountryInfo,
  makeOrder,
  getPrinterOrders,
  getAPrinterInfo,
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
router.get('/countries/:id/printers', getAPrinterInfo);

// get orders for specific printer
router.get('/printers/:id/orders', getPrinterOrders);

// create order
router.post('/orders', makeOrder);
export default router;
