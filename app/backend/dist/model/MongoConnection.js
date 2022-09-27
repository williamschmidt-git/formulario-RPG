"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const options = {
    user: 'user',
    pass: 'password', // senha do usuário do banco de dados.
    // autoIndex: false, // Não cria index para cada inserção de dado no banco.
    // dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
};
// mongoose.connect('db_mongo://db:27017/', options).then(() => {
//   console.log('successfully connected')
// });
const connectToDatabase = () => mongoose_1.default.connect('mongodb://db:27017/', options);
exports.default = connectToDatabase;
//# sourceMappingURL=MongoConnection.js.map