import { Request, Response, Router } from 'express';
import mediator from '../../core/mediator';
import AddProductCommand from './commands/AddProductCommand';
import GetAllProductsQuery from './queries/GetAllProductsQuery';
import GetProductsForTheUserCommand from './queries/GetProductsForTheUserQuery';

const router = Router();
/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     description: Adds a new product to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The product's name.
 *                 example: Smartphone
 *               description:
 *                 type: string
 *                 description: The product's description.
 *                 example: Gadget for making calls
 *               price:
 *                 type: number
 *                 description: The product's price.
 *                 example: 22
 *     responses:
 *       200:
 *         description: Returns the newly created product.
 *       500:
 *         description: A server error occurred.
 */
router.post('/', async (req: Request, res: Response) => { 
    const addProductCommand = new AddProductCommand();
    const payload: IAddProductPayload = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }
    const response = await mediator.send(addProductCommand, payload);
    res.send(response);
});

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get a products
 *     description: Returns a list of products.
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price: 
 *                   type: number
 */
router.get('/', async (req: Request, res: Response) => {
    const getAllProductsQuery = new GetAllProductsQuery();
    const response = await mediator.send(getAllProductsQuery, null);
    res.send(response);
});

/**
 * @swagger
 * /products/suggestions/{userId}:
 *   get:
 *     summary: Get a products that user can afford to buy
 *     description: Returns a list of products.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to get products
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of affordable products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price: 
 *                   type: number
 */
router.get('/suggestions/:userId', async (req: Request, res: Response) => {
    const getProductForTheUserQuery = new GetProductsForTheUserCommand();
    const payload = {
        userId: +req.params.userId
    };   
    
    const response = await mediator.send(getProductForTheUserQuery, payload);
    
    res.send(response);
});

export default router;


