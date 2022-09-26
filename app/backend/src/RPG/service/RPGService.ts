import Service, { ServiceError } from '../../abstractClasses/service'
import RPG, { rpgZodSchema }  from '../schemas/RPG'
import RPGModel from '../model/RPGModel'

class RPGService extends Service<RPG> {
  constructor(protected model: RPGModel) {
    super(model)
  }

  create = async(obj: RPG): Promise<RPG | null | ServiceError> => {
    const parsed = rpgZodSchema.safeParse(obj);

    if(!parsed.success) {
      return { error: parsed.error}
    }
 
    return this.model.create(obj)
  }

  read = async(): Promise<RPG[]> => {
    const rpgs = this.model.read();

    return rpgs
  }
}

export default RPGService