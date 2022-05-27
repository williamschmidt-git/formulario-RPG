import { healthCheck } from './healthCheck';
import { userRoute } from './user';

const routes = [userRoute, healthCheck];

export { routes as routes };
