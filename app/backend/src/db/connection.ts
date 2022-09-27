import mongoose from 'mongoose';

// const options = {
//   user: 'user', // Usuário do banco de dados.
//   pass: 'password', // senha do usuário do banco de dados.
//   // autoIndex: false, // Não cria index para cada inserção de dado no banco.
//   // dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
// };

// mongoose.connect('db_mongo://db:27017/', options).then(() => {
//   console.log('successfully connected')
// });

const connectToDatabase = async () => 
  await mongoose.connect('mongodb://localhost:27017/RPG')

export default connectToDatabase;