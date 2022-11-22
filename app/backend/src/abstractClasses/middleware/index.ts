import { Response, NextFunction } from "express";
import { RequestWithBody } from "../controller";
// import { RequestWithBody } from "../controller";

export default abstract class Validation<T> {
  abstract validate(req: RequestWithBody<T>, res: Response, next: NextFunction): typeof res | void
}
