import { Response } from 'express';
import Controller,
  { RequestWithBody,
  ResponseError } from '../../abstractClasses/controller'
import RPGService from '../service/RPGService';
import RPG from '../schemas/RPG';

class RPGController extends Controller<RPG> {
  constructor(
    service: RPGService,
  ) {
    super(service);
  }

  create = async (
    req: RequestWithBody<RPG>,
    res: Response<RPG | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const rpg = await this.service.create(body);
      if (!rpg) {
        return res.status(500).json({ error: this.errors.internal });
      }

      if ('error' in rpg) {
        return res.status(400).json(rpg);
      }

      return res.status(201).json(rpg);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  read = async (
    req: RequestWithBody<RPG>,
    res: Response<RPG[] | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const rpgs = await this.service.read();

      if(!rpgs) {
        return res.status(500).json({error: 'error'})
      }

      return res.status(200).json(rpgs)
    } catch (err) {
      return res.status(500).json({error: 'error'})
    }
  }
}

export default RPGController;