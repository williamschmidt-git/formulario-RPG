"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongoModel {
    model;
    constructor(model) {
        this.model = model;
    }
    create = async (obj) => this.model.create({ ...obj });
    read = async () => this.model.find();
    readOne = async (id) => this.model.findOne({ _id: id });
    update = async (id, obj) => this.model.findByIdAndUpdate({ _id: id }, { $set: obj });
    delete = async (id) => this.model.findByIdAndDelete(id);
}
exports.default = MongoModel;
//# sourceMappingURL=MongoModel.js.map