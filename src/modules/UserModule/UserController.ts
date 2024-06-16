import { Request, Response, Router } from 'express';
import mediator from '../../core/mediator';
import AddUserCommand from './commands/AddUserCommand';
import GetUserByIDQuery from './queries/GetUserByIDQuery';

const router = Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     description: Adds a new user to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: john.doe@example.com
 *               income:
 *                 type: number
 *                 description: The user's asalary.
 *                 example: 5500
 *     responses:
 *       200:
 *         description: Returns the newly created user.
 *       500:
 *         description: A server error occurred.
 */
router.post('/', async (req: Request, res: Response) => {
    const addUserCommand = new AddUserCommand();
    const payload: IAddUserPayload = {
        name: req.body.name,
        email: req.body.email,
        income: req.body.income
    }
    const response = await mediator.send(addUserCommand, payload);
    res.send(response);
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Returns a single user.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to return
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 */
router.get('/:id', async (req: Request, res: Response) => {
    const getUserByIDQuery = new GetUserByIDQuery();
    const payload: IGetUserByIDPayload = {
        userId: +req.params.id
    };
    const response = await mediator.send(getUserByIDQuery, payload);
    
    res.send(response);
});

export default router;
