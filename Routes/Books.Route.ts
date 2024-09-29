import { Router } from 'express';
import { searchBooksByName, searchBooksByRent, searchBooksByCategoryNameRent, getAllBooks, } from '../Controllers/Books.Controllers';

const router = Router();

// routes
router.post('/searchByName', searchBooksByName);
router.post('/searchByRent', searchBooksByRent);
router.post('/searchByCategoryNameRent', searchBooksByCategoryNameRent);
router.get('/getallbook',getAllBooks);

export default router;
