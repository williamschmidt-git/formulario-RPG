import Service, { ServiceError } from '../../abstractClasses/service';
import RPG, { rpgZodSchema }  from '../schemas/RPG';
import RPGModel from '../model/RpgModel';

class RPGService extends Service<RPG> {
  constructor(protected model: RPGModel) {
    super(model);
  }

  create = async(obj: RPG): Promise<RPG | null | ServiceError> => {
    const parsed = rpgZodSchema.safeParse(obj);

    if(!parsed.success) {
      return { error: parsed.error};
    }

    return this.model.create(obj);
  };

  read = async(): Promise<RPG[]> => {
    const rpgs = this.model.read();

    return rpgs;
  };

  delete = async (id: string): Promise<RPG | null | ServiceError> => {
    return this.model.delete(id);
  };

  findOneAndDelete = async(rpg: RPG):
  Promise<RPG | null | ServiceError> => {
    const { chronicle: { storyTeller } } = rpg;
    return this.model.findOneAndDelete({'chronicle.storyTeller': storyTeller});
  };
}

export default RPGService;
