"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Service {
    constructor(model) {
        this.model = model;
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(obj);
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.read();
        });
    }
    // public async readOne(id: string): Promise<T | null | ServiceError> {
    //   return this.model.readOne(id);
    // }
    // // public async update(id: string, obj: T): Promise<T | null | ServiceError> {
    // //   return this.model.update(id, obj);
    // // }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.delete(id);
        });
    }
    findOneAndDelete(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findOneAndDelete(filter);
        });
    }
}
exports.default = Service;
//# sourceMappingURL=index.js.map