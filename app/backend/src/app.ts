import express, { Router } from 'express';
import connectToDatabase from './db/connection';
import errorMiddlware from './middleware/errorMiddleware';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(errorMiddlware);
  }

  public startServer(PORT: string | number = 3001): void {
    connectToDatabase();
    this.app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App;

