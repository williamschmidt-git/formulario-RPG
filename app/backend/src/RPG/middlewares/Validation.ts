import { Response, NextFunction } from "express";
import { RequestWithBody } from "../../abstractClasses/controller";
import Validation from "../../abstractClasses/middleware";
import RPG, { rpgZodSchema } from "../schemas/RPG";

class RPGValidation extends Validation<RPG> {
  public validate(req: RequestWithBody<RPG>, res: Response, next: NextFunction): typeof res | void {
    const parsed = rpgZodSchema.safeParse(req.body);

    if(!parsed.success) {
      return res.status(404).json(parsed.error);
    }
    next();
  }
}

export default RPGValidation;
