import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const errorMiddlware = (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res.status(500).json(err);
};

export default errorMiddlware;
