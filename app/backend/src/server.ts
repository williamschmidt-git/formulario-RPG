import di from './di';
import { healthCheck } from './route/healthCheck';
import { routes } from './route/routes';
import { userRoute } from './route/user';

console.log(di.env.DATABASE_HOST);
di.app.listen(di.env.SERVER_PORT, () => {
    console.log(`Server is listening on port: ${di.env.SERVER_PORT}`);
});

di.app.use(routes);
