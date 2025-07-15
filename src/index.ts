import './loadEnv';
import app from './app';
import prisma from './config/prisma';
import { PORT } from './constants';
import { createServer } from 'http';
import { initSocketIO } from './config/socket';

const server = createServer(app);


// Database connection
prisma.$connect()
    .then(() => {
        console.log('Connected to the database successfully');

        // Start the server
        server.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    });
