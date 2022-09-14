import di from './di';
import { routes } from './route';

di.app.listen(di.env.SERVER_PORT, () => {
    console.log(`Server is listening on port: ${di.env.SERVER_PORT}`);
});

di.app.use(routes);
