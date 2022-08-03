import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserReq } from "../interfaces/user";

export const userCreateSchema: SchemaOf<IUserReq> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required(),
  age: yup.number().required(),
});

const ValidateUserCreateMiddleware =
  (schema: SchemaOf<IUserReq>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.body.newUser = validatedData;

        next();
      } catch (err: any) {
        return res.status(400).json({
          message: err.message,
        });
      }
    } catch (err: any) {
      next(err);
    }
  };

export default ValidateUserCreateMiddleware;
