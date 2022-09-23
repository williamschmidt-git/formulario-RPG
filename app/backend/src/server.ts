import di from './di';
import connectToDatabase from './model/MongoConnection';
import { routes } from './route';

const { SERVER_PORT } = di.env

di.app.listen(SERVER_PORT, () => {
    connectToDatabase()
    console.log(`Server is listening on port: ${SERVER_PORT}`);
});

di.app.use(routes);
