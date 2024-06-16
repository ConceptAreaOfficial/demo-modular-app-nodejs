import { Router, Request, Response } from "express";
import mediator from "../mediator";

const router = Router();

/**
 * @swagger
 * /crossmodulecommunication?type=GetUserByID:
 *   post:
 *     summary: Get response from the other module
 *     description: Retrieves information from the other module.
 *     parameters:
 *       - in: query
 *         name: type
 *         required: true
 *         description: Type of cross-module communication.
 *         schema:
 *           type: string
 *           enum: [GetUserByID, AddProduct, GetAllProducts, AddUser, GetProductsForTheUser]
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user (For GetUserByID, GetProductsForTheUser queries)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved cross module information.
 *       404:
 *         description: Module not found.
 *       500:
 *         description: A server error occurred.
 */


router.post('/', async (req: Request, res: Response) => {
    try {
        const type = req.query.type;
        if(!type){
            throw Error("Incompatible type");
        }
        const command: ICommand<IPayload> | undefined = mediator.getCommandByType(String(type));
        if(!command){
            throw new Error("Command not found!");
        }
        const response = await mediator.send(command, req.body);
        
        res.send(response);
    } catch (error) {
        res.send(error).sendStatus(500);
    }
})

export default router;