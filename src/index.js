import { initMongoConnections } from './db/initMongoConnection.js';
import { SetupServer } from './server.js';

const bootstrap = async() => {
    await initMongoConnections();
    SetupServer();
};

bootstrap();
