import { Router } from 'express';
import { searchBooksByName, searchBooksByRent, searchBooksByCategoryNameRent, getAllBooks, } from '../Controllers/Books.Controllers';

const router = Router();

// routes
router.get('/searchByName', searchBooksByName);
router.get('/searchByRent', searchBooksByRent);
router.get('/searchByCategoryNameRent', searchBooksByCategoryNameRent);
router.get('/getallbook',getAllBooks);

export default router;
