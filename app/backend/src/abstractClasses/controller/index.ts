import { Request, Response } from 'express';
import Service from '../service';

export type ResponseError = {
	error: unknown;
};

export interface RequestWithBody<T> extends Request {
	body: T;
}

enum ControllerErrors {
	internal = 'Internal Server Error',
	notFound = 'Object not found',
	requiredId = 'Id is required',
	badRequest = 'Bad request',
}

abstract class Controller<T> {
  protected errors = ControllerErrors;

  constructor(protected service: Service<T>) {}

	abstract create(
		req: RequestWithBody<T>,
		res: Response<T | ResponseError>
	): Promise<typeof res>;

	abstract read(
		_req: Request,
		res: Response<T[] | ResponseError>
	): Promise<typeof res>;

	// abstract readOne(
	//   req: Request<{ id: string }>,
	//   res: Response<T | ResponseError>
	// ): Promise<typeof res>;

	// abstract update(
	//   req: RequestWithBody<T & { id: string }>,
	//   res: Response<T | ResponseError >
	// ): Promise<typeof res>;

	abstract findOneAndDelete(
		req: Request,
		res: Response<T | ResponseError>
	): Promise<typeof res>;

	abstract delete(
		req: Request<{ id: string }>,
		res: Response<T | ResponseError>
	): Promise<typeof res>;
}

export default Controller;
