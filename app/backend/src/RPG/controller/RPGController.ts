import { Response } from 'express';
import Controller,
{ RequestWithBody,
  ResponseError } from '../../abstractClasses/controller';
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
    const rpg = await this.service.create(body);
    if (!rpg) {
      return res.status(500).json({ error: this.errors.internal });
    }

    if ('error' in rpg) {
      return res.status(400).json({ error: rpg.error });
    }

    return res.status(201).json(rpg);
  };

  read = async (
    req: RequestWithBody<RPG>,
    res: Response<RPG[] | ResponseError>,
  ): Promise<typeof res> => {
    const rpgs = await this.service.read();

    if(!rpgs) {
      return res.status(404).json({error: this.errors.notFound });
    }

    return res.status(200).json(rpgs);
  };

  delete = async (
    req: RequestWithBody<RPG>,
    res: Response<RPG | ResponseError>): Promise<typeof res> => {
    const { id } = req.params;
    const rpg = await this.service.delete(id);

    if(!rpg) {res.status(404).json({ error: this.errors.notFound });}

    return res.status(204).end();
  };

  findOneAndDelete = async (
    req: RequestWithBody<RPG>,
    res: Response<RPG | ResponseError>
  ): Promise<typeof res> => {
    const rpg = await this.service.findOneAndDelete(req.body);

    if(!rpg) {res.status(404).json({error: this.errors.notFound });}

    return res.status(200).end();
  };

  update = async(
    req: RequestWithBody<RPG>,
    res: Response<RPG | ResponseError>
  ): Promise<typeof res> => {
    const { body } = req;
    const { id } = req.params;

    const response = await this.service.update(id, body);

    return response ? res.json(response) : res.status(404).json({
      error: this.errors.notFound
    });
  };
}

export default RPGController;
