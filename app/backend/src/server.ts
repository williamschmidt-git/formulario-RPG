import di from "./di";
import { healthCheck } from "./route/healthCheck";

// const app = express();

// app.use(express.json());
// app.use(healthCheck);
// app.listen(8080, () => {
//   console.log("Server is listening on port: 8080 ");
// });
console.log(di.env.DATABASE_HOST);
di.app.listen(di.env.SERVER_PORT, () => {
  console.log(`Server is listening on port: ${di.env.SERVER_PORT}`);
});
di.app.use(healthCheck);
