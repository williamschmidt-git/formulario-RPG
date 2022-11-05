"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
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
mongoose_1.default.connect('mongodb+srv://rojao:13tiro@rojao.covwnst.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Foi!!!!!!!!!!!!!!!!!!!!!!!!!');
})
    .catch((e) => {
    console.log(e);
});
exports.default = connectToDatabase;
// mongodb://username:password@host:port/db
//# sourceMappingURL=connection.js.map