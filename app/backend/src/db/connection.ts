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

const connectToDatabase = () =>
  // eslint-disable-next-line max-len
  mongoose.connect('mongodb+srv://rojao:13tiro@rojao.covwnst.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Foi!!!!!!!!!!!!!!!!!!!!!!!!!');
  })
    .catch((e) => {
      console.log(e);
    });

export default connectToDatabase;

// mongodb://username:password@host:port/db
