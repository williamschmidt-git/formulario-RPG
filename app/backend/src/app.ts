import express, { Router } from 'express';
import connectToDatabase from './db/connection';
import mongoose from 'mongoose';

class App {
	public app: express.Application;

	constructor() {
		this.app = express();
		this.app.use(express.json());
	}

	public async startServer(PORT: string | number = 3001): Promise<void> {
		// const options = {
		// 	user: 'user', // Usuário do banco de dados.
		// 	pass: 'password', // senha do usuário do banco de dados.
		// 	// autoIndex: false, // Não cria index para cada inserção de dado no banco.
		// 	// dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
		// };

		// mongoose.connect('dbmongo://localhost:27017/', options).then(() => {
		// 	console.log('successfully connected');
		// });
		mongoose
			.connect('mongodb://dbmongo:27017')
			.then(() => {
				console.log('loguei no db');
			})
			.catch((err) => {
				console.log(err);
			});
		this.app.listen(PORT, () =>
			console.log(`Server running on http://localhost:${PORT}`)
		);
	}

	public addRouter(router: Router) {
		this.app.use(router);
	}

	public getApp() {
		return this.app;
	}
}

export default App;

//classe app
