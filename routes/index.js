import express from 'express';
import {
  getAllPrinters,
  getAllPrintersWithCountryInfo,
  makeOrder,
  getPrinterOrders,
  getAPrinterInfo,
  getACountryOrders,
} from '../controllers/PostersController';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Hello World');
});

// get all printers
router.get('/printers', getAllPrinters);

// get all printers with Info
router.get('/printersInfo', getAllPrintersWithCountryInfo);

// Get all printers in a specific country
router.get('/countries/:id/printers', getAPrinterInfo);

//Get all orders that were shipped to a specific country
router.get('/countries/:id/orders', getACountryOrders);

//Get orders for specific printer
router.get('/printers/:id/orders', getPrinterOrders);

// create order
router.post('/orders', makeOrder);

export default router;
