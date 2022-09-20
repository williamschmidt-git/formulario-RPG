import di from './di';
import { routes } from './route';

const { SERVER_PORT } = di.env

di.app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port: ${SERVER_PORT}`);
});

di.app.use(routes);
