import { Express } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Modular_monolith NodeJS project',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
            {
                url: 'http://localhost:3001',
                description: 'Development server2',
            }
        ]
    },
    apis: ['./src/**/*.ts'],
};

export default function swagger(app: Express) {
    const specs = swaggerJsdoc(swaggerOptions);
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));
}
