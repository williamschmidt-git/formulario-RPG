import { Model as M, Document, UpdateWithAggregationPipeline } from 'mongoose';
import { Model } from '../../interfaces/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { }

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  read = async (): Promise<T[]> => this.model.find();

  // readOne = async (id: string): Promise<T | null> =>
  //   this.model.findOne({_id: id});


  //for future references https://mongoosejs.com/docs/tutorials/findoneandupdate.html
  findByIdAndUpdate = async (id: string, obj: T):
  Promise<T | null> => this.model.findByIdAndUpdate(id, obj as unknown as UpdateWithAggregationPipeline, { new: true });

  findOneAndDelete = async (filter: object): Promise<T | null> => 
    this.model.findOneAndDelete(filter);

  delete = async (id: string): Promise<T | null> =>
    this.model.findByIdAndDelete(id);

  //findOneAndThrow

  findByEmail = async(user: object): Promise<T | null> =>
    this.model.findOne(user);
    
}

export default MongoModel;
