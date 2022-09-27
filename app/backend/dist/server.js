"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("./di");
const MongoConnection_1 = require("./model/MongoConnection");
const route_1 = require("./route");
const { SERVER_PORT } = di_1.default.env;
di_1.default.app.listen(SERVER_PORT, () => {
    (0, MongoConnection_1.default)();
    console.log(`Server is listening on port: ${SERVER_PORT}`);
});
di_1.default.app.use(route_1.routes);
//# sourceMappingURL=server.js.map