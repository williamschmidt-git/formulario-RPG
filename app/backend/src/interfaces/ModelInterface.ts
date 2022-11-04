import { QueryOptions } from "mongoose";

export interface Model<T>{
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  // readOne(id: string): Promise<T | null>,
  findByIdAndUpdate(id: string, obj: T, obj2: QueryOptions): Promise<T | null>,
  findOneAndDelete(filter: object): Promise<T | null>,
  delete(id: string): Promise<T | null> 
}
