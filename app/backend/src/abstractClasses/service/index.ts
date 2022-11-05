import { ZodError } from 'zod';
import { Model } from '../../interfaces/ModelInterface';

export interface ServiceError {
  error: ZodError;
}

abstract class Service<T> {
  constructor(protected model: Model<T>) {}

  public async create(obj: T): Promise<T | null | ServiceError> {
    return this.model.create(obj);
  }

  public async read(): Promise<T[]> {
    return this.model.read();
  }

  // public async readOne(id: string): Promise<T | null | ServiceError> {
  //   return this.model.readOne(id);
  // }

  public async update(id: string, obj: T): Promise<T | null | ServiceError | undefined> {
    return this.model.findByIdAndUpdate(id, obj, { new: true });
  }

  public async delete(id: string): Promise<T | null | ServiceError> {
    return this.model.delete(id);
  }

  public async findOneAndDelete(filter: object):
  Promise<T | null | ServiceError> {
    return this.model.findOneAndDelete(filter);
  }  
}

export default Service;
