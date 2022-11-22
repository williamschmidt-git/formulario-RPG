import { Response, NextFunction } from "express";
import { RequestWithBody } from "../../abstractClasses/controller";
import Validation from "../../abstractClasses/middleware";
import User, { userZodSchema } from "../schemas/User";

class UserValidation extends Validation<User> {
  public validate(req: RequestWithBody<User>, res: Response, next: NextFunction): typeof res | void {
    const parsed = userZodSchema.safeParse(req.body);

    if(!parsed.success) {
      return res.status(404).json(parsed.error);
    }
    next();
  }
}

export default UserValidation;
